// components/BookingSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Contact, Linkedin, Github, ExternalLink, CheckCircle, Award, Briefcase } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image'

export default function BookingSection() {
  //const [activeTab, setActiveTab] = useState('details');

  const trainingDetails = {
    date: "March 14, 2026",
    time: "15:00 PM - 6:00 PM",
    format: "Online using google meet / zoom ",
    location: "Kigali, Rwanda",
    capacity: "This cohort is limited to 10 participants",
    price: "130.000 Rwf",
    earlyBird: "70.000 Rwf"
  };

  const aboutMe = {
    name: "Ben Aziz SANGARE",
    title: "Full-Stack Developer & AI Integration Specialist",
    experience: "2+ years in web development",
    expertise: ["Mobile application development", "Web application Development", "Developper Operations", "Database management", "Web hosting", "Team Leadership"],
    projects: "10+ production websites",
    clients: "Startups to Fortune 500 companies",
    education: "Computer Science Degree + Software Engineering Master's student",
    philosophy: "Teach practical skills that translate to real-world results"
  };


  return (
    <section  id="booking"  className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.1),transparent_50%)]" />
      
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
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-bold">Secure Your Spot</span>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="block text-text-light">Ready to Build</span>
            <span className="gradient-text block">With AI in 2026?</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            Join this exiting training that will teach you the power of Artificial Intelligence in Web Development🎊🎊
          </p>
        </motion.div>

        {/* Tabs */}
        {/* <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'details'
                ? 'bg-gradient-to-r from-accent to-accent-light text-primary-dark shadow-lg shadow-accent/30'
                : 'glassmorphism hover:bg-white/10'
            }`}
          >
            Training Details
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'about'
                ? 'bg-gradient-to-r from-accent to-accent-light text-primary-dark shadow-lg shadow-accent/30'
                : 'glassmorphism hover:bg-white/10'
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveTab('WhoAreYou')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'WhoAreYou'
                ? 'bg-gradient-to-r from-accent to-accent-light text-primary-dark shadow-lg shadow-accent/30'
                : 'glassmorphism hover:bg-white/10'
            }`}
          >
            Who Are You?
          </button>
        </div> */}

        {/* Tab Content */}
        <div className="min-h-[500px]">

          {/* Training Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Left Column - Details */}
              <div className="space-y-8">
                <div className="glassmorphism border border-accent/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Training Details</h3>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Calendar, label: "Date", value: trainingDetails.date },
                      { icon: Clock, label: "Time", value: trainingDetails.time },
                      { icon: MapPin, label: "Format", value: trainingDetails.format },
                      { icon: MapPin, label: "Location", value: trainingDetails.location },
                      { icon: Users, label: "Capacity", value: trainingDetails.capacity }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent-light/20 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <div className="text-sm text-text-muted">{item.label}</div>
                          <div className="text-lg font-semibold">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Early Bird Pricing */}
                <div className="glassmorphism border border-yellow-500/30 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
                    <span className="text-yellow-400 font-semibold">Early Bird Pricing</span>
                  </div>
                  
                  <div className="flex items-baseline gap-3 mb-4">
                    <div className="text-5xl font-bold gradient-text ">{trainingDetails.earlyBird}</div>
                    <div className="text-text-muted line-through">{trainingDetails.price}</div>
                  </div>
                  
                  <p className="text-red-500 mb-6">Please note: This pricing is available for this cohort only!"</p>
                  
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Clock className="w-4 h-4" />
                    <span>One time offer</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Registration */}
              <div className="glassmorphism border border-accent/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Register Now</h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {[
                      "100% assisted until you deploy your website",
                      "You get the knowledge to build YOURSELF",
                      "Every essentials you need to know about AI",
                      "Get a professional assistance even when training is over",
                      "Personal project review",
                      "Lifetime access to materials"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Registration Form Link */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">Limited Spots</div>
                    <p className="text-text-muted">Only 10 participants to ensure personal attention</p>
                  </div>

                  <a
                    href="https://forms.gle/T1zaR8rMMBVN2tns8" // Replace with your actual Google Form
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-xl text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-accent/30"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <span>Secure My Spot Now</span>
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </a>

                  <div className="text-center">
                    <p className="text-text-muted text-sm">
                      You'll be redirected to our secure registration form
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          

          {/* About Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-40"
            >
              {/* Left Column - Profile */}
              <div className="lg:col-span-2">
                <div className="glassmorphism border border-accent/30 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row gap-8 mb-8">
                    <div className="flex-shrink-0">
                      {/* Profile Picture Placeholder */}
                      <Image
                       src={'/projects/profile2.jpg'}
                       alt='BenProfile'
                       width={300}
                       height={500}
                       className='rounded-2xl'
                       unoptimized
                       ></Image>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-3xl font-bold mb-2">{aboutMe.name}</h3>
                      <p className="text-xl text-accent mb-6">{aboutMe.title}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="text-center p-4 bg-primary/30 rounded-xl">
                          <div className="text-2xl font-bold gradient-text">{aboutMe.experience}</div>
                          <div className="text-sm text-text-muted">Experience</div>
                        </div>
                        <div className="text-center p-4 bg-primary/30 rounded-xl">
                          <div className="text-2xl font-bold gradient-text">{aboutMe.projects}</div>
                          <div className="text-sm text-text-muted">Projects</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-4">My Expertise</h4>
                      <div className="flex flex-wrap gap-3">
                        {aboutMe.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-accent/10 to-accent-light/10 rounded-lg border border-accent/20 text-accent-light"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-4">My Philosophy</h4>
                      <p className="text-text-muted text-lg leading-relaxed">
                        {aboutMe.philosophy}. I believe in teaching practical, immediately applicable skills 
                        that help you build real things, not just pass tests. My training comes from 
                        years of real-world experience building production applications with AI.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-4">Education & Background</h4>
                      <p className="text-text-muted">
                        {aboutMe.education}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact & Social */}
              <div className="space-y-8">
                <div className="glassmorphism border border-accent/30 rounded-2xl p-8">
                  <h4 className="text-xl font-bold mb-6">Contact Me</h4>
                  
                  <div className="space-y-6">
                  <a
                      href="+250 791 207 043" // Replace with your phone number
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-primary/30 rounded-xl hover:bg-primary/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent-light/20 flex items-center justify-center">
                        <Contact className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-text-muted">Phone Number</div>
                        <div className="font-semibold">+250 791 207 043</div>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/ben-aziz-sangar%C3%A9-a0758a275" // Replace with your LinkedIn
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-primary/30 rounded-xl hover:bg-primary/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent-light/20 flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-text-muted">LinkedIn</div>
                        <div className="font-semibold">Visite my LinkedIn profile</div>
                      </div>
                    </a>

                    <a
                      href="https://github.com/azizben01" // Replace with your GitHub
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-primary/30 rounded-xl hover:bg-primary/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent-light/20 flex items-center justify-center">
                        <Github className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-text-muted">GitHub</div>
                        <div className="font-semibold">https://github.com/azizben01</div>
                      </div>
                    </a>

                  </div>
                </div>

                <div className="glassmorphism border border-accent/30 rounded-2xl p-8">
                  <h4 className="text-xl font-bold mb-6">Why Learn From Me?</h4>
                  <ul className="space-y-4">
                    {[
                      "Real industry experience, not just theory",
                      "Proven track record with AI integration",
                      "Focus on practical, applicable skills",
                      "Hands-on teaching approach",
                      "Continued support after training"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          

          {/* WhoAreYou */}

          <div className="text-center pt-40 pb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Who Is This For?</span>
             </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                This training is designed for everyone with the will to learn and work with AI. Whether you are: 
              </p>
          </div>
            
           <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
         >
           {/* Persona 1: Student */}
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="glassmorphism border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02]"
           >
             <div className="text-5xl mb-4">🎓</div>
             <h3 className="text-2xl font-bold mb-3">The Final Year Student</h3>
             <p className="text-text-muted leading-relaxed">
               Software engineering or computer science student wanting to build an impressive final year project. Not just pass, but create something that employers will notice.
             </p>
             <div className="mt-6 pt-6 border-t border-white/10">
               <span className="text-accent text-sm">Perfect for Defense Project • CSC • Software.E</span>
             </div>
           </motion.div>
         
           {/* Persona 2: Business Professional */}
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="glassmorphism border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02]"
           >
             <div className="text-5xl mb-4">💼</div>
             <h3 className="text-2xl font-bold mb-3">The Business Professional</h3>
             <p className="text-text-muted leading-relaxed">
               Worker, entrepreneur, or business owner who wants to create their own website and advertising materials without relying on expensive agencies.
             </p>
             <div className="mt-6 pt-6 border-t border-white/10">
               <span className="text-accent text-sm">Build your brand • Save money</span>
             </div>
           </motion.div>
         
           {/* Persona 3: Practical Learner */}
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="glassmorphism border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02]"
           >
             <div className="text-5xl mb-4">🚀</div>
             <h3 className="text-2xl font-bold mb-3">The Practical Learner</h3>
             <p className="text-text-muted leading-relaxed">
               Anyone wanting to learn practical software building skills and master AI tools; not just theory, but real capability you can apply immediately.
             </p>
             <div className="mt-6 pt-6 border-t border-white/10">
               <span className="text-accent text-sm">Master AI • Build real projects</span>
             </div>
           </motion.div>
           
         </motion.div>
        
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center pb-20"
        >
          <div className="inline-flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Stop Watching Tutorials. Start Building.</span>
              </h3>
              <p className="text-xl text-text-muted">
                The difference between wanting to learn and actually learning is taking action.
              </p>
            </div>
            
            <a
              href="https://forms.gle/T1zaR8rMMBVN2tns8" // Replace with your actual Google Form
              target="_blank"
              rel="noopener noreferrer"
              className="group px-12 py-5 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-xl text-xl hover:scale-105 transition-transform duration-300 shadow-2xl shadow-accent/30 inline-flex items-center gap-3"
            >
              <span>Register for March 14 Training</span>
              <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4 text-text-muted">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Only 10 spots available</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Early bird ends March 10</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}