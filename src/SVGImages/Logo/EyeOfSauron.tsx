'use client';
import { PerspectiveCamera, useTexture } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import style from './EyeOfSauron.module.css';

type EyeProps = {
  texturePath?: string;
};

const Eye: React.FC<EyeProps> = ({ texturePath = 'ojo.png' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(texturePath);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  // Movimiento del iris siguiendo el mouse
  const { viewport } = useThree();
  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const t = state.clock.getElapsedTime();
    setTime(t);

    // Suave oscilación del iris (dilatación)
    const scale = 1 + Math.sin(t * 1.5) * 0.03;
    mesh.scale.set(scale, scale, scale);

    // Movimiento del ojo hacia el cursor
    const rotationX = THREE.MathUtils.lerp(mesh.rotation.x, mouse.y * 0.3, 0.05);
    const rotationY = THREE.MathUtils.lerp(mesh.rotation.y, mouse.x * 0.3, 0.05);
    mesh.rotation.x = rotationX;
    mesh.rotation.y = rotationY;
  });

  // Listener del mouse
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64, 200, 200, 0]} />
      <meshStandardMaterial
        map={texture}
        emissive={new THREE.Color(0xff5500)}
        emissiveIntensity={1}
        roughness={0.1}
        metalness={1.1}
      />
    </mesh>
  );
};

const EyeOfSauron: React.FC<EyeProps> = ({ texturePath }) => {
  return (
    <div className={style.eye_container}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 2.2]} fov={50} />
        <ambientLight intensity={150} />
        <directionalLight position={[0, 0.5, 1]} intensity={1} />
        <Eye texturePath={texturePath} />
        <EffectComposer>
          <Bloom intensity={2.0} luminanceThreshold={0.3} luminanceSmoothing={2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default EyeOfSauron;
