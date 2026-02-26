// components/LLMExplanationSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Code, Sparkles, Layers, Workflow, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function LLMExplanationSection() {
  const [activeTab, setActiveTab] = useState('WhatYouNeed');

  const workflowSteps = [
    {
      icon: Brain,
      title: "Idea Generation",
      description: "Can't figure out a great idea for your needs? Ai can craft it for you 😉",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Code Generation",
      description: "Building a website definitely means writing code. But do not worry, Ai is the best coder 😂",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Layers,
      title: "Structure Design",
      description: "A website is a project, and it needs to be structured. Ai can help you structure your work and project, you just need to know how to ask it! ",
      color: "from-green-500 to-emerald-500"
    },

    {
      icon: Sparkles,
      title: "Content Creation",
      description: "With Ai you will generate images, you will get customed attractive text, and everything you need to get the most of your website. ",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: Rocket,
      title: "The 'Me😁' ",
      description: "I will assist you in everything you need to get the best out of the Ai, from getting the raw idea and transforming it into your website 😌",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const DevelpmentStack = [
    {
      title: "You need to have Stable & reliable Internet Connection",
      examples: ["We primarily collaborate online using zoom/google meet","Meet-ups sessions are available upon request in certain cases", "We will set up the development environment", "Download the necessary apps"],
      efficiency: "Good Wifi"
    },
    {
      title: "Development stack that matches real world experience",
      examples: ["React.js / Next.js", "TypeScript", "Tailwind CSS", "Claude/Perplexity/ChatGPT/DeepSeek/Trae/Cursor"],
      efficiency: "5x faster"
    },

    {
      title: "Full Development Lify cyble simplified and explained for you",
      examples: ["What is a Website?", "What are the different type of websites","What are the parts of a website?", "What is a domain name?"],
      efficiency: "10x faster"
    },
    {
      title: "Advantages you will get",
      examples: ["Build & deploy your own portfolio website or your business website", "Get pro tips about efficiently using AI for school or work",],
      efficiency: "7x faster"
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 border border-primary-light/30 mb-8 animate-glow">
            <Brain className="w-5 h-5" />
            <span className="text-sm font-bold">Beyond ChatGPT</span>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="block text-text-light">Objectives of the Training</span>
            <span className="gradient-text block"></span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            This part covers what you will learn from this training <span className="font-semibold text-accent-light">And what you need to be able to take part into the training</span>. 
            Learn how to efficiently use AI for your projects.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'WhatYouNeed', label: 'What you need', icon: Zap },
            { id: 'workflow', label: 'Development Workflow', icon: Workflow },
     
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-accent to-accent-light text-primary-dark shadow-lg shadow-accent/30'
                  : 'glassmorphism hover:bg-white/10 text-text-muted hover:text-text-light'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {/* Development Workflow */}
          {activeTab === 'workflow' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="relative glassmorphism border border-white/10 rounded-2xl p-8 h-full group-hover:border-accent/50 transition-colors duration-300">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-text-muted leading-relaxed">{step.description}</p>
                    
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/50 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Connection Line (for desktop) */}
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent/50 to-transparent">
                        <div className="absolute -right-1 top-1/2 w-2 h-2 bg-accent rounded-full transform -translate-y-1/2" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* AI Capabilities */}
          {activeTab === 'WhatYouNeed' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {DevelpmentStack.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glassmorphism border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                        <h3 className="text-2xl font-bold">{capability.title}</h3>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {capability.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent/50 mt-2 flex-shrink-0" />
                            <span className="text-text-muted">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="md:w-48 flex-shrink-0">
                      <div className="bg-gradient-to-br from-primary-dark to-primary rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold gradient-text mb-2">{capability.efficiency}</div>
                        <div className="text-sm text-text-muted">Development Speed</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-text-muted mb-2">
                      <span>Traditional Development</span>
                      <span>AI-Assisted</span>
                    </div>
                    <div className="h-2 bg-primary/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Interactive Demo Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 glassmorphism border border-accent/30 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                <Cpu className="w-10 h-10 text-primary-dark" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">Secure your spot for the incoming training session</span>
              </h3>
              <p className="text-text-muted text-lg mb-6">
                <span className="font-semibold text-text-light">Contact me for more information about securing your place.</span> You can 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Get your custome way for learning",
                  "Learn online or have meet-ups",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Footer */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">70%</div>
            <div className="text-sm text-text-muted">Of dev tasks automated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">3-5x</div>
            <div className="text-sm text-text-muted">Faster project completion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">2026</div>
            <div className="text-sm text-text-muted">Industry standard</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">$100K+</div>
            <div className="text-sm text-text-muted">Salary premium for AI skills</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
} 