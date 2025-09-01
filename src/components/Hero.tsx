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

      {/* Technology Skills - Responsive Grid Layout */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Desktop: Floating positions, Mobile: Hidden */}
        <div className="hidden lg:block">
          <div className="absolute animate-float-1" style={{top: '15%', left: '8%'}}>
            <div className="bg-[#49c5b6]/5 border border-[#49c5b6]/20 rounded-lg px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[#49c5b6]/70 font-medium text-sm">Python</span>
            </div>
          </div>
          
          <div className="absolute animate-float-2" style={{top: '25%', right: '10%'}}>
            <div className="bg-[#49c5b6]/5 border border-[#49c5b6]/20 rounded-lg px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[#49c5b6]/70 font-medium text-sm">SQL</span>
            </div>
          </div>
          
          <div className="absolute animate-float-3" style={{top: '65%', left: '5%'}}>
            <div className="bg-[#49c5b6]/5 border border-[#49c5b6]/20 rounded-lg px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[#49c5b6]/70 font-medium text-sm">Power BI</span>
            </div>
          </div>
          
          <div className="absolute animate-float-1" style={{top: '75%', right: '8%'}}>
            <div className="bg-[#49c5b6]/5 border border-[#49c5b6]/20 rounded-lg px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[#49c5b6]/70 font-medium text-sm">Azure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-poppins z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl mb-4 text-white animate-fade-in-up" 
            style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
          Romi Gupta
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
          Data Analytics and Engineering 
        </p>

        {/* Mobile & Tablet: Skills as subtle badges below title */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:hidden max-w-sm md:max-w-lg animate-fade-in-up animation-delay-400">
          {['Python', 'SQL', 'Advanced Excel', 'Snowflake', 'Airflow', 'Azure', 'Power BI'].map((skill, index) => (
            <div key={skill} 
                 className="bg-[#49c5b6]/5 border border-[#49c5b6]/20 rounded-full px-3 py-1 backdrop-blur-sm"
                 style={{animationDelay: `${0.1 * index}s`}}>
              <span className="text-[#49c5b6]/60 font-medium text-xs md:text-sm">{skill}</span>
            </div>
          ))}
        </div>

        {/* Desktop: Skills as floating elements with connecting lines */}
        <div className="hidden lg:block absolute inset-0">
          {/* Subtle connecting lines - very faint */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#49c5b6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
          50% { transform: translateY(-15px) translateX(8px); opacity: 1; }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.8; }
          33% { transform: translateY(-12px) translateX(-6px); opacity: 1; }
          66% { transform: translateY(6px) translateX(4px); opacity: 0.9; }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          25% { transform: translateY(8px) translateX(-4px); opacity: 0.9; }
          75% { transform: translateY(-10px) translateX(6px); opacity: 1; }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}