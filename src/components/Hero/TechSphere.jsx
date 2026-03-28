import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WireframeIcosahedron() {
  const meshRef = useRef();
  const pointsRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      
      // Mouse parallax
      const { x, y } = state.pointer;
      meshRef.current.rotation.x += y * 0.3;
      meshRef.current.rotation.y += x * 0.3;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 0]} />
        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={200}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#818cf8"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function CSSFallback() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <div className="absolute inset-0 border-2 border-accent/30 rounded-full animate-spin-slow" />
      <div className="absolute inset-4 border border-cyan/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
      <div className="absolute inset-8 border border-violet/20 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-cyan/5 rounded-full animate-glow-pulse" />
    </div>
  );
}

export default function TechSphere() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (isMobile) return <CSSFallback />;

  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <WireframeIcosahedron />
      </Canvas>
    </div>
  );
}
