import { TimelineEntry } from "../../types";

export const timelineEntries: TimelineEntry[] = [
  {
    id: "btech",
    date: "2023 – 2027",
    title: "B.Tech in Computer Science & Engineering (AI & ML)",
    organization: "Madanapalle Institute of Technology & Science",
    description:
      "Pursuing Bachelor of Technology with a specialization in Artificial Intelligence and Machine Learning. Current CGPA: 8.03 / 10.0. Coursework includes data structures, algorithms, operating systems, computer networks, and machine learning.",
    type: "education",
  },
  {
    id: "cert-cybersec-pro",
    date: "2025",
    title: "Cyber Security Professional Program (240 Hours)",
    organization: "Ethnotech Academy Pvt. Ltd.",
    description:
      "Comprehensive 240-hour cybersecurity training covering ethical hacking, network defense, web/API security, SOC operations & SIEM, and cloud security fundamentals. Hands-on experience with Burp Suite, OWASP ZAP, Nmap, Metasploit, Splunk, and Wireshark.",
    type: "certification",
  },
  {
    id: "cert-cisco",
    date: "2024",
    title: "Cybersecurity Essentials & Network Basics",
    organization: "Cisco Networking Academy",
    description:
      "Foundational certification in cybersecurity essentials and network fundamentals from Cisco's globally recognized networking academy.",
    type: "certification",
  },
  {
    id: "cert-coursera",
    date: "2024",
    title: "Fundamentals of Cybersecurity",
    organization: "Coursera",
    description:
      "Completed foundational cybersecurity coursework covering threat landscapes, security principles, and defensive strategies.",
    type: "certification",
  },
  {
    id: "cert-nasscom",
    date: "2024",
    title: "Digital 101 Gold Certificate",
    organization: "NASSCOM",
    description:
      "Gold-level certification in digital fundamentals from India's premier technology industry body.",
    type: "certification",
  },
  {
    id: "achievement-expo",
    date: "2025",
    title: "Winner, Department-Level Project Expo",
    organization: "Madanapalle Institute of Technology & Science",
    description:
      "Awarded first place at the department-level project expo for innovative engineering project demonstrating technical excellence and practical problem-solving.",
    type: "achievement",
  },
  {
    id: "achievement-hackerrank",
    date: "2024",
    title: "HackerRank 3-Star Badge in C Programming",
    organization: "HackerRank",
    description:
      "Earned 3-star rating in C programming on HackerRank, demonstrating strong proficiency in data structures and algorithms.",
    type: "achievement",
  },
  {
    id: "achievement-aimex",
    date: "2025",
    title: "Event Coordinator, AIMEX 2K25",
    organization: "Madanapalle Institute of Technology & Science",
    description:
      "Managed end-to-end logistics and participant coordination for a departmental technical fest, overseeing event planning, resource allocation, and on-ground execution.",
    type: "achievement",
  },
  {
    id: "achievement-iqnite",
    date: "2025",
    title: "Coordinator, IQNITE",
    organization: "Madanapalle Institute of Technology & Science",
    description:
      "Designed and ran a competitive quiz platform challenge, creating technical problem statements and managing the competition workflow.",
    type: "achievement",
  },
];

export const educationTimeline = timelineEntries.filter((e) => e.type === "education");
export const certificationTimeline = timelineEntries.filter((e) => e.type === "certification");
export const achievementTimeline = timelineEntries.filter((e) => e.type === "achievement");
