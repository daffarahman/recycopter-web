'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import {
  Download,
  Recycle,
  AlertTriangle,
  Target,
  TrendingUp,
  Github,
  ArrowRight,
  Crosshair,
  LucideIcon,
  Menu,
  X
} from 'lucide-react';

// --- Types & Interfaces ---

interface Feature {
  title: string;
  desc: string;
  image: string;
}

interface AngledButtonProps {
  children: ReactNode;
  className?: string;
  primary?: boolean;
}

interface SectionLabelProps {
  number: string;
  text: string;
}

// --- Components ---

const RecycopterSite = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const features: Feature[] = [
    { title: "Endless Gameplay Levels", desc: "Let's see how many levels and trashes you can collect and recycle!", image: "img/gameplay4.png" },
    { title: "Immersive 3D World", desc: "Explore a vast, low-poly archipelago teeming with environmental challenges.", image: "img/gameplay1.png" },
    { title: "Character Switching", desc: "Adapt to the mission. Switch between pilots to utilize different skills.", image: "img/character-switching.png" },
    { title: "Picking Up Trash", desc: "Master the physics-based claw mechanism to clean up the islands.", image: "img/heli-pickup-trash.png" },
    { title: "Recycle, Craft, Profit", desc: "Process raw waste into usable materials through the crafting system.", image: "img/crafting.png" },
    { title: "Adrenaline", desc: "Keep your eye on the fuel, or else....", image: "img/buy-fuel.png" },
  ];

  const challenges: string[] = [
    "Baru mulai mendalami LibGDX yang sebelumnya terbiasa menggunakan Godot/Unity.",
    "Membuat asset 3D sendiri",
    "Waktu yang tidak terlalu panjang",
    "Beranggota dua orang",
  ];

  const opportunities: string[] = [
    "Dapat dikembangkan lebih banyak konten.",
    "Bisa di-publish di Play Store, Steam, Itch.io",
    "Online dan Monetisasi?",
  ];

  // Helper component for the "Tuff" angled corners
  const AngledButton: React.FC<AngledButtonProps> = ({ children, className = "", primary = true }) => (
    <button className={`
      relative px-6 py-3 md:px-8 md:py-4 font-bold tracking-widest uppercase transform transition-transform hover:-translate-y-1 active:translate-y-0 text-sm md:text-base
      ${primary
        ? 'bg-amber-500 text-slate-900 border-2 border-slate-900'
        : 'bg-white text-slate-900 border-2 border-slate-900'}
      ${className}
    `}
      style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}
    >
      {children}
    </button>
  );

  const SectionLabel: React.FC<SectionLabelProps> = ({ number, text }) => (
    <div className="flex items-center gap-3 mb-4 md:mb-6 opacity-70">
      <div className="h-px w-8 bg-slate-900"></div>
      <span className="font-mono text-amber-600 font-bold text-xs md:text-sm tracking-widest">
        {number} // {text}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-300 overflow-x-hidden">

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-slate-50/95 border-b-2 border-slate-900 py-3' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
          <div className="font-black text-xl md:text-2xl tracking-tighter flex items-center gap-2 z-50">
            <div className="w-8 h-8 bg-amber-500 flex items-center justify-center border-2 border-slate-900">
              <Recycle size={18} className="text-slate-900" />
            </div>
            RECYCOPTER
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 font-bold text-sm tracking-widest">
            <a href="#about" className="hover:text-amber-600 transition-colors">BRIEFING</a>
            <a href="#features" className="hover:text-amber-600 transition-colors">SYSTEMS</a>
            <a href="#devlog" className="hover:text-amber-600 transition-colors">LOGS</a>
            <a href="#team" className="hover:text-amber-600 transition-colors">SQUAD</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-900 z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Nav Overlay */}
          <div className={`
            fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 text-slate-50 transition-transform duration-300 md:hidden
            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <a href="#about" onClick={toggleMobileMenu} className="text-2xl font-black uppercase tracking-widest hover:text-amber-500">BRIEFING</a>
            <a href="#features" onClick={toggleMobileMenu} className="text-2xl font-black uppercase tracking-widest hover:text-amber-500">SYSTEMS</a>
            <a href="#devlog" onClick={toggleMobileMenu} className="text-2xl font-black uppercase tracking-widest hover:text-amber-500">LOGS</a>
            <a href="#team" onClick={toggleMobileMenu} className="text-2xl font-black uppercase tracking-widest hover:text-amber-500">SQUAD</a>

            <div className="mt-8 border-t border-slate-700 pt-8 w-1/2 flex justify-center">
              <AngledButton primary={true}>Download</AngledButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-28 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 container mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Poster Placeholder - Reordered for mobile to show text first? No, standard is usually fine, or Image top. Let's keep Image top on mobile or below text. Typically "Hero Image" is good visual context. */}
          <div className="relative group order-first md:order-none mx-auto w-full max-w-sm md:max-w-none">
            {/* Decorative Borders */}
            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 border-t-4 border-l-4 border-amber-500 opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 border-b-4 border-r-4 border-amber-500 opacity-50"></div>

            <div className="aspect-[3/4] bg-slate-200 relative overflow-hidden flex items-center justify-center">
              <img
                src="img/cover1.png"
                alt="Recycopter Game Poster"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 md:space-y-8 relative text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-slate-900 text-amber-500 font-mono text-[10px] md:text-xs font-bold mb-2 md:mb-4">
              DAPASRIL PRESENTS
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none text-slate-900">
              RECY<span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-amber-600">COPTER</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-slate-600 max-w-md mx-auto md:mx-0 border-l-4 border-amber-500 pl-4 text-left">
              Bersihkan bumi, recycle sampah, dapatkan penghasilan!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-stretch sm:items-center justify-center md:justify-start">
              <a href="https://drive.google.com/drive/folders/1v1HDCOYMmTwczSwndK8_iqbb9Lme4jTf?usp=sharing" target='_blank' rel='noopener noreferrer'>
                <AngledButton className="flex items-center gap-2 justify-center w-full sm:w-auto cursor-pointer">
                  <Download size={20} /> <span className="hidden sm:inline">Download Jar</span><span className="sm:hidden">Download</span>
                </AngledButton>
              </a>
              <a href="https://github.com/daffarahman/recycopter-java" target='_blank' rel='noopener noreferrer'>
                <AngledButton primary={false} className="flex items-center gap-2 justify-center w-full sm:w-auto cursor-pointer">
                  <Github size={20} /> Source Code
                </AngledButton>
              </a>
            </div>
          </div>
        </div>
      </header >

      {/* The Motto / Divider Section */}
      < section className="relative h-[50vh] min-h-[400px] md:h-[600px] w-full bg-slate-900 overflow-hidden border-y-8 border-amber-500" >
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <div className="bg-slate-800 relative h-full">
            <img
              src="img/gameplay4.png"
              alt="Environment Background Left"
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-overlay"
            />
            <div className="absolute top-4 left-4 text-xs font-mono text-amber-500">CAM_01 [REC]</div>
          </div>
          <div className="bg-slate-700 relative h-full hidden md:block">
            <img
              src="img/gameplay6.png"
              alt="Environment Background Right"
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-overlay"
            />
            <div className="absolute bottom-4 right-4 text-xs font-mono text-amber-500">CAM_02 [LIVE]</div>
          </div>
        </div>

        {/* Floating Text Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <div className="bg-white/95 backdrop-blur-sm border-4 border-slate-900 p-6 md:p-8 max-w-2xl text-center transform -skew-x-12 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <div className="transform skew-x-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-tight text-slate-900">
                Save the earth<br />
                <span className="text-amber-500">from trash</span><br />
                by recycling
              </h2>
            </div>
          </div>
        </div>
      </section >

      {/* The Why (Problem) Section */}
      < section id="about" className="py-16 md:py-24 px-4 md:px-6 bg-slate-50 border-b-2 border-slate-200" >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <SectionLabel number="01" text="MISSION BRIEFING" />
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 md:mb-6">Latar Belakang</h3>
              <p className="text-base md:text-lg text-slate-700 mb-4 md:mb-6 leading-relaxed">
                The borderline is clear: <strong className="bg-amber-200 px-1">we need to educate people on why recycling matters.</strong>
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Waste accumulation is threatening our ecosystem. Recycopter isn't just a game; it's a simulation of responsibility. We aim to show the direct correlation between effort (collecting) and outcome (a cleaner world), packaged in an engaging flight experience.
              </p>
            </div>
            <div className="order-1 md:order-2 relative w-full">
              <div className="aspect-video bg-slate-200 border-4 border-slate-900 relative">
                <img
                  src="https://i.natgeofe.com/n/e3834f0f-3c42-4648-9344-7102bd6027e8/80621.jpg"
                  alt="Environmental Damage Report"
                  className="w-full h-full object-cover"
                />
                {/* HUD Corners */}
                <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t-4 border-l-4 border-slate-900"></div>
                <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-4 border-r-4 border-slate-900"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-4 border-l-4 border-slate-900"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b-4 border-r-4 border-slate-900"></div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* The Solution Section */}
      < section className="py-16 md:py-24 px-4 md:px-6 bg-white border-b-2 border-slate-200" >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image - Order change on mobile to be second? Typically problem -> visual -> solution text -> visual works well. Default stacking order is visual first here. */}
            <div className="relative order-1 md:order-none">
              <div className="aspect-video bg-slate-800 border-4 border-slate-900 relative">
                <img
                  src="https://www.allcountyrecycling.com/blog/admin/uploads/2022/recycle_7.jpg"
                  alt="Gameplay Solution"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 pointer-events-none"></div>
              </div>
              {/* Offset deco */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-2 border-amber-500 -z-10"></div>
            </div>
            <div className="order-2 md:order-none">
              <SectionLabel number="02" text="TACTICAL SOLUTION" />
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 md:mb-6">Solusi Kami</h3>
              <p className="text-base md:text-lg text-slate-700 mb-4 md:mb-6 leading-relaxed">
                We constructed a gamified solution: <strong className="bg-amber-200 px-1">Pickup, Craft, Profit.</strong>
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Pilot your specialized Recycopter to scour the island for debris. But picking it up is just the start. Transport waste to processing facilities, craft useful materials, and convert pollution into pure profit. It's an economic loop that saves the world.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* Features Section */}
      < section id="features" className="py-16 md:py-24 px-4 md:px-6 bg-slate-50 overflow-hidden" >
        <div className="container mx-auto">
          <SectionLabel number="03" text="FLIGHT SYSTEMS" />
          <h3 className="text-3xl md:text-5xl font-black uppercase mb-12 md:mb-16 text-center">Core Features</h3>

          <div className="space-y-16 md:space-y-24">
            {features.map((feature, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                {/* Image Card */}
                <div className="w-full md:w-1/2 flex justify-center px-2">
                  <div
                    className={`
                      relative w-full max-w-sm md:max-w-md aspect-[4/3] bg-slate-900 border-4 border-amber-500 
                      shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] md:shadow-[15px_15px_0px_0px_rgba(15,23,42,1)] transition-transform duration-500 hover:scale-105 overflow-hidden
                    `}
                    style={{
                      borderRadius: '1.5rem',
                      // Removed rotation on mobile to prevent overflow/awkward spacing
                    }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-slate-900 px-3 py-1 font-bold font-mono text-xs z-10">
                      SYS_0{idx + 1}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-lg border-2 border-slate-900 overflow-hidden shrink-0">
                      <img
                        src={`https://placehold.co/100x100/e2e8f0/0f172a?text=${idx + 1}`}
                        alt="icon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold uppercase">{feature.title}</h4>
                  </div>
                  <p className="text-lg md:text-xl text-slate-600 font-medium pl-0 md:pl-2 md:border-l-4 border-amber-500/30">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Challenges & Opportunities (Dev Log) */}
      < section id="devlog" className="py-16 md:py-24 px-4 md:px-6 bg-slate-900 text-slate-50" >
        <div className="container mx-auto">
          <SectionLabel number="04" text="DEVELOPMENT LOG" />

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">

            {/* Challenges */}
            <div className="bg-slate-800 p-6 md:p-8 border-t-8 md:border-t-0 md:border-l-8 border-red-500 relative overflow-hidden">
              <Crosshair className="absolute top-4 right-4 text-slate-700 w-16 h-16 md:w-24 md:h-24 opacity-20" />
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-6 md:mb-8 flex items-center gap-3">
                <AlertTriangle className="text-red-500" /> Challenges
              </h3>
              <ul className="space-y-4 md:space-y-6">
                {challenges.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-sm md:text-base">
                    <span className="font-mono text-red-500 mt-1">0{i + 1}</span>
                    <p className="font-medium text-slate-300 border-b border-slate-700 pb-4 w-full">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="bg-slate-800 p-6 md:p-8 border-t-8 md:border-t-0 md:border-l-8 border-green-500 relative overflow-hidden">
              <TrendingUp className="absolute top-4 right-4 text-slate-700 w-16 h-16 md:w-24 md:h-24 opacity-20" />
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-6 md:mb-8 flex items-center gap-3">
                <Target className="text-green-500" /> Opportunities
              </h3>
              <ul className="space-y-4 md:space-y-6">
                {opportunities.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-sm md:text-base">
                    <span className="font-mono text-green-500 mt-1">0{i + 1}</span>
                    <p className="font-medium text-slate-300 border-b border-slate-700 pb-4 w-full">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section >

      {/* Team Section */}
      < section id="team" className="py-16 md:py-24 px-4 md:px-6 bg-amber-400" >
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black uppercase mb-12 md:mb-16 text-slate-900 inline-block border-b-4 border-slate-900 pb-2">
            MEET THE DEVS
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16">

            {/* Daffa */}
            <div className="group">
              <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-slate-100 rounded-full border-4 border-slate-900 flex items-center justify-center mb-4 md:mb-6 relative shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] group-hover:translate-y-[-5px] transition-transform overflow-hidden">
                <img
                  src="img/daffa.jpeg"
                  alt="Daffa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full border-4 border-white opacity-20 pointer-events-none"></div>
              </div>
              <h4 className="text-xl md:text-2xl font-black uppercase text-slate-900">Muhammad Daffa Rahman<br />L0124062</h4>
              <a href="https://github.com/daffarahman" className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-slate-900 text-amber-400 font-bold text-sm rounded hover:bg-slate-800 transition-colors">
                <Github size={16} /> @daffarahman
              </a>
            </div>

            {/* Asril */}
            <div className="group">
              <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-slate-100 rounded-full border-4 border-slate-900 flex items-center justify-center mb-4 md:mb-6 relative shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] md:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] group-hover:translate-y-[-5px] transition-transform overflow-hidden">
                <img
                  src="img/asril.jpeg"
                  alt="Asril"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full border-4 border-white opacity-20 pointer-events-none"></div>
              </div>
              <h4 className="text-xl md:text-2xl font-black uppercase text-slate-900">Syaikhasril Maulana Firdaus<br />L0124077</h4>
              <a href="https://github.com/Syaasr" className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-slate-900 text-amber-400 font-bold text-sm rounded hover:bg-slate-800 transition-colors">
                <Github size={16} /> @Syaasr
              </a>
            </div>

          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-slate-900 text-slate-400 py-8 md:py-12 px-6 border-t-8 border-amber-600" >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-700 flex items-center justify-center">
              <Recycle size={16} className="text-slate-200" />
            </div>
            <span className="font-black text-xl text-slate-200 tracking-tighter">RECYCOPTER</span>
          </div>

          <div className="text-xs md:text-sm font-mono text-center md:text-left">
            &copy; 2025 DAFFA & ASRIL. ALL RIGHTS RESERVED.
          </div>

          <div className="flex gap-4 text-sm md:text-base">
            <ArrowRight className="text-amber-500 animate-pulse" />
            <span className="font-bold text-amber-500">START CLEAN & RECYCLE</span>
          </div>
        </div>
      </footer >

    </div >
  );
};

export default RecycopterSite;