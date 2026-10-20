import React from 'react';
import { ABOUT_THEMES } from '../data';
import { TiltCard } from '../components/TiltCard';
import { Compass, Hammer, Sparkles, RefreshCw } from 'lucide-react';

export const About: React.FC = () => {
  const getThemeIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Compass className="w-6 h-6 text-sage" />;
      case '02':
        return <Hammer className="w-6 h-6 text-charcoal" />;
      case '03':
        return <RefreshCw className="w-6 h-6 text-sage" />;
      default:
        return <Sparkles className="w-6 h-6 text-sage" />;
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Section Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 border border-sage/30 text-charcoal font-mono text-xs tracking-widest uppercase mb-6 w-fit">
        <span>(02) — ABOUT ME</span>
      </div>

      {/* Main Headline */}
      <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[0.92] mb-12">
        CURIOUS BY NATURE.
        <br />
        <span className="text-sage">BUILDER BY PRACTICE.</span>
      </h2>

      {/* Editorial Content: Portrait & Manifesto Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 max-w-6xl">
        {/* Left: Progressive Text Manifesto with Highlights */}
        <div className="lg:col-span-7 space-y-6">
          <p className="font-body text-lg sm:text-xl md:text-2xl text-charcoal/90 leading-relaxed font-normal">
            “I'm a <span className="font-semibold text-charcoal bg-sage/20 px-1 rounded">tech enthusiast</span> with a curious mind, a creative streak, and a habit of turning random <span className="text-sage font-medium">‘what if?’</span> ideas into actual projects. 🚀”
          </p>
          <p className="font-body text-base sm:text-lg md:text-xl text-charcoal/85 leading-relaxed">
            “From experimenting with <span className="font-semibold text-charcoal underline decoration-sage decoration-2 underline-offset-4">AI and building intelligent systems</span> to creating interactive experiences, I love exploring what's possible with code. I'm all about <span className="text-sage font-medium">learning by building, breaking things, figuring them out,</span> and coming back with something better.”
          </p>
          <p className="font-body text-base sm:text-lg md:text-xl text-charcoal/85 leading-relaxed">
            “Currently studying <span className="font-semibold text-charcoal">Information Science and Engineering at BNMIT</span>, I'm on a journey to build tech that's not just cool, but genuinely useful. Still learning, still experimenting, and <span className="text-sage font-medium">definitely not done building. ✨</span>”
          </p>
        </div>

        {/* Right: Thoughtful Editorial Character Composition */}
        <div className="lg:col-span-5 flex justify-center">
          <TiltCard maxTilt={5} className="w-full max-w-sm">
            <div className="glass-panel p-4 pb-6 border border-charcoal/10 hover:border-sage/40 transition-all duration-300 relative overflow-hidden group">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-charcoal/5 mb-4">
                <img
                  src="./character/tanmayi-about.webp"
                  alt="Tanmayi K T — Thoughtful editorial portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center font-mono text-[10px] text-white/90">
                  <span className="bg-charcoal/60 backdrop-blur-sm px-2 py-0.5 rounded">STUDENT DEVELOPER</span>
                  <span className="bg-sage/80 backdrop-blur-sm px-2 py-0.5 rounded text-charcoal font-semibold">BNMIT · 2029</span>
                </div>
              </div>
              <div className="px-2 flex justify-between items-center font-mono text-xs text-muted">
                <span className="text-charcoal font-medium">TANMAYI K T</span>
                <span>BANGALORE, IN</span>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* 3 Visual Themes: IMAGINE, ENGINEER, EVOLVE with 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {ABOUT_THEMES.map((theme) => (
          <TiltCard key={theme.number} maxTilt={6}>
            <div className="glass-panel p-8 h-full flex flex-col justify-between border border-charcoal/10 hover:border-sage/50 transition-colors duration-300">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-muted tracking-widest">
                    THEME {theme.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-charcoal/5">
                    {getThemeIcon(theme.number)}
                  </div>
                </div>
                <h3 className="font-display text-2xl text-charcoal tracking-wide mb-3">
                  {theme.number} — {theme.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {theme.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal/5 flex items-center justify-between font-mono text-[11px] text-muted">
                <span>CORE PILLAR</span>
                <span className="text-sage">ACTIVE</span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};
