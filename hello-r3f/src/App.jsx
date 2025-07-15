import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import gsap from 'gsap';
import { Suspense } from 'react';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

function Mesh() {
  const meshRef =  useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += 0.1;
  });

  function clickHandler() {
    meshRef.current.material.color.set('blue');
  }

  return <mesh ref={meshRef} onClick={clickHandler}>
    <boxGeometry args={[100, 100, 100]}/>
    <meshPhongMaterial color={'orange'}/>
  </mesh>
}

function App() {
  return <Canvas camera={{
    position: [0, 500, 500]
  }} style={{
      width: window.innerWidth,
      height: window.innerHeight
  }}>
    <ambientLight/>
    <axesHelper args={[1000]}/>
    <directionalLight position={[500, 400, 300]}/>
    <OrbitControls/>
    {/* <Mesh/> */}
    <Suspense fallback={null}>
      <Naruto/>
    </Suspense>
  </Canvas>
}

function Naruto() {
  const gltf = useLoader(GLTFLoader, 'naruto.glb')
  console.log(gltf);

  gltf.scene.scale.setScalar(200);

  const size = useThree(state => state.size);
  console.log(size);

  const camera = useThree(state => state.camera);
  gsap.to(camera.position, {
    x: 0,
    y: 500,
    z: 200,
    duration: 1
  });
  
  return <primitive object={gltf.scene}/>
}

export default App
