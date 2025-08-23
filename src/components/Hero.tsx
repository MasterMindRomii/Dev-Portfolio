'use client';

export default function Hero() {
  return (
    <div className="w-full h-screen relative overflow-hidden bg-gradient-to-br from-[#222829] via-[#2a2f32] to-[#1a1f23]">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute w-2 h-2 bg-[#49c5b6] rounded-full animate-float-1" style={{top: '20%', left: '10%'}}></div>
        <div className="absolute w-1 h-1 bg-[#49c5b6]/60 rounded-full animate-float-2" style={{top: '40%', left: '80%'}}></div>
        <div className="absolute w-3 h-3 bg-[#49c5b6]/40 rounded-full animate-float-3" style={{top: '60%', left: '20%'}}></div>
        <div className="absolute w-1.5 h-1.5 bg-[#49c5b6]/80 rounded-full animate-float-1" style={{top: '80%', left: '70%'}}></div>
        <div className="absolute w-2 h-2 bg-[#49c5b6]/50 rounded-full animate-float-2" style={{top: '30%', left: '60%'}}></div>
        <div className="absolute w-1 h-1 bg-[#49c5b6] rounded-full animate-float-3" style={{top: '70%', left: '40%'}}></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-poppins z-10">
        <h1 className="text-4xl md:text-8xl mb-4 text-white animate-fade-in-up" 
            style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
          Romi Gupta
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-6 animate-fade-in-up animation-delay-200">
          Data Analytics and Engineering 
        </p>
        
        <div className="text-sm md:text-lg text-gray-300 font-mono bg-black/30 p-6 rounded-lg backdrop-blur-sm max-w-2xl border border-[#49c5b6]/20 animate-fade-in-up animation-delay-400">
          <code className="block text-left">
            <span className="text-[#49c5b6]">SELECT</span> role, domain <span className="text-[#49c5b6]">FROM</span> opportunities<br/>
            <span className="text-[#49c5b6]">WHERE</span> candidate = <span className="text-green-400">&apos;Me&apos;</span><br/>
            &nbsp;&nbsp;<span className="text-[#49c5b6]">AND</span> domain <span className="text-[#49c5b6]">IN</span> (<span className="text-green-400">&apos;Data Analytics&apos;</span>, <span className="text-green-400">&apos;Data Engineering&apos;</span>)<br/>
            &nbsp;&nbsp;<span className="text-[#49c5b6]">AND</span> status = <span className="text-green-400">&apos;Actively Looking&apos;</span>;
          </code>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(-8px); }
          66% { transform: translateY(8px) translateX(5px); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(10px) translateX(-5px); }
          75% { transform: translateY(-12px) translateX(8px); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 10s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}