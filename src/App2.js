import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
    const mesh = useRef(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (mesh.current.rotation.x += 0.02))
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'purple'} />
        </mesh>
    )
}

//create a ball component
function Ball(props) {
    const mesh = useRef(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (mesh.current.rotation.x += 0.02))
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <sphereGeometry args={[1.2, 30, 16]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'purple'} />
        </mesh>
    )
}

export default function App2() {
    return (
        <Canvas style={{ width: 500, height:400 }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1, 0, 0]} />
            <Ball position={[1, 1, 0]} />
        </Canvas>
    )
}