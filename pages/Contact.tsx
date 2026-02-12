import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = "Contact | NHSAST Space - Get in Touch";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const subject = encodeURIComponent(`Contact Inquiry from ${formData.firstName} ${formData.lastName}`);
      const body = encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Message:\n${formData.message}`
      );

      window.location.href = `mailto:mbennamane4@gmail.com?subject=${subject}&body=${body}`;

      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });

      // Reset status after a delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg text-white font-bold transition-all flex items-center justify-center gap-2 ${submitStatus === 'success'
                    ? 'bg-green-500'
                    : submitStatus === 'error'
                      ? 'bg-red-500'
                      : 'bg-gradient-to-r from-accent-cyan to-accent-purple hover:opacity-90'
                  }`}
              >
                {isSubmitting && submitStatus === 'idle' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : submitStatus === 'success' ? (
                  "Sent Successfully!"
                ) : submitStatus === 'error' ? (
                  "Error sending message"
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-center text-sm text-green-400 animate-fade-in mt-2 font-medium">
                  Email client opened. We'll get back to you soon!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;