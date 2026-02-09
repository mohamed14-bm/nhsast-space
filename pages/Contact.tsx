import React, { useEffect } from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact | NHSAST Space - Get in Touch";
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-xl text-gray-400 mb-12">
              Have questions about the school, the specialties, the campus? Want to collaborate on a project? We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="text-accent-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email Us</h3>
                  <p className="text-gray-400">mbennamane4@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Visit Us</h3>
                  <p className="text-gray-400">MVQ9+MHJ, Mahelma</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Globe className="text-pink-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Visit the School Website</h3>
                  <a
                    href="http://www.enstsa.edu.dz/en/tronc-commun.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-cyan transition-colors break-all"
                  >
                    http://www.enstsa.edu.dz/en/tronc-commun.php
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-bold hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;