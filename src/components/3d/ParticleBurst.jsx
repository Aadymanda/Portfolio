import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import { colors } from "../../utils/theme";

const ParticleBurst = () => {
  const meshRef = useRef();
  const scroll = useScroll();
  const count = 2000;

  const { positions, particleColors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const colorOptions = [
      new THREE.Color(colors.primary),
      new THREE.Color(colors.secondary),
      new THREE.Color(colors.white),
    ];

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const pickedColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      cols[i * 3] = pickedColor.r;
      cols[i * 3 + 1] = pickedColor.g;
      cols[i * 3 + 2] = pickedColor.b;
    }
    return { positions: pos, particleColors: cols };
  }, []);

  useFrame((state, delta) => {
    // Safety check: scroll.offset might be undefined on first render
    const explosionFactor = scroll ? scroll.offset * 15 : 0;
    
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
      meshRef.current.rotation.z += delta * 0.02;
      const scale = 1 + Math.pow(explosionFactor, 1.2);
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={particleColors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default ParticleBurst;