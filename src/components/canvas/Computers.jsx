/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
// import { Canvas, useFrame } from 'react-three-fiber';
import { PointLight, HemisphereLight } from 'three';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={1}/>
      <primitive object={computer.scene}/>
    </mesh>
  )
}
export default function ComputersCanvas() {
  return (
    <Canvas frameloop='demand' shadows camera={{ position: [20, 3, 5]}} gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Computers/>
        {/* <HemisphereLight intensity={0.15} groundColor='black'/> */}
      </Suspense>
    </Canvas>
  )
}

