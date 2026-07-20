"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sphere } from "@react-three/drei";
import { EffectComposer, DepthOfField, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

function NetworkGraph() {
  const groupRef = useRef<THREE.Group>(null);

  const { nodes, edges } = useMemo(() => {
    const nodeCount = 40;
    const nodes: THREE.Vector3[] = [];
    const edges: [number, number][] = [];

    // Generate nodes in a sphere-like distribution
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 3 + Math.random() * 4;
      nodes.push(
        new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        )
      );
    }

    // Connect nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 3.5 && Math.random() < 0.35) {
          edges.push([i, j]);
        }
      }
    }

    return { nodes, edges };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
      
      // Cinematic fly-through effect based on scroll
      const scrollY = window.scrollY;
      groupRef.current.position.z = scrollY * 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Edges */}
      {edges.map(([a, b], i) => {
        const start = nodes[a];
        const end = nodes[b];
        return (
          <Line
            key={`edge-${i}`}
            points={[start, end]}
            color="rgba(212, 212, 216, 0.15)"
            lineWidth={0.5}
            transparent
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((pos, i) => (
        <Float key={`node-${i}`} speed={1 + Math.random() * 2} floatIntensity={0.15}>
          <Sphere position={pos} args={[0.04, 8, 8]}>
            <meshBasicMaterial color="#D4D4D8" transparent opacity={0.5} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-5 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.2]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.1} />
        <NetworkGraph />
        <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
          <Noise opacity={0.04} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
      {/* Gradient overlay to fade the 3D scene into the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
    </div>
  );
}
