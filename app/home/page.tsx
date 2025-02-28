"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "@/components/loader";
import { Island } from "@/components/models/island";
import { Vector3 } from "three";
import Sky from "@/components/models/sky";
import Bird from "@/components/models/bird";
import Plane from "@/components/models/plane";
import HomeInfo from "@/components/HomeInfo";

const HomePage = () => {
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const [isRotating, setIsRotating] = useState(false);

  // - island 3d value
  let islandScreenScale = [1, 1, 1];
  let islandScreenPostiton = [0, -6.5, -43];
  let islandRotation = [0.1, 4.7, 0];

  // - plane 3d value
  let planeScale = [3, 3, 3];
  let planePosition = [0, -4, -4];

  return (
    <section className="w-full h-screen  relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
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
          <Sky isRotating={isRotating} />
          <Island
            position={islandScreenPostiton}
            scale={islandScreenScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setCurrentStage={setCurrentStage}
            setIsRotating={setIsRotating}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20.35, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default HomePage;
