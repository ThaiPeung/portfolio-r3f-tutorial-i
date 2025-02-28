import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { isReadable } from "stream";

const Plane: React.FC<{
  isRotating: boolean;
  scale: any;
  position: any;
  rotation: any;
  props?: any;
}> = (props) => {
  const ref = useRef(undefined);
  const { scene, animations } = useGLTF("/assets/3d/plane.glb");
  const {actions} = useAnimations(animations, ref);

  useEffect(() => {  
    if (props.isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, props.isRotating]);

  return (
    <mesh
      position={props.position}
      scale={props.scale}
      rotation={props.rotation}
      ref={ref} 
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
