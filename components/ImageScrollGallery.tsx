// components/ImageScrollVelocity.tsx
'use client';

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import Image from "next/image";

// Sample project images - replace with your actual project screenshots
const PROJECT_IMAGES = [
  {
    id: 1,
    src: "/projects/clothes.png",
    alt: "AI E-commerce Platform",
    title: "E-commerce Platform",
    description: "Built with Next.js & OpenAI"
  },
  {
    id: 2,
    src: "/projects/mode.png", 
    alt: "Analytics Dashboard",
    title: "Analytics Dashboard",
    description: "Real-time data visualization"
  },
  {
    id: 3,
    src: "/projects/health.jpg",
    alt: "Health Tracker App",
    title: "Health Tracker",
    description: "React Native + AI coaching"
  },
  {
    id: 4,
    src: "/projects/portfolio.jpg",
    alt: "Portfolio Builder",
    title: "Portfolio Builder",
    description: "AI-generated portfolios"
  },
  {
    id: 5,
    src: "/projects/saas.jpg",
    alt: "SaaS Platform",
    title: "SaaS Platform",
    description: "Subscription service with AI"
  },
  {
    id: 6,
    src: "/projects/blog.jpg",
    alt: "AI Blog Platform",
    title: "AI Blog Platform",
    description: "Auto-content generation"
  },
  {
    id: 7,
    src: "/projects/chatbot.jpg",
    alt: "AI Chatbot",
    title: "AI Chatbot",
    description: "Customer service automation"
  },
  {
    id: 8,
    src: "/projects/analytics.jpg",
    alt: "Business Analytics",
    title: "Business Analytics",
    description: "AI-powered insights"
  }
];

export default function ImageScrollVelocity() {
  return (
    <div className="w-full bg-white py-20 overflow-hidden">
      {/* Top Text */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Projects Built with AI
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Scroll vertically to see images move horizontally based on your scroll speed
        </p>
      </div>

      {/* First Row: Images scrolling right */}
      <div className="mb-16">
        <ScrollVelocityContainer className="py-8">
          <ScrollVelocityRow 
            baseVelocity={15} 
            direction={1}
            className="flex gap-8"
          >
            {/* Duplicate images for continuous scrolling */}
            {[...PROJECT_IMAGES, ...PROJECT_IMAGES].map((project, index) => (
              <div 
                key={`row1-${project.id}-${index}`}
                className="relative flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-gray-100 border-2 border-gray-200 rounded-2xl overflow-hidden">
                  {/* Placeholder for image - replace with Next/Image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="text-6xl font-bold text-blue-100 mb-4">
                      {project.id}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 text-center">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-center mt-2 text-sm">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {project.description}
                    </p>
                    <div className="mt-4 flex gap-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
                        Next.js
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
                        AI
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
                        TypeScript
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 transform rotate-45 translate-x-12 -translate-y-12" />
                </div>
              </div>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>

      {/* Second Row: Images scrolling left (slower) */}
      <div className="mb-16">
        <ScrollVelocityContainer className="py-8">
          <ScrollVelocityRow 
            baseVelocity={-12} 
            direction={-1}
            className="flex gap-8"
          >
            {[...PROJECT_IMAGES.slice().reverse(), ...PROJECT_IMAGES.slice().reverse()].map((project, index) => (
              <div 
                key={`row2-${project.id}-${index}`}
                className="relative flex-shrink-0 w-72 h-56 rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-200 mb-2">
                        #{project.id}
                      </div>
                      <h4 className="font-semibold text-gray-800">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Badge */}
                <div className="absolute -top-2 -right-2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
                  AI
                </div>
              </div>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>

      {/* Third Row: Images scrolling right (fast) */}
      <div className="mb-16">
        <ScrollVelocityContainer className="py-8">
          <ScrollVelocityRow 
            baseVelocity={25} 
            direction={1}
            className="flex gap-6"
          >
            {[...PROJECT_IMAGES, ...PROJECT_IMAGES, ...PROJECT_IMAGES].map((project, index) => (
              <div 
                key={`row3-${project.id}-${index}`}
                className="relative flex-shrink-0 w-64 h-48 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-gray-100 border border-gray-200 rounded-lg overflow-hidden">
                  {/* Minimal design */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold text-blue-300 mb-1">
                        {String(project.id).padStart(2, '0')}
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        {project.title}
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick info on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-xs text-gray-600">{project.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-8 px-4">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 rounded-full border border-blue-100">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <span className="text-sm text-gray-600 font-medium">
            Scroll vertically to control horizontal image movement
          </span>
        </div>
      </div>
    </div>
  );
}