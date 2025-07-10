import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Model() {
    const { scene } = useGLTF('/monkeh.glb');

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                console.log(child.material); 
            }
        });
    }, [scene]);
     
    useFrame((state, delta) => {
        scene.rotation.y += delta; 
    });
    return (
        <>
            <ambientLight intensity={3.0} /> 
            <directionalLight position={[10, 20, 10]} intensity={4.0} /> 
            <primitive object={scene} scale={[15, 15, 15]} /> 
        </>
    );
}

export default Model;
