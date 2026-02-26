// app/page.tsx - UPDATED VERSION
"use client";
import BookingSection from "@/components/BookingSection";
import TextType from "@/components/DecryptedText";
import LLMExplanationSection from "@/components/LLMExplanationSection";
import ProjectShowcaseVelocity from "@/components/ProjectShowcaseVelocity";
import RealitySection from "@/components/RealitySection";
import { ArrowRight, Sparkles, Code, Cpu, Zap, Languages } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Language indicator - fixed top right */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full glassmorphism px-4 py-2 text-sm">
        <Languages className="w-4 h-4 text-accent" aria-hidden />
        <span className="font-medium text-text-light">Language</span>
        <a href="#" className="text-text-light font-semibold underline decoration-accent/50" aria-current="page">EN</a>
        <span className="text-text-muted">|</span>
        <a href="#" className="text-text-muted hover:text-text-light transition-colors">FR</a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 border border-primary-light/30 mb-8 animate-glow">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">One-Time AI Experience</span>
          </div>
          
          {/* Main Headline - WITH TEXTTYPE ANIMATION */}
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            <span className="block text-text-light mb-8">Join This Exciting AI Training</span>
            
            {/* Animated Text with Typewriter Effect */}
            <div className="relative">
              <TextType
                text={[
                  "Hello! This website looks great, right? ",
                  "What if I told you that you could make your own website...",
                  "Scroll down and contact me for more. Arigatou !!",
                ]}
                as="span"
                typingSpeed={30}
                initialDelay={500}
                pauseDuration={1500}
                deletingSpeed={25}
                loop={true}
                showCursor={true}
                hideCursorWhileTyping={true}
                cursorCharacter="|"
                cursorClassName="text-accent animate-pulse"
                cursorBlinkDuration={0.8}
                className="gradient-text block py-5"
                startOnVisible={true}
                variableSpeed={{ min: 30, max: 70 }}
              />
            </div>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-4 leading-relaxed mt-12">
            Stop following tutorials. Start <span className="font-semibold text-accent-light">thinking with AI</span> as your partner. 
            Master the future of web development in one transformative session.
          </p>
          
          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 glassmorphism px-4 py-3 rounded-lg">
              <Zap className="w-5 h-5 text-accent" />
              <span>Online or On-Site sessions</span>
            </div>
            <div className="flex items-center gap-3 glassmorphism px-4 py-3 rounded-lg">
              <Code className="w-5 h-5 text-accent" />
              <span>Zero to Deployed Website</span>
            </div>
            <div className="flex items-center gap-3 glassmorphism px-4 py-3 rounded-lg">
              <Cpu className="w-5 h-5 text-accent" />
              <span>AI-Powered Development</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://forms.gle/T1zaR8rMMBVN2tns8"
              className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-bold rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 inline-flex items-center gap-3"
            >
              <span>Secure Your Spot Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="#booking"
              className="px-8 py-4 glassmorphism font-medium rounded-lg text-lg hover:bg-slate-100/80 transition-colors text-text-light"
           scroll>
              See Full Curriculum
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-text-muted text-sm">Practical Hands-On</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">AI-First</div>
              <div className="text-text-muted text-sm">Development Approach</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">2026</div>
              <div className="text-text-muted text-sm">Future-Ready Skills</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">Live</div>
              <div className="text-text-muted text-sm">Project Deployment</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2" />
        </div>
      </div>
      
      {/* <ProjectGallerySection /> */}
      <ProjectShowcaseVelocity />
      <LLMExplanationSection />
      <RealitySection />
      <BookingSection />
      
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
    <p className="text-text-muted text-sm order-2 sm:order-1">
      © {new Date().getFullYear()} Build Websites with AI in 2026.
    </p>
    
    <div className="flex items-center gap-8 order-1 sm:order-2">
      <a 
        href="https://kpmsite.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-accent hover:text-accent-light font-medium transition-colors flex items-center gap-1"
      >
        <span className="text-lg">KlyPlusAndMore</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      <span className="text-text-muted">All rights reserved.</span>
    </div>
  </div>
</footer>
    </div>
  );
}