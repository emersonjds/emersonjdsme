"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";

function ParticleField() {
  const count = 200;
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.008}
        color="#7c3aed"
        transparent
        opacity={0.25}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function Scene3D() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 -z-10 opacity-40" aria-hidden="true" role="presentation">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1]}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}
