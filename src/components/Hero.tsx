'use client';

import { useEffect, useRef, useState } from 'react';

// Declare VANTA types for TypeScript
declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Three.js first (required for VANTA)
    const loadThreeJS = () => {
      return new Promise((resolve) => {
        if (window.THREE) {
          resolve(true);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.head.appendChild(script);
      });
    };

    // Load VANTA.js NET effect
    const loadVantaNet = () => {
      return new Promise((resolve) => {
        if (window.VANTA?.NET) {
          resolve(true);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.net.min.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.head.appendChild(script);
      });
    };

    // Initialize VANTA effect
    const initVanta = async () => {
      try {
        // Load dependencies
        await loadThreeJS();
        await loadVantaNet();

        // Initialize VANTA effect
        if (vantaRef.current && window.VANTA?.NET && !vantaEffect) {
          const effect = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 0.8,
            color: 0x49c5b6,
            backgroundColor: 0x222829,
            points: 10.0,
            maxDistance: 19.0,
            spacing: 15.0,
          });
          
          setVantaEffect(effect);
        }
      } catch (error) {
        console.error('Failed to load VANTA:', error);
      }
    };

    initVanta();

    // Cleanup function
    return () => {
      if (vantaEffect) {
        try {
          vantaEffect.destroy();
        } catch (error) {
          console.error('Error destroying VANTA effect:', error);
        }
        setVantaEffect(null);
      }
    };
  }, []); // Remove vantaEffect from dependency array to prevent re-initialization

  return (
    <div ref={vantaRef} className="w-full h-screen relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-poppins">
        <h1 className="text-4xl md:text-8xl mb-4 text-white" style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
          Romi Gupta
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-2">
          Data Analytics and Engineering 
        </p>
        <div className="text-sm md:text-lg text-gray-300 font-mono bg-black/20 p-4 rounded-lg backdrop-blur-sm max-w-2xl">
          <code>
            SELECT role, domain FROM opportunities<br/>
            WHERE candidate = 'Me'<br/>
            &nbsp;&nbsp;AND domain IN ('Data Analytics', 'Data Engineering')<br/>
            &nbsp;&nbsp;AND status = 'Actively Looking';
          </code>
        </div>
      </div>
    </div>
  );
}