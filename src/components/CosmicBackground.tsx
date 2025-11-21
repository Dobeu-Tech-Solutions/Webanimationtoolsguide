import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3, Mesh, ShaderMaterial } from 'three';

function AnimatedGradientSphere() {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      lightPosition: { value: new Vector3(5, 5, 5) }
    }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;
    
    // Slow rotation
    meshRef.current.rotation.y += 0.001;
    meshRef.current.rotation.x += 0.0005;
    
    // Update time uniform for shader animation
    materialRef.current.uniforms.time.value = state.clock.elapsedTime;
  });

  const vertexShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 lightPosition;
    uniform float time;
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;
    
    void main() {
      vec3 lightDir = normalize(lightPosition - vPosition);
      
      // Rim lighting effect
      float rim = 1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
      rim = pow(rim, 3.0);
      
      // Diffuse lighting
      float diffuse = max(dot(vNormal, lightDir), 0.0);
      
      // Animated gradient colors
      vec3 color1 = vec3(0.03, 0.43, 0.59); // dark cyan
      vec3 color2 = vec3(0.61, 0.31, 0.87); // purple
      vec3 color3 = vec3(0.16, 0.68, 0.96); // light cyan
      
      // Mix colors based on UV coordinates and time
      float mixFactor = sin(vUv.x * 3.14159 + time * 0.5) * 0.5 + 0.5;
      vec3 baseColor = mix(color1, color2, vUv.y);
      baseColor = mix(baseColor, color3, mixFactor * 0.3);
      
      // Apply lighting
      vec3 finalColor = baseColor * (diffuse * 0.6 + 0.4);
      
      // Add rim glow
      vec3 rimColor = vec3(0.03, 0.68, 0.92);
      finalColor = mix(finalColor, rimColor, rim * 0.8);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  return (
    <mesh ref={meshRef} position={[2, 0, -3]}>
      <sphereGeometry args={[2, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function BackgroundGradient() {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<ShaderMaterial>(null);

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.time.value = state.clock.elapsedTime * 0.3;
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    varying vec2 vUv;
    
    void main() {
      vec3 color1 = vec3(0.0, 0.0, 0.0); // black
      vec3 color2 = vec3(0.03, 0.43, 0.59); // dark cyan
      vec3 color3 = vec3(0.61, 0.31, 0.87); // purple
      
      float noise = sin(vUv.x * 3.0 + time * 0.3) * cos(vUv.y * 3.0 + time * 0.2) * 0.5 + 0.5;
      vec3 gradient = mix(mix(color1, color2, vUv.y), color3, vUv.x * noise * 0.3);
      
      gl_FragColor = vec4(gradient, 1.0);
    }
  `;

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <planeGeometry args={[50, 50]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 }
        }}
      />
    </mesh>
  );
}

export function CosmicBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#2AF598" />
        
        <BackgroundGradient />
        <AnimatedGradientSphere />
      </Canvas>
    </div>
  );
}
