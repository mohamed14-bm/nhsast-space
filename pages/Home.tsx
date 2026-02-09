import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Globe, Cpu, Cog, Sparkles, Users, Briefcase, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

// Animated counter hook
const useCountUp = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return { count, ref };
};

const StatCard: React.FC<{ value: string; label: string; icon: React.ReactNode }> = ({ value, label, icon }) => {
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  const { count, ref } = useCountUp(numericValue);

  return (
    <div ref={ref} className="text-center group">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-4 group-hover:scale-110 group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all duration-300">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-400 uppercase tracking-wider text-sm">{label}</div>
    </div>
  );
};

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "NHSAST Space | Home - Excellence in Autonomous Systems";
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-cyan/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
              </span>
              <Sparkles size={14} />
              Academic Year 2025-2026
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8">
              Innovation for the <br />
              <span className="text-gradient relative">
                Future of Modern Technology
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 400 8" fill="none">
                  <path d="M0 4C100 4 100 8 200 8C300 8 300 0 400 0" stroke="url(#underlineGradient)" strokeWidth="2" className="animate-draw-line" />
                  <defs>
                    <linearGradient id="underlineGradient" x1="0" y1="0" x2="400" y2="0">
                      <stop stopColor="#00F0FF" />
                      <stop offset="1" stopColor="#7000FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              NHSAST merges the academic excellence of the National Higher School of Advanced Science and Technology with cutting-edge advancements in robotics and autonomous systems engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/study-guide"
                className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 rounded-xl bg-white text-black font-bold text-base md:text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-white/10"
              >
                Browse Study Guides
                <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 rounded-xl border border-white/20 text-white font-bold text-base md:text-lg hover:bg-white/10 hover:border-white/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                About Our Mission
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500">
          <span className="text-xs tracking-widest uppercase font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-500/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-space-800/50 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/5 via-transparent to-accent-cyan/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
            <StatCard value="500+" label="Active Students" icon={<Users className="w-5 h-5 md:w-6 md:h-6 text-accent-cyan" />} />
            <StatCard value="15" label="Research Projects" icon={<Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent-purple" />} />
            <StatCard value="3" label="Specialties" icon={<Cpu className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />} />
            <StatCard value="30+" label="Workshops" icon={<BookOpen className="w-5 h-5 md:w-6 md:h-6 text-green-400" />} />
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold text-accent-cyan border border-accent-cyan/30 bg-accent-cyan/10 mb-6">
              Engineering Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Our Specialties</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We apply the rigorous engineering disciplines taught at NHSAST to solve complex challenges in autonomous technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Specialty Card 1 */}
            <div className="glass-panel p-8 rounded-2xl hover:border-accent-cyan/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-cyan/20 transition-all duration-300">
                  <Cpu className="w-8 h-8 text-accent-cyan" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent-cyan transition-colors">Autonomous Embedded Systems</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Design robust embedded systems for autonomous operation, focusing on firmware, sensors, and real-time processing.
                </p>
                <Link to="/study-guide" className="text-accent-cyan font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Curriculum <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Specialty Card 2 */}
            <div className="glass-panel p-8 rounded-2xl hover:border-accent-purple/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-purple/20 transition-all duration-300">
                  <Cog className="w-8 h-8 text-accent-purple" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent-purple transition-colors">Robotics & Autonomous Systems</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Master the design, modeling, and control of intelligent robotic agents, from manipulators to mobile robots.
                </p>
                <Link to="/study-guide" className="text-accent-purple font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Curriculum <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Specialty Card 3 */}
            <div className="glass-panel p-8 rounded-2xl hover:border-pink-500/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-pink-500/20 transition-all duration-300">
                  <Globe className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-pink-500 transition-colors">Unmanned Systems Nav & Control</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Specialty dealing with the guidance, navigation, and control systems of UAVs and other unmanned vehicles.
                </p>
                <Link to="/study-guide" className="text-pink-500 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Curriculum <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-24 text-center">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/30 via-accent-cyan/20 to-accent-purple/30 animate-gradient-x" />
            <div className="absolute inset-0 bg-space-900/60 backdrop-blur-xl" />

            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-accent-cyan/20 rounded-full blur-[60px]" />
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-accent-purple/20 rounded-full blur-[60px]" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Boost Your Academic Journey</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Access previous exams, course summaries, and technical workshops tailored for NHSAST students.
              </p>
              <Link
                to="/study-guide"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
              >
                <BookOpen size={20} />
                Open Study Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;