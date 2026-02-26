// components/RealitySection.tsx
'use client';

import { motion } from 'framer-motion';
import { Award, X, Check, Briefcase, Target, Zap, Users, Clock } from 'lucide-react';

export default function RealitySection() {
  const traditionalVsPractical = [
    {
      traditional: {
        icon: Award,
        title: "Paper Certificates",
        description: "Framed documents that collect dust on walls",
        color: "text-yellow-500"
      },
      practical: {
        icon: Briefcase,
        title: "Portfolio Projects",
        description: "Live websites you built that employers can actually see and test",
        color: "text-accent"
      }
    },
    {
      traditional: {
        icon: Users,
        title: "Theoretical Knowledge",
        description: "Memorizing concepts without applying them",
        color: "text-yellow-500"
      },
      practical: {
        icon: Zap,
        title: "Hands-On Experience",
        description: "Muscle memory from actually building, debugging, and deploying",
        color: "text-accent"
      }
    },
    {
      traditional: {
        icon: Clock,
        title: "Time-Consuming Courses",
        description: "Months of theory with little practical application",
        color: "text-yellow-500"
      },
      practical: {
        icon: Target,
        title: "Intensive Workshop",
        description: "One focused day that teaches you to ship real projects",
        color: "text-accent"
      }
    }
  ];

  const whatYouGet = [
    {
      icon: Briefcase,
      title: "A Live Portfolio Piece",
      description: "A website you actually built, deployed, and can show to everyone"
    },
    {
      icon: Zap,
      title: "AI Development Workflow",
      description: "Clear guidelines to repeat the process and build more with AI"
    },
    {
      icon: Users,
      title: "Great design Skills",
      description: "Ability to find great design ressources and build amazing websites"
    },
    {
      icon: Target,
      title: "Confidence to Build",
      description: "The assurance that you can create any web project you imagine"
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.05),transparent_50%)]" />
      
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
            <Target className="w-5 h-5" />
            <span className="text-sm font-bold">The Honest Truth</span>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="block text-text-light">No Paper Certificates.</span>
            <span className="gradient-text block py-4">Just Real Capability.</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            We don't give you something to hang on your wall. We give you something to <span className="font-semibold text-accent-light">build with your hands</span> and <span className="font-semibold text-accent-light">show in your portfolio</span>.
          </p>
        </motion.div>

        {/* Traditional vs Practical Comparison */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {traditionalVsPractical.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Traditional - What We DON'T Do */}
                <div className="glassmorphism border border-yellow-500/20 rounded-2xl p-8 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center">
                      <X className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <div className="text-sm text-yellow-500 font-semibold mb-1">What We Don't Give</div>
                      <h3 className="text-xl font-bold">{item.traditional.title}</h3>
                    </div>
                  </div>
                  <p className="text-text-muted">{item.traditional.description}</p>
                </div>

                {/* Practical - What We DO Provide */}
                <div className="glassmorphism border border-accent/30 rounded-2xl p-8 relative z-10 transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent-light/20 flex items-center justify-center">
                      <Check className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-accent font-semibold mb-1">What You Actually Get</div>
                      <h3 className="text-xl font-bold">{item.practical.title}</h3>
                    </div>
                  </div>
                  <p className="text-text-light">{item.practical.description}</p>
                  
                  {/* Highlight Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 transform rotate-45 translate-x-12 -translate-y-12" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* The Core Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-primary-dark to-primary border border-accent/30 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary-dark" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">The Bottom Line</span>
              </h3>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Employers or customers don't ask to see your certificates. They ask <span className="font-semibold gradient-text">"What have you built?"</span> and 
                <span className="font-semibold gradient-text"> "let's see what you propose"</span>. We prepare you to answer both questions confidently.
              </p>
            </div>
          </motion.div>
        </div>

        {/* What You Actually Walk Away With */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">What You Actually Walk Away With</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatYouGet.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glassmorphism border border-white/10 rounded-2xl p-8 h-full hover:border-accent/30 transition-colors duration-300 group-hover:transform group-hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent-light/20 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-text-muted leading-relaxed">{item.description}</p>
                  
                  {/* Progress Indicator */}
                  <div className="mt-6">
                    <div className="h-1 bg-primary/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Truth Bomb */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glassmorphism border border-accent/30 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary-dark" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">The Only Thing That Matters</span>
              </h3>
              <p className="text-text-muted text-lg">
                At the end of the day, <span className="font-semibold text-text-light">can you build what people need?</span> That's the only skill that translates 
                to job offers, freelance clients, and successful projects. Everything else is just decoration.
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}