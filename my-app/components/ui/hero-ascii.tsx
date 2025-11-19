'use client';


import { useEffect, useState } from 'react';
import { AnimatedTabs } from "@/components/ui/animated-tabs";

export default function Home() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  useEffect(() => {
    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    // Add CSS to hide branding elements and crop canvas
    const style = document.createElement('style');
    style.textContent = `
      [data-us-project] {
        position: relative !important;
        overflow: hidden !important;
      }
      
      [data-us-project] canvas {
        clip-path: inset(0 0 10% 0) !important;
      }
      
      [data-us-project] * {
        pointer-events: none !important;
      }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    // Function to aggressively hide branding
    const hideBranding = () => {
      const projectDiv = document.querySelector('[data-us-project]');
      if (projectDiv) {
        // Find and remove any elements containing branding text
        const allElements = projectDiv.querySelectorAll('*');
        allElements.forEach(el => {
          const text = (el.textContent || '').toLowerCase();
          if (text.includes('made with') || text.includes('unicorn')) {
            el.remove(); // Completely remove the element
          }
        });
      }
    };

    // Run immediately and periodically
    hideBranding();
    const interval = setInterval(hideBranding, 100);
    
    // Also try after delays
    setTimeout(hideBranding, 1000);
    setTimeout(hideBranding, 3000);
    setTimeout(hideBranding, 5000);

    return () => {
      clearInterval(interval);
      document.head.removeChild(embedScript);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Vitruvian man animation - hidden on mobile */}
      <div className="absolute inset-0 w-full h-full hidden lg:block">
        <div 
          data-us-project="dKAfEG1XbHOSfoYKG5DH" 
          style={{ width: '100%', height: '100%', minHeight: '100vh' }}
        />
      </div>

      {/* Mobile stars background */}
      <div className="absolute inset-0 w-full h-full lg:hidden stars-bg"></div>

      {/* Dither effect above header */}
      {/* <div className="absolute top-0 left-0 right-0 h-2 lg:h-3 dither-pattern opacity-30 z-20"></div> */}

      {/* Top Header */}
      <div className="absolute left-0 right-0 z-20 border-b border-white/20 top-2 lg:top-3">
        <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4">
        </div>
      </div>

      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/30 z-20"></div>
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/30 z-20"></div>
      <div className="absolute left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/30 z-20" style={{ bottom: '5vh' }}></div>
      <div className="absolute right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-white/30 z-20" style={{ bottom: '5vh' }}></div>

      {/* Name and Info Section - Right under header */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-16 lg:pt-20">
        <div className="pl-10 lg:pl-18 pt-2">
          <div className="mb-4 lg:mb-5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mb-2">
              <div className="font-mono text-white text-lg lg:text-2xl font-bold tracking-widest italic transform -skew-x-12">
                Samaksh Khandelwal
              </div>
              <div className="hidden lg:block h-3 w-px bg-white/40"></div>
              <span className="text-white/60 text-[10px] lg:text-[12px] font-mono">Creative Developer</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] lg:text-[12px] font-mono text-white/60">
              <span>McGill University</span>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <span>Montreal, Canada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Moved from inside name/info section */}
      <div className="relative z-10 flex min-h-screen items-center pt-16 lg:pt-0" style={{ marginTop: '5vh' }}>
        <div className="max-w-lg relative pl-10 lg:pl-18">
          {/* Top decorative line */}
          <div className="flex items-center gap-2 mb-3 opacity-60">
            <div className="w-8 h-px bg-white"></div>
            <span className="text-white text-[10px] font-mono tracking-wider">001</span>
            <div className="flex-1 h-px bg-white"></div>
          </div>

          {/* Title with dithered accent */}
          <div className="relative">
            <div className="hidden lg:block absolute -left-3 top-0 bottom-0 w-1 dither-pattern opacity-40"></div>
            <h1 className="text-2xl lg:text-5xl font-bold text-white mb-3 lg:mb-4 leading-tight font-mono tracking-wider" style={{ letterSpacing: '0.1em' }}>
              Something
              <span className="block text-white mt-1 lg:mt-2 opacity-90">
                Something
              </span>
            </h1>
          </div>

          {/* Decorative dots pattern - desktop only */}
          <div className="hidden lg:flex gap-1 mb-3 opacity-40">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-0.5 h-0.5 bg-white rounded-full"></div>
            ))}
          </div>

          {/* Description with subtle grid pattern */}
          <div className="relative">
            <p className="text-xs lg:text-base text-gray-300 mb-5 lg:mb-6 leading-relaxed font-mono opacity-80">
              Where geometry meets humanity — Da Vinci's vision of ideal form
            </p>
            
            {/* Technical corner accent - desktop only */}
            <div className="hidden lg:block absolute -right-4 top-1/2 w-3 h-3 border border-white opacity-30" style={{ transform: 'translateY(-50%)' }}>
              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white" style={{ transform: 'translate(-50%, -50%)' }}></div>
            </div>
          </div>

          {/* Buttons with technical accents */}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
            <button 
              onClick={() => setIsAboutMeOpen(true)}
              className="relative px-5 lg:px-6 py-2 lg:py-2.5 bg-transparent text-white font-mono text-xs lg:text-sm border border-white hover:bg-white hover:text-black transition-all duration-200 group"
            >
              <span className="hidden lg:block absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="hidden lg:block absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              ABOUT ME
            </button>
            
            <button 
              onClick={() => setIsProjectsOpen(true)}
              className="relative px-5 lg:px-6 py-2 lg:py-2.5 bg-transparent border border-white text-white font-mono text-xs lg:text-sm hover:bg-white hover:text-black transition-all duration-200" 
              style={{ borderWidth: '1px' }}
            >
              MY PROJECTS
            </button>
          </div>

          {/* Bottom technical notation - desktop only */}
          <div className="hidden lg:flex items-center gap-2 mt-6 opacity-40">
            <span className="text-white text-[9px] font-mono">∞</span>
            <div className="flex-1 h-px bg-white"></div>
            <span className="text-white text-[9px] font-mono">VITRUVIAN</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="absolute left-0 right-0 z-20 border-t border-white/20 bg-black/40 backdrop-blur-sm" style={{ bottom: '5vh' }}>
        <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-6 text-[8px] lg:text-[9px] font-mono text-white/50">
            <span className="hidden lg:inline">SYSTEM.ACTIVE</span>
            <span className="lg:hidden">SYS.ACT</span>
            <div className="hidden lg:flex gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-1 h-3 bg-white/30" style={{ height: `${Math.random() * 12 + 4}px` }}></div>
              ))}
            </div>
            <span>V1.0.0</span>
          </div>
          
          <div className="flex items-center gap-2 lg:gap-4 text-[8px] lg:text-[9px] font-mono text-white/50">
            <span className="hidden lg:inline">◐ RENDERING</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="hidden lg:inline">FRAME: ∞</span>
          </div>
        </div>
      </div>

      {/* About Me Popup */}
      {isAboutMeOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
            onClick={() => setIsAboutMeOpen(false)}
            style={{
              animation: 'fadeIn 0.3s ease-out'
            }}
          />
          
          {/* Popup Container */}
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            style={{
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            <div 
              className="relative bg-black border border-white/30 w-full h-[60vh] max-w-4xl mx-4 pointer-events-auto overflow-hidden"
              style={{
                animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/40"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/40"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/40"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/40"></div>

              {/* Header */}
              <div className="border-b border-white/20 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white/60"></div>
                  <h2 className="text-white font-mono text-sm lg:text-base tracking-wider">ABOUT ME</h2>
                  <div className="flex-1 h-px bg-white/20"></div>
                </div>
                <button
                  onClick={() => setIsAboutMeOpen(false)}
                  className="text-white/60 hover:text-white transition-colors font-mono text-lg leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              {/* Content Area - Ready for React components */}
              <div className="h-[calc(60vh-73px)] overflow-y-auto px-6 py-6">
                <div className="text-white/80 font-mono text-xs lg:text-sm">
                  {/* Placeholder - User will add React components here */}
                  <div className="opacity-50 text-center py-20">
                    Content area ready for React components
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10"></div>
            </div>
          </div>
        </>
      )}

      {/* My Projects Popup */}
      {isProjectsOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
            onClick={() => setIsProjectsOpen(false)}
            style={{
              animation: 'fadeIn 0.3s ease-out'
            }}
          />
          
          {/* Popup Container */}
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            style={{
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            <div 
              className="relative bg-black border border-white/30 w-full h-[60vh] max-w-4xl mx-4 pointer-events-auto overflow-hidden"
              style={{
                animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/40"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/40"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/40"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/40"></div>

              {/* Header */}
              <div className="border-b border-white/20 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white/60"></div>
                  <h2 className="text-white font-mono text-sm lg:text-base tracking-wider">MY PROJECTS</h2>
                  <div className="flex-1 h-px bg-white/20"></div>
                </div>
                <button
                  onClick={() => setIsProjectsOpen(false)}
                  className="text-white/60 hover:text-white transition-colors font-mono text-lg leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              {/* Content Area with AnimatedTabs */}
              <div className="h-[calc(60vh-73px)] overflow-y-auto px-6 py-6 flex items-center justify-center">
                <AnimatedTabs />
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10"></div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .dither-pattern {
          background-image: 
            repeating-linear-gradient(0deg, transparent 0px, transparent 1px, white 1px, white 2px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 1px, white 1px, white 2px);
          background-size: 3px 3px;
        }
        
        .stars-bg {
          background-image: 
            radial-gradient(1px 1px at 20% 30%, white, transparent),
            radial-gradient(1px 1px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(1px 1px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 60%, white, transparent),
            radial-gradient(1px 1px at 70% 40%, white, transparent);
          background-size: 200% 200%, 180% 180%, 250% 250%, 220% 220%, 190% 190%, 240% 240%, 210% 210%, 230% 230%;
          background-position: 0% 0%, 40% 40%, 60% 60%, 20% 20%, 80% 80%, 30% 30%, 70% 70%, 50% 50%;
          opacity: 0.3;
        }
      `}</style>
    </main>
  );
}
