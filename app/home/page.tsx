"use client";
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "@/components/loader";
import { Island } from "@/components/models/island";
import { Vector3 } from "three";
import Sky from "@/components/models/sky";
import Bird from "@/components/models/bird";
import Plane from "@/components/models/plane";

{
  /* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center ' >
</div> */
}

const HomePage = () => {
  // let screenScale: Vector3 = new Vector3(1, 1, 1);
  // let screenPostiton: Vector3 = new Vector3(0, -6.5, -43);
  let screenScale = [1, 1, 1];
  let screenPostiton = [0, -6.5, -43];
  let rotation = [0.1, 4.7, 0];

  return (
    <section className="w-full h-screen  relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            color={"#b1e1ff"}
            groundColor={"#000000"}
            intensity={1}
          />

          <Bird />
          <Sky />
          <Island
            position={screenPostiton}
            scale={screenScale}
            rotation={rotation}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default HomePage;
