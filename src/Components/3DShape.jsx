import { Torus } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const DShape = () => {
    const meshRef = useRef()
    useFrame(() => {
      
      meshRef.current.rotation.x += 0.01 
      meshRef.current.rotation.y += 0.02 
    })
  
    return (
      <mesh ref={meshRef}>
        <Torus args={[2, 0.5, 50,100]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    )
}

export default DShape
