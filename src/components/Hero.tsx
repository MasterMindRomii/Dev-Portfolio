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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up animation-delay-300">
          <a href="https://github.com/MasterMindRomii" target="_blank" rel="noopener noreferrer"
             className="group bg-[#49c5b6]/10 hover:bg-[#49c5b6]/20 border border-[#49c5b6]/30 hover:border-[#49c5b6]/50 rounded-lg px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-[#49c5b6] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-[#49c5b6] group-hover:text-white font-semibold transition-colors">GitHub</span>
            </div>
          </a>
          
          <a href="#projects" 
             className="group bg-gradient-to-r from-[#49c5b6]/10 to-[#49c5b6]/5 hover:from-[#49c5b6]/20 hover:to-[#49c5b6]/15 border border-[#49c5b6]/30 hover:border-[#49c5b6]/50 rounded-lg px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-[#49c5b6] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-[#49c5b6] group-hover:text-white font-semibold transition-colors">Live Projects</span>
            </div>
          </a>
        </div>

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
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}