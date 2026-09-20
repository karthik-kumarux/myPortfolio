import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DataTorus() {
  const innerRef = useRef();
  const outerRef = useRef();

  // Generate torus particles
  const { innerParticles, outerParticles } = useMemo(() => {
    const generateTorus = (count, R, r) => {
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const u = Math.random() * Math.PI * 2;
        const v = Math.random() * Math.PI * 2;
        
        // Add noise/scatter to the minor radius to make it look like a cloud/swarm
        const scatter = (Math.random() - 0.5) * 0.8;
        const radius = r + scatter;

        const x = (R + radius * Math.cos(v)) * Math.cos(u);
        const y = (R + radius * Math.cos(v)) * Math.sin(u);
        const z = radius * Math.sin(v);
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
      }
      return positions;
    };

    return {
      innerParticles: generateTorus(5000, 3, 0.5), // Dense, tight inner ring
      outerParticles: generateTorus(2500, 4.2, 1.2) // Loose, scattered outer ring
    };
  }, []);

  useFrame((state, delta) => {
    if (innerRef.current) {
      innerRef.current.rotation.z += delta * 0.2; // Fast rotation
      innerRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1; // Slight wobble
    }
    if (outerRef.current) {
      outerRef.current.rotation.z -= delta * 0.08; // Slow counter-rotation
      outerRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group rotation={[Math.PI / 2.5, 0, 0]}>
      {/* Inner dense data stream */}
      <Points ref={innerRef} positions={innerParticles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#38bdf8" // Ice Blue
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* Outer dispersed security perimeter */}
      <Points ref={outerRef} positions={outerParticles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#e11d48" // Vivid Crimson
          size={0.045}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
        {/* Fog to fade out particles in the distance */}
        <fog attach="fog" args={['#050505', 6, 20]} />
        <ambientLight intensity={0.5} />
        <DataTorus />
      </Canvas>
      
      {/* Overlay gradient to blend the 3D canvas into the page */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(5,5,5,0) 0%, rgba(5,5,5,0.6) 75%, rgba(5,5,5,1) 100%)',
        zIndex: 1
      }}></div>
    </div>
  );
}
