'use client';
import { useEffect, useRef, useState } from 'react';

// Use direct window access instead of global declarations to avoid conflicts

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Prevent multiple initializations
    if (isInitialized.current) return;
    
    // Load Three.js first (required for VANTA)
    const loadThreeJS = (): Promise<boolean> => {
      return new Promise((resolve) => {
        if ((window as any).THREE) {
          resolve(true);
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
        script.onload = () => resolve(true);
        script.onerror = () => {
          console.error('Failed to load Three.js');
          resolve(false);
        };
        document.head.appendChild(script);
      });
    };

    // Load VANTA.js NET effect
    const loadVantaNet = (): Promise<boolean> => {
      return new Promise((resolve) => {
        if ((window as any).VANTA?.NET) {
          resolve(true);
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.net.min.js';
        script.onload = () => resolve(true);
        script.onerror = () => {
          console.error('Failed to load VANTA.NET');
          resolve(false);
        };
        document.head.appendChild(script);
      });
    };

    // Initialize VANTA effect
    const initVanta = async () => {
      try {
        isInitialized.current = true;
        
        // Load dependencies
        const threeLoaded = await loadThreeJS();
        if (!threeLoaded) {
          console.error('Three.js failed to load');
          return;
        }

        const vantaLoaded = await loadVantaNet();
        if (!vantaLoaded) {
          console.error('VANTA.NET failed to load');
          return;
        }

        // Initialize VANTA effect
        if (vantaRef.current && (window as any).VANTA?.NET) {
          const effect = (window as any).VANTA.NET({
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
        console.error('Failed to initialize VANTA:', error);
        isInitialized.current = false;
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
      }
      isInitialized.current = false;
    };
  }, []); // Empty dependency array - effect runs once on mount

  // Separate cleanup effect for vantaEffect changes
  useEffect(() => {
    return () => {
      if (vantaEffect) {
        try {
          vantaEffect.destroy();
        } catch (error) {
          console.error('Error destroying VANTA effect:', error);
        }
      }
    };
  }, [vantaEffect]);

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
            WHERE candidate = &apos;Me&apos;<br/>
            &nbsp;&nbsp;AND domain IN (&apos;Data Analytics&apos;, &apos;Data Engineering&apos;)<br/>
            &nbsp;&nbsp;AND status = &apos;Actively Looking&apos;;
          </code>
        </div>
      </div>
    </div>
  );
}