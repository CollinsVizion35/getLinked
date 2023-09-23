import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Floor from "./Floor";
import { Link, useNavigate } from "react-router-dom";
import { Glitch } from "./glitch";
import 'animate.css';

function ManShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <Glitch />

      <color args={[0, 0, 0.001]} attach="background" />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, -5]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={5}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, -5]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Floor />
    </>
  );
}

function Start() {
  useEffect(() => {
    document.title = "getLinked";
  }, []);




  const navigate = useNavigate();

  

  setTimeout(() => {
    navigate("/home");
  }, 5000);

  const handleEditBtn2 = () => {
    window.open("https://getlinked.ai/");
  };

  return (
    <div className="h-[100vh] w-[100vw] fixed left-0 top-0">
      <Suspense fallback={null}>
        <Canvas shadows>
          <ManShow />

          <Html className="text-white w-max flex justify-center items-center flex-col fixed top-1/2 left-1/2 p-10 z-[1000]"
                          style={{ transform: "translate(-50%, -50%)" }}>
          
            <div className="text-[0.8em] animate__animated animate__lightSpeedInLeft">
            <div
          className='text-[2rem] font-bold tracking-tight cursor-pointer'
          onClick={() => navigate('/home')}
        >
          get<span className='text-[#d434fe]'>linked</span>
        </div>
            </div>

            
            <div 
              onClick={() => {
                handleEditBtn2();
              }}
              className="text-[0.8em] mt-[20vh] animate__animated animate__fadeIn cursor-pointer">Copyright © 2023 Getlinked. All rights reserved

              </div>
          </Html>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default Start;
