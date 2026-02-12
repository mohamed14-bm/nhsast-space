import React, { useState } from 'react';
import { Github, Twitter, Instagram, Mail, Send, ExternalLink, Rocket, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-space-900 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-50 blur-[2px]" />

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent-cyan/10">
                <Rocket size={24} className="text-accent-cyan" />
              </div>
              <span className="font-display font-bold text-xl text-white">NHSAST Space</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-8">
              Empowering the next generation of astronomers, engineers, and dreamers at NHSAST.
              We explore the cosmos through science, technology, and imagination.
            </p>

            {/* Newsletter Subscription */}
            <div className="max-w-sm">
              <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-accent-cyan transition-colors"
                />
                <button
                  type="submit"
                  className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${subscribed
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-accent-cyan text-black hover:bg-accent-cyan/80'
                    }`}
                >
                  {subscribed ? '✓' : <Send size={16} />}
                </button>
              </form>
              {subscribed && (
                <p className="text-green-400 text-xs mt-2 animate-pulse">Thanks for subscribing!</p>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent-cyan transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 group-hover:bg-accent-cyan transition-colors" />
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/study-guide" className="text-gray-400 hover:text-accent-cyan transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 group-hover:bg-accent-cyan transition-colors" />
                  Study Guide
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-accent-cyan transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 group-hover:bg-accent-cyan transition-colors" />
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent-cyan transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 group-hover:bg-accent-cyan transition-colors" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Connect with Developer</h4>
            <div className="space-y-4">
              <a
                href="mailto:mbennamane4@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">mbennamane4@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-bennamane-22402b264/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors group"
              >
                <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn Profile</span>
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} NHSAST Space. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-600">Built with ❤️ for NHSAST students</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;