'use client'
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Sky = ({
  isRotating,
  ...props
}: {
  isRotating: boolean;
  props?: any;
}) => {
  const sky = useGLTF("/assets/3d/sky.glb");
  const skyRef = useRef<any>(undefined);

  useFrame((_, delta) => {
    skyRef.current.rotation.y += 0.01 * delta;
    // if(isRotating) {
    //   skyRef.current.rotation.y += 0.05 * delta
    // }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
