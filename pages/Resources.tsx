import React, { useEffect } from 'react';
import { Book, Video, Link as LinkIcon, Download } from 'lucide-react';

const Resources: React.FC = () => {
  useEffect(() => {
    document.title = "Learning Hub | NHSAST Space - Technical Resources";
  }, []);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Learning <span className="text-gradient">Hub</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Access our curated collection of articles, videos, and tools designed to help you master space science concepts.
          </p>
        </div>

        {/* Placeholder Filter Tabs */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 border-b border-white/10">
          {['All', 'Arduino Basics', 'PCB Design', 'AI', 'Coding'].map((tab, i) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${i === 0 ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Empty State / Placeholders as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="glass-panel p-6 rounded-xl flex flex-col gap-4 group cursor-pointer hover:bg-white/5 transition-colors">
              <div className="h-40 w-full bg-white/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Book className="text-gray-600 group-hover:text-accent-cyan transition-colors" size={32} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-accent-cyan uppercase tracking-wider">Article</span>
                  <span className="text-gray-600 text-xs">•</span>
                  <span className="text-xs text-gray-500">5 min read</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent-cyan transition-colors">Resource Title Placeholder {item}</h3>
                <p className="text-sm text-gray-400">Brief description of the resource content goes here. This is waiting for actual data.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;