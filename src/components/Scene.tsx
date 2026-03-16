import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, ContactShadows, Environment, RoundedBox, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const ScreenContent = ({ url, scale, position }: { url: string, scale: [number, number], position: [number, number, number] }) => {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    loader.load(
      url,
      (tex) => setTexture(tex),
      undefined,
      () => setError(true)
    );
  }, [url]);

  if (error || !texture) {
    return (
      <mesh position={position}>
        <planeGeometry args={scale} />
        <meshStandardMaterial 
          color={error ? "#1e293b" : "#0f172a"} 
          emissive="#3b82f6" 
          emissiveIntensity={error ? 0.1 : 0.5} 
        />
      </mesh>
    );
  }

  return (
    <mesh position={position}>
      <planeGeometry args={scale} />
      <meshBasicMaterial map={texture} transparent opacity={1} />
    </mesh>
  );
};

const Phone = () => {
  const meshRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  // Using the provided dashboard image for the phone
  const imageUrl = "https://scontent.fcgy2-4.fna.fbcdn.net/v/t1.15752-9/606227035_1208082191290475_7193665132235493891_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHfPT4OE2A62RwAqdQtHAdxUlpGrkd212xSWkauR3bXbAwxb9sO6JPtPlNPfliuEmaLSWBVV3PXAO1kItrdIP28&_nc_ohc=caj8tNo6H6wQ7kNvwGTu_sr&_nc_oc=AdkHHnEWAUY3F6-iVqZw0uuzWQx7bvecLjwAzPczCR2H9M1Kq0URLAYzoj-CAYWtLeY&_nc_zt=23&_nc_ht=scontent.fcgy2-4.fna&_nc_ss=8&oh=03_Q7cD4wFiu5KMJBQxegMHTblOQfJuw3syOk3P0dCIy2rTGghJxQ&oe=69DF40B3";
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Responsive positioning logic using viewport
    const isMobile = viewport.width < 5;
    const targetX = 0; // Centered in its container
    const targetY = isMobile ? -0.2 : 0;
    const targetScale = isMobile ? 1.6 : 2.2;
    
    // Fixed rotation with initial spin on open
    const initialSpin = Math.max(0, Math.PI * 4 * Math.exp(-time * 1.5));
    meshRef.current.rotation.y = -Math.PI * 0.05 + initialSpin;
    meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.05;
    
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.1);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY + Math.cos(time * 0.5) * 0.1, 0.1);
    
    const s = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1);
    meshRef.current.scale.set(s, s, s);
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Metallic Frame (Silver/Titanium) */}
      <RoundedBox args={[0.85, 1.7, 0.12]} radius={0.12} smoothness={4}>
        <meshStandardMaterial color="#cbd5e1" metalness={1} roughness={0.1} />
      </RoundedBox>
      
      {/* Front Glass / Bezel */}
      <RoundedBox args={[0.8, 1.65, 0.02]} radius={0.1} smoothness={4} position={[0, 0, 0.055]}>
        <meshStandardMaterial color="#000000" roughness={0.05} />
      </RoundedBox>

      {/* Screen Content */}
      <ScreenContent 
        url={imageUrl} 
        scale={[0.76, 1.6]} 
        position={[0, 0, 0.066]} 
      />

      {/* Dynamic Island */}
      <RoundedBox args={[0.2, 0.05, 0.01]} radius={0.025} smoothness={4} position={[0, 0.72, 0.067]}>
        <meshBasicMaterial color="#000000" />
      </RoundedBox>

      {/* Side Buttons (Volume) */}
      <mesh position={[-0.43, 0.3, 0]}>
        <boxGeometry args={[0.02, 0.15, 0.04]} />
        <meshStandardMaterial color="#94a3b8" metalness={1} />
      </mesh>
      <mesh position={[-0.43, 0.1, 0]}>
        <boxGeometry args={[0.02, 0.15, 0.04]} />
        <meshStandardMaterial color="#94a3b8" metalness={1} />
      </mesh>

      {/* Power Button */}
      <mesh position={[0.43, 0.2, 0]}>
        <boxGeometry args={[0.02, 0.2, 0.04]} />
        <meshStandardMaterial color="#94a3b8" metalness={1} />
      </mesh>
    </group>
  );
};

export const Scene = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
            <Phone />
          </Float>
          <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={15} blur={2} far={5} />
        </Suspense>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      </Canvas>
    </div>
  );
};
