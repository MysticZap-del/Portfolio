import React from 'react';
import {useState, useRef, Suspense } from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls, Preload, PointMaterial, Points } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    return(
        <group>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
              <PointMaterial
                transparent
                color='#f272c8'
                size={0.002}
                sizeAttenuation={true}
                depthWrite={false}
                // blending={additive} // Uncomment if you want to use additive blending
                toneMapped={false}
              />
            </Points>
            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.5}
                enablePan={false}
                enableRotate={false}
            />
        </group>
    )
}

const StarsCanvas = () => {
    return (
        <div className='w-full h-full absolute inset-0 z-[-1]'>
        <Canvas camera={{ fov: 45, position: [0, 0, 1] }} className='w-full h-full'>
            <Suspense fallback={null}>  
            <Stars />
            </Suspense>

            <Preload all/>
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
