import React from 'react';
import { Target, Lightbulb, Heart, BookOpen, Layers, Cpu, Cog, Plane, Globe, Briefcase, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = (specialtyId: string) => {
    navigate('/study-guide', { state: { mode: 'specs', specialty: specialtyId } });
  };

  const specialties = [
    {
      id: 'aes',
      title: 'Autonomous Embedded Systems',
      icon: <Cpu className="w-12 h-12 text-accent-cyan" />,
      color: 'accent-cyan',
      description: "This specialty focuses on the 'brain' of autonomous machines—the dedicated hardware and software that process data in real-time. You will learn to design high-performance embedded architectures using FPGAs and microcontrollers, ensuring that algorithms for perception and decision-making run efficiently and reliably within strict power and timing constraints. The curriculum bridges the gap between hardware electronics and low-level software.",
      application: "From the autopilot computer in a Tesla processing video feeds to the flight controller of a SpaceX rocket, AES is everywhere. It powers smart medical implants ensuring patient safety, industrial IoT sensors monitoring factory health, and the collision avoidance systems in modern vehicles that save lives daily.",
      jobs: "Graduates are highly sought after as Embedded Systems Engineers, Firmware Developers, and Hardware Architects. Key employers include automotive giants (like BMW, Tesla), aerospace companies (like Airbus), and tech startups focusing on IoT, edge computing, and consumer electronics."
    },
    {
      id: 'rasd',
      title: 'Robotics & Autonomous Systems Design',
      icon: <Cog className="w-12 h-12 text-accent-purple" />,
      color: 'accent-purple',
      description: "Robotics Design merges mechanical engineering with advanced control theory and AI. This track teaches you how to build the physical body of a robot and program its movement. You will study kinematics, dynamics, and machine learning to create agents that can manipulate objects and traverse complex terrains. From designing agile manipulator arms to developing mobile rovers, you will gain expertise in actuator control and the integration of artificial intelligence for perception.",
      application: "Think of Boston Dynamics' Atlas doing parkour, surgical robots like Da Vinci performing non-invasive surgery, or the massive automated arms assembling cars in a Gigafactory. RASD engineers build the machines that are revolutionizing manufacturing, logistics (like Amazon's warehouse robots), and healthcare through exoskeletons.",
      jobs: "Career paths include Robotics Engineer, Mechatronics Specialist, and Automation Engineer. Opportunities exist in manufacturing (Industry 4.0), healthcare robotics, logistics automation, defense, and service robotics."
    },
    {
      id: 'usnc',
      title: 'Unmanned Systems Nav & Control',
      icon: <Plane className="w-12 h-12 text-pink-500" />,
      color: 'pink-500',
      description: "This specialty deals with the science of guidance, navigation, and control (GNC). It answers three critical questions for any unmanned vehicle: Where am I? Where am I going? How do I get there? You will master flight dynamics, sensor fusion, state estimation (Kalman filtering), and path planning algorithms. The curriculum prepares you to design robust control systems that allow aerial, marine, and ground vehicles to navigate complex, dynamic environments autonomously.",
      application: "USNC powers the delivery drones dropping packages in backyards, autonomous container ships crossing the ocean, and the Mars Perseverance rover navigating the Red Planet's surface autonomously. It's the technology behind swarm drones for agriculture and the search-and-rescue UAVs that find lost hikers.",
      jobs: "Graduates are highly specialized GNC (Guidance, Navigation, and Control) Engineers, Flight Control Engineers, and Unmanned Systems Developers. They are sought after by drone manufacturers, defense contractors, and space agencies like NASA or ESA."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">About <span className="text-gradient">NHSAST</span></h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            The National Higher School of Autonomous Systems Technology (NHSAST) is a center of excellence dedicated to bridging the gap between academic theory in engineering and the practical challenges of autonomous systems.
          </p>
        </div>

        {/* Vision/Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              icon: <Target className="w-10 h-10 text-accent-cyan" />, 
              title: "Our Mission", 
              desc: "To foster a community of innovators who apply their engineering skills in electronics, mechanics, and processing to autonomous projects." 
            },
            { 
              icon: <Lightbulb className="w-10 h-10 text-accent-purple" />, 
              title: "Our Vision", 
              desc: "To become a leading hub for student-led research in the region, contributing to national advancements in technology." 
            },
            { 
              icon: <BookOpen className="w-10 h-10 text-pink-500" />, 
              title: "Academic Excellence", 
              desc: "Supporting the rigorous curriculum of NHSAST by providing practical applications for classroom knowledge." 
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* General Review Section */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-bold mb-4 border border-accent-cyan/20">
              <Layers size={14} />
              <span>General Review</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Engineering the Future</h2>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 relative overflow-hidden">
             {/* Decorative background element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
             
             <div className="relative z-10 space-y-8 text-lg text-gray-300 leading-relaxed text-justify">
                <p>
                  Autonomous systems represent the pinnacle of modern engineering—machines capable of sensing, thinking, and acting without direct human intervention. From self-driving cars to interplanetary rovers, this field is reshaping our world. 
                </p>
                <p>
                  NHSAST is committed to training the elite engineers who will drive this revolution. Our curriculum is rigorously designed to bridge the gap between abstract mathematical theory and real-world application, fostering a deep understanding of the complex interplay between hardware, software, and physical dynamics.
                </p>
                <p>
                  Students embarking on this journey begin with a comprehensive Preparatory Cycle, mastering the fundamental languages of nature and logic: mathematics, physics, and computer science. Upon this bedrock, they advance to the Engineering Cycle, specializing in one of three cutting-edge domains: Autonomous Embedded Systems, Robotics & Autonomous Systems Design, or Unmanned Systems Navigation & Control.
                </p>
             </div>
          </div>
        </div>

        {/* Specialized Tracks Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Our Specialized Tracks</h2>
          
          <div className="space-y-24">
            {specialties.map((spec, index) => (
              <div key={spec.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
                
                {/* Info Column */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-${spec.color}/10 border border-${spec.color}/20`}>
                      {spec.icon}
                    </div>
                    <h3 className="text-3xl font-display font-bold">{spec.title}</h3>
                  </div>

                  <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                    <p className="border-l-2 border-white/10 pl-6">
                      {spec.description}
                    </p>
                    
                    <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                      <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                        <Globe className={`text-${spec.color}`} size={20} /> Real World Applications
                      </h4>
                      <p className="text-sm md:text-base text-gray-400">{spec.application}</p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                      <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                        <Briefcase className={`text-${spec.color}`} size={20} /> Job Opportunities
                      </h4>
                      <p className="text-sm md:text-base text-gray-400">{spec.jobs}</p>
                    </div>

                    <div className="pt-4">
                      <button 
                        onClick={() => handleDiscoverClick(spec.id)}
                        className={`w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-${spec.color}/20 to-${spec.color}/10 border border-${spec.color}/30 text-white font-bold hover:scale-105 transition-all flex items-center justify-center gap-3 group`}
                      >
                        Discover {spec.title.split('&')[0]} Modules
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative Visual Column (could be an image in real app) */}
                <div className="w-full lg:w-1/3 relative hidden lg:block h-[500px]">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-900 z-10" />
                   <div className={`w-full h-full rounded-2xl bg-${spec.color}/5 border border-${spec.color}/10 relative overflow-hidden`}>
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-${spec.color}/20 rounded-full blur-[80px] animate-pulse-slow`} />
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        {React.cloneElement(spec.icon as React.ReactElement<any>, { size: 120 })}
                      </div>
                   </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;