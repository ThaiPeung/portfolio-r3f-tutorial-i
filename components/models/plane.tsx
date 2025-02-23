import { useGLTF } from "@react-three/drei";
import React from "react";

const Plane: React.FC<{
  isRotating: boolean;
  scale: any;
  position: any;
  rotation: any;
  props?: any;
}> = (props) => {
  const { scene, animations } = useGLTF("/assets/3d/plane.glb");

  return (
    <mesh
      position={props.position}
      scale={props.scale}
      rotation={props.rotation}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
