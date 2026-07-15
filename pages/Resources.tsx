import React, { useState, useEffect } from 'react';
import { Book, Video, Link as LinkIcon, Download, ArrowLeft, Cpu, Globe, Code, Zap, Sparkles, BookOpen, PenTool, Send } from 'lucide-react';

import { ResourceArticle } from '../types';
import { resources } from '../data/resourcesData';

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);

  // Contribution Form State
  const [submissionType, setSubmissionType] = useState<'text' | 'pdf'>('text');
  const [contribution, setContribution] = useState({
    name: '',
    contact: '',
    title: '',
    category: 'Arduino Basics',
    content: '',
    fileName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleContributeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwpWUS5rusIGTMsaf9nUhJyl0VO7e-I1jlheSECuEm9YOAOWDj-mNFfDxPSS_azwyHHuw/exec';

    const readFileAsDataURL = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
      });
    };

    try {
      let payload: any = {
        name: contribution.name,
        email: contribution.contact, // Mapping contact field to 'email' for your script
        category: contribution.category,
        title: contribution.title,
        type: submissionType
      };

      if (submissionType === 'text') {
        payload.content = contribution.content;
        payload.fileData = ""; // Avoid crashes in your script if fileData is missing
      } else {
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        const file = fileInput?.files?.[0];
        if (file) {
          payload.fileData = await readFileAsDataURL(file); // Sends the full data:application/pdf;base64,...
          payload.fileName = file.name;
        }
      }

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === "success") {
        setSubmitStatus('success');
        setContribution({ name: '', contact: '', title: '', category: 'Arduino Basics', content: '', fileName: '' });
      } else {
        setSubmitStatus('error');
      }

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = "Engineering Skills Center | NHSAST Space";
  }, []);

  const filteredResources = activeCategory === 'All'
    ? resources
    : resources.filter(res => res.category === activeCategory);

  if (selectedArticle) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-2 text-accent-cyan hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Library
          </button>

          <article className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 animate-float-in">
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-bold ${selectedArticle.color}`}>
                {selectedArticle.category}
              </span>
              <span className="text-gray-500 text-sm">•</span>
              <span className="text-gray-400 text-sm">{selectedArticle.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              {selectedArticle.title}
            </h1>

            {selectedArticle.projectImage && (
              <div className="mb-10 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg relative group">
                <img
                  src={selectedArticle.projectImage}
                  alt={selectedArticle.title}
                  className="w-full h-64 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">Project Preview</span>
                </div>
              </div>
            )}

            {selectedArticle.components && (
              <div className="mb-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-accent-cyan mb-4 flex items-center gap-2">
                  <Zap size={18} /> Hardware & Software Required
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedArticle.components.map((comp, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple/70"></span>
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-6">
              {selectedArticle.content.split('\n\n').map((paragraph, i) => (
                <div key={i}>
                  {paragraph.startsWith('```') ? (
                    <pre className="bg-black/30 p-4 rounded-lg text-sm text-green-400 font-mono overflow-x-auto border border-white/10 my-4 shadow-inner">
                      <code>{paragraph.replace(/```[a-z]*\n|```/g, '')}</code>
                    </pre>
                  ) : (
                    <p className="whitespace-pre-line">
                      {paragraph.replace(/`([^`]+)`/g, '<code class="bg-white/10 px-1 py-0.5 rounded text-accent-cyan text-sm">$1</code>').split(/<code.*?>.*?<\/code>/).reduce((acc, part, idx, arr) => {
                        const matches = paragraph.match(/`([^`]+)`/g);
                        if (idx < arr.length - 1 && matches) {
                          const codeContent = matches[idx].replace(/`/g, '');
                          return [...acc, part, <code key={idx} className="bg-white/10 px-1.5 py-0.5 rounded text-accent-cyan font-mono text-base">{codeContent}</code>];
                        }
                        return [...acc, part];
                      }, [] as React.ReactNode[])}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {selectedArticle.videoLinks && (
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Video size={24} className="text-red-500" />
                  Related Video Tutorials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedArticle.videoLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                        <Video size={20} />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-white group-hover:text-accent-cyan transition-colors">{link.title}</h4>
                        <span className="text-xs text-gray-500">Watch on YouTube</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <BookOpen size={18} />
                <span>NHSAST Skills Center Collection</span>
              </div>
              <div className="flex items-center gap-2 text-accent-cyan hover:underline cursor-pointer">
                <Download size={18} />
                <span>Save for Offline Reading</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4 text-accent-purple font-bold tracking-widest uppercase text-sm">
            <Zap size={20} />
            <span>Practical Knowledge Base</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Engineering <span className="text-gradient">Skills Center</span></h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Master the practical arts of engineering through our hands-on guides, mini projects, technical workshops, and skill-building resources dedicated to Robotics, Embedded Systems, and AI.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 border-b border-white/10 no-scrollbar">
          {['All', 'Arduino Basics', 'PCB Design', 'AI', 'Coding'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap border ${activeCategory === category
                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-float-in">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              onClick={() => setSelectedArticle(resource)}
              className="glass-panel p-8 rounded-2xl flex flex-col gap-6 group cursor-pointer hover:border-accent-cyan/30 transition-all hover:scale-[1.02] relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {resource.icon}
              </div>

              <div className="flex items-center justify-between">
                <div className={`p-4 rounded-xl bg-white/5 ${resource.color}`}>
                  {resource.icon}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{resource.type}</span>
                  <span className="text-xs text-gray-600">{resource.readTime}</span>
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent-cyan transition-colors leading-snug">
                  {resource.title}
                </h3>
                <p className="text-gray-400 leading-relaxed line-clamp-3">
                  {resource.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-400">Read Article</span>
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-accent-cyan group-hover:text-black transition-colors">
                  <BookOpen size={16} />
                </div>
              </div>
            </div>
          ))}

          {/* Special Empty Case */}
          {filteredResources.length === 0 && (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-white/5 rounded-3xl">
              <Book className="mx-auto text-gray-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-400 mb-2">More content coming soon</h3>
              <p className="text-gray-500">We are currently drafting new tutorials for {activeCategory}.</p>
            </div>
          )}
        </div>

        {/* Contribution Section */}
        <div className="mt-32">
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <PenTool size={200} />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-4 text-accent-cyan font-bold tracking-widest uppercase text-sm">
                  <Sparkles size={20} />
                  <span>Join the Community</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Write an <span className="text-gradient">Article</span></h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Share your knowledge with the NHSAST community. Submit your technical guides, project showcases, or tutorials, and we'll publish them here with full credits to you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-accent-cyan">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Global Reach</h3>
                      <p className="text-gray-400">Your article will be accessible to all NHSAST students striving for excellence.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-accent-purple">
                      <Code size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Full Attribution</h3>
                      <p className="text-gray-400">Published articles include your name, photo, and links to your LinkedIn or portfolio.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-accent-pink">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Impact</h3>
                      <p className="text-gray-400">Help juniors master complex topics by breaking them down into simple guides.</p>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleContributeSubmit} className="space-y-6 bg-black/20 p-8 rounded-2xl border border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                      placeholder="Jane Doe"
                      value={contribution.name}
                      onChange={e => setContribution({ ...contribution, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Contact Link</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                      placeholder="LinkedIn / Email"
                      value={contribution.contact}
                      onChange={e => setContribution({ ...contribution, contact: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                      value={contribution.category}
                      onChange={e => setContribution({ ...contribution, category: e.target.value })}
                    >
                      {['Arduino Basics', 'PCB Design', 'AI', 'Coding', 'Other'].map(cat => (
                        <option key={cat} value={cat} className="bg-space-900">{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Article Title</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                      placeholder="Introduction to..."
                      value={contribution.title}
                      onChange={e => setContribution({ ...contribution, title: e.target.value })}
                    />
                  </div>
                </div>

                {/* Submission Type Toggle */}
                <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 w-fit">
                  <button
                    type="button"
                    onClick={() => setSubmissionType('text')}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${submissionType === 'text' ? 'bg-accent-cyan text-black shadow-lg shadow-accent-cyan/20' : 'text-gray-400 hover:text-white'}`}
                  >
                    Write Article
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmissionType('pdf')}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${submissionType === 'pdf' ? 'bg-accent-purple text-white shadow-lg shadow-accent-purple/20' : 'text-gray-400 hover:text-white'}`}
                  >
                    Upload PDF
                  </button>
                </div>

                {submissionType === 'text' ? (
                  <div className="animate-float-in">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Content Draft</label>
                    <textarea
                      required={submissionType === 'text'}
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                      placeholder="Write your article content here (Markdown supported)..."
                      value={contribution.content}
                      onChange={e => setContribution({ ...contribution, content: e.target.value })}
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-2 text-right">Markdown formatting is supported.</p>
                  </div>
                ) : (
                  <div className="animate-float-in">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Article Document (PDF)</label>
                    <div className="relative group">
                      <input
                        required={submissionType === 'pdf'}
                        type="file"
                        accept=".pdf"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        onChange={e => {
                          const file = e.target.files?.[0];
                          if (file) setContribution({ ...contribution, fileName: file.name });
                        }}
                      />
                      <div className="w-full bg-white/5 border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center group-hover:border-accent-purple/50 transition-colors">
                        <Download className="text-accent-purple mb-4 group-hover:scale-110 transition-transform" size={40} />
                        <p className="text-white font-bold mb-1">
                          {contribution.fileName || "Click or Drag to Upload PDF"}
                        </p>
                        <p className="text-sm text-gray-500">Maximum file size: 10MB</p>
                      </div>
                    </div>
                    <p className="text-xs text-accent-purple mt-3 font-medium italic">
                      Note: Your file will be securely uploaded to our drive.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 group ${submitStatus === 'success'
                    ? 'bg-green-500'
                    : submitStatus === 'error'
                      ? 'bg-red-500'
                      : 'bg-gradient-to-r from-accent-cyan to-accent-purple hover:opacity-90'
                    }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : submitStatus === 'success' ? (
                    <>
                      <span>Sent Successfully!</span>
                      <Sparkles size={18} />
                    </>
                  ) : submitStatus === 'error' ? (
                    <span>Submission Error</span>
                  ) : (
                    <>
                      <span>Submit for Review</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-center text-sm text-green-400 animate-fade-in">
                    Thank you! Your article has been submitted and saved.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;