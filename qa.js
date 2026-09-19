const { chromium } = require('playwright');
const fs = require('fs');

async function runQA() {
  // Use the system Chrome/Edge instance by specifying the channel
  // The system prompt mentions: system Chrome/Edge using channel (no browser download needed)
  const browser = await chromium.launch({
    channel: 'msedge' // or chrome, let's try msedge which is commonly available on Windows
  }).catch(async (e) => {
    // fallback to chrome
    console.log("Fallback to chrome...");
    return await chromium.launch({ channel: 'chrome' });
  });

  const page = await browser.newPage();

  const viewports = [
    { width: 320, height: 568, name: '320px' },
    { width: 375, height: 667, name: '375px' },
    { width: 768, height: 1024, name: '768px' },
    { width: 1024, height: 768, name: '1024px' },
    { width: 1440, height: 900, name: '1440px' }
  ];

  const routes = [
    { path: '/', name: 'home' },
    { path: '/work', name: 'work_index' },
    { path: '/work/math-adaptive-reasoning', name: 'cs_math' },
    { path: '/work/vaptaas', name: 'cs_vaptaas' },
    { path: '/work/deception-platform', name: 'cs_deception' },
    { path: '/work/nexcode', name: 'cs_nexcode' },
    { path: '/work/crack-analysis', name: 'cs_crack' },
    { path: '/profile', name: 'profile' },
    { path: '/contact', name: 'contact' }
  ];

  if (!fs.existsSync('qa-artifacts')) {
    fs.mkdirSync('qa-artifacts');
  }

  for (const route of routes) {
    console.log(`Testing route: ${route.name}`);
    await page.goto(`http://localhost:8080${route.path}`);

    // Check accessibility semantics, etc.
    const h1 = await page.locator('h1').textContent();
    console.log(`[${route.name}] H1 Text: ${h1}`);

    // Test viewport sizes
    for (const v of viewports) {
      await page.setViewportSize({ width: v.width, height: v.height });
      await page.waitForTimeout(500); // allow paint

      // Accessibility checks
      const horizontalOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      console.log(`[${route.name}] [${v.name}] Horizontal overflow: ${horizontalOverflow ? 'YES' : 'NO'}`);

      await page.screenshot({ path: `qa-artifacts/${route.name}-${v.name}.png` });
    }
  }

  await browser.close();
}

runQA().catch(console.error);
