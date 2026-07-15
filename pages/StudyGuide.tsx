import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  BookOpen,
  FileText,
  Video,
  PenTool,
  ChevronRight,
  ArrowLeft,
  GraduationCap,
  Calendar,
  Library,
  Cpu,
  Brain,
  Wifi,
  Zap,
  Info,
  Hash,
  Calculator,
  Atom,
  Binary,
  Plane,
  Anchor,
  Crosshair,
  Database,
  Lock,
  TrendingUp,
  Settings,
  Cog,
  Briefcase,
  Radio,
  Globe,
  ExternalLink,
  MessageSquare,
  Heart,
  Menu
} from 'lucide-react';

// Types
import { CycleId, ViewMode, Module, ResourceItem, Semester, CycleData } from '../types';
import { SCHOOL_INTRO, DRIVE_ROOT_URL, studyData } from '../data/studyGuideData';

const StudyGuide: React.FC = () => {
  const location = useLocation();
  const [viewMode, setViewMode] = useState<ViewMode>('prep');
  const [activeSpecialty, setActiveSpecialty] = useState<CycleId | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<Semester | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [activeResourceCategory, setActiveResourceCategory] = useState<'courses' | 'tds' | 'exams' | null>(null);
  const [showAdvice, setShowAdvice] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [grades, setGrades] = useState<Record<string, { td: string; exam: string }>>({});

  // Mobile/Layout Specific State
  const [mobileTab, setMobileTab] = useState<'overview' | 'resources'>('overview');
  const [cycleTab, setCycleTab] = useState<'semesters' | 'advice'>('semesters');
  const [showMobileCalc, setShowMobileCalc] = useState(false);

  // Handle direct navigation from About page
  useEffect(() => {
    if (location.state) {
      if (location.state.mode) {
        setViewMode(location.state.mode);
      }
      if (location.state.specialty) {
        setActiveSpecialty(location.state.specialty);
      }
      // Reset specific selections when navigating from outside
      setSelectedSemester(null);
      setSelectedModule(null);
      setActiveResourceCategory(null);
      setShowMobileCalc(false);
    }
  }, [location]);

  // Reset helpers
  const resetSelection = () => {
    setSelectedSemester(null);
    setSelectedModule(null);
    setActiveResourceCategory(null);
    setShowAdvice(false);
    setShowMobileCalc(false);
    setCycleTab('semesters');
  };

  useEffect(() => {
    document.title = "Study Guides | NHSAST Space - Academic Excellence";
  }, []);

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    setActiveSpecialty(null);
    resetSelection();
  };

  const handleSpecialtySelect = (id: CycleId) => {
    setActiveSpecialty(id);
    resetSelection();
  };

  const handleSemesterClick = (semester: Semester) => {
    setSelectedSemester(semester);
    setSelectedModule(null);
    setActiveResourceCategory(null);
    setShowAdvice(false);
  };

  const handleModuleClick = (module: Module) => {
    setSelectedModule(module);
    setActiveResourceCategory(null);
  };

  // Determine current active data
  const getCurrentCycleData = () => {
    if (viewMode === 'prep') return studyData['prep'];
    if (viewMode === 'specs' && activeSpecialty) return studyData[activeSpecialty];
    return null;
  };

  const activeData = getCurrentCycleData();

  // Shared Grade Calculation Logic
  const updateGrade = (moduleId: string, field: 'td' | 'exam', value: string) => {
    if (value !== '' && !/^\d*\.?\d*$/.test(value)) return;
    setGrades(prev => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        [field]: value
      }
    }));
    setShowResult(false);
  };

  const getAverageColor = (avg: number) => {
    if (avg >= 14) return 'text-green-400';
    if (avg >= 12) return 'text-accent-cyan';
    if (avg >= 10) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getAverageBg = (avg: number) => {
    if (avg >= 14) return 'bg-green-400/10 border-green-400/30';
    if (avg >= 12) return 'bg-accent-cyan/10 border-accent-cyan/30';
    if (avg >= 10) return 'bg-yellow-400/10 border-yellow-400/30';
    return 'bg-red-400/10 border-red-400/30';
  };

  // Calculate average for selectedSemester
  let average: number | null = null;
  let allFilled = false;

  if (selectedSemester) {
    let totalWeighted = 0;
    let totalCoeff = 0;
    allFilled = true;

    selectedSemester.modules.forEach(mod => {
      const g = grades[mod.id];
      const td = g?.td !== undefined && g.td !== '' ? parseFloat(g.td) : NaN;
      const exam = g?.exam !== undefined && g.exam !== '' ? parseFloat(g.exam) : NaN;
      if (isNaN(td) || isNaN(exam)) {
        allFilled = false;
      } else {
        const moduleGrade = td * 0.4 + exam * 0.6;
        totalWeighted += moduleGrade * mod.coeff;
        totalCoeff += mod.coeff;
      }
    });

    if (totalCoeff > 0 && allFilled) {
      average = totalWeighted / totalCoeff;
    }
  }


  // Helper to determine icon based on module name
  const getModuleIcon = (name: string) => {
    const lower = name.toLowerCase();

    // Aeronautical & Unmanned
    if (lower.includes('uav') || lower.includes('flight') || lower.includes('aero') || lower.includes('unmanned')) return <Plane size={24} />;
    if (lower.includes('navigation') || lower.includes('guidance')) return <Crosshair size={24} />;
    if (lower.includes('marine') || lower.includes('hydro')) return <Anchor size={24} />;
    if (lower.includes('propulsion') || lower.includes('vehicle')) return <TrendingUp size={24} />;

    // General Science & Math
    if (lower.includes('math') || lower.includes('analysis') || lower.includes('algebra')) return <Calculator size={24} />;
    if (lower.includes('phys') || lower.includes('mechanics') || lower.includes('optics') || lower.includes('vib')) return <Atom size={24} />;
    if (lower.includes('chem') || lower.includes('thermo')) return <Zap size={24} />;

    // Computing & Electronics
    if (lower.includes('security') || lower.includes('cryptography') || lower.includes('cyber')) return <Lock size={24} />;
    if (lower.includes('ai') || lower.includes('intelligence') || lower.includes('learning')) return <Brain size={24} />;
    if (lower.includes('network') || lower.includes('iot') || lower.includes('wireless') || lower.includes('communication')) return <Wifi size={24} />;
    if (lower.includes('database')) return <Database size={24} />;
    if (lower.includes('antenna') || lower.includes('propagation')) return <Radio size={24} />;

    // Engineering & Robotics
    if (lower.includes('power') || lower.includes('electric') || lower.includes('machines')) return <Zap size={24} />;
    if (lower.includes('control') || lower.includes('robotics') || lower.includes('automation') || lower.includes('actuator')) return <Settings size={24} />;
    if (lower.includes('computing') || lower.includes('processor') || lower.includes('fpga') || lower.includes('gpu') || lower.includes('server')) return <Cpu size={24} />;
    if (lower.includes('program') || lower.includes('algo') || lower.includes('software') || lower.includes('linux') || lower.includes('os')) return <Binary size={24} />;

    return <BookOpen size={24} />;
  };

  // Content Renderers
  const renderSpecialtySelection = () => {
    const specialties: CycleId[] = ['aes', 'rasd', 'usnc'];
    return (
      <div className="animate-float-in space-y-12">
        <div className="glass-panel p-8 rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5">
          <h3 className="text-2xl font-bold mb-4 text-white">Engineering Cycle</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Select your specialty to view the semester curriculum and modules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map(id => {
            const data = studyData[id];
            // Get an icon for the specialty
            let Icon = Cpu;
            if (id === 'rasd') Icon = Cog;
            if (id === 'usnc') Icon = Plane;

            return (
              <div key={id} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all group flex flex-col items-center text-center">
                <div className="p-4 rounded-xl bg-accent-cyan/10 text-accent-cyan mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={48} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {data.label}
                </h3>
                <p className="text-sm text-gray-500 mb-6 flex-grow">
                  {data.description}
                </p>
                <button
                  onClick={() => handleSpecialtySelect(id)}
                  className="w-full px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors flex items-center justify-center gap-2 group-hover:bg-accent-cyan group-hover:text-black"
                >
                  View Curriculum <ChevronRight size={16} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    );
  };
  const renderSemesters = () => {
    if (!activeData) return null;
    return (
      <div className="space-y-12 animate-float-in">
        {selectedSemester || showAdvice ? (
          <div>
            {selectedSemester ? renderModules() : renderAdviceDetail()}
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeData.semesters.map((semester) => (
                <button
                  key={semester.id}
                  onClick={() => handleSemesterClick(semester)}
                  className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-accent-cyan/50 hover:bg-white/5 transition-all group text-left flex flex-col items-start gap-4 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Calendar size={100} />
                  </div>

                  <div className="p-4 rounded-xl bg-accent-cyan/10 text-accent-cyan group-hover:scale-110 transition-transform z-10">
                    <Calendar size={32} />
                  </div>
                  <div className="z-10">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {semester.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                      {semester.modules.length} Modules
                    </p>
                  </div>
                  <div className="mt-auto w-full pt-4 flex justify-end z-10">
                    <ChevronRight className="text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </button>
              ))}
            </div>

            {activeData.advice && (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowAdvice(true)}
                  className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-accent-cyan/50 hover:bg-white/5 transition-all group text-left flex flex-col items-start gap-4 relative overflow-hidden max-w-3xl w-full"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-accent-cyan">
                    <Heart size={100} />
                  </div>

                  <div className="p-4 rounded-xl bg-accent-cyan/10 text-accent-cyan group-hover:scale-110 transition-transform z-10">
                    <Heart size={32} />
                  </div>
                  <div className="z-10">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                      Honest Advice
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">
                      Student honest advices from their experiences, their errors, their successes, to the future students
                    </p>
                  </div>
                  <div className="mt-auto w-full pt-4 flex justify-end z-10">
                    <ChevronRight className="text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderAdviceDetail = () => {
    if (!activeData || !activeData.advice) return null;
    return (
      <div className="animate-float-in">
        <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden bg-accent-cyan/5">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-accent-cyan">
            <Heart size={120} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent-cyan/10">
                <Heart className="text-accent-cyan" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Student's Honest Advice</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeData.advice.map((tip, idx) => {
                const parts = tip.split('\n\n');
                const hasHeader = parts.length > 1;
                const name = hasHeader ? parts[0] : "Expert Tip";
                const content = hasHeader ? parts.slice(1).join('\n\n') : tip;

                return (
                  <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-cyan/30 transition-all flex flex-col gap-6">
                    <div className="flex flex-col items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent-cyan/20 flex items-center justify-center text-accent-cyan text-sm font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <div className="text-accent-cyan font-display font-bold text-xs uppercase tracking-widest opacity-80 pl-1">
                        {name}
                      </div>
                    </div>
                    <div
                      className={`text-gray-300 text-[15px] leading-relaxed whitespace-pre-wrap ${content.length > 100 ? 'font-arabic text-right' : ''}`}
                      dir={content.length > 100 ? 'rtl' : 'ltr'}
                    >
                      {content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderModules = () => {
    if (!selectedSemester) return null;

    const modules = selectedSemester.modules;

    const handleCalculate = () => {
      setShowResult(true);
    };

    return (
      <div className="space-y-10 animate-float-in">
        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => handleModuleClick(module)}
              className="glass-panel p-6 rounded-xl border border-white/5 hover:border-accent-purple/50 hover:bg-white/5 transition-all group text-left flex items-start gap-4 h-full relative overflow-hidden"
            >
              <div className="p-3 rounded-lg bg-accent-purple/10 text-accent-purple shrink-0 mt-1 z-10">
                {getModuleIcon(module.name)}
              </div>
              <div className="z-10 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    {module.code || 'MOD'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors leading-tight">
                  {module.name}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Calculator Section */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
          {/* Calculator Header */}
          <div className="p-6 border-b border-white/10 bg-accent-purple/5">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-accent-purple/10">
                <Calculator className="text-accent-purple" size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Average Calculator</h3>
            </div>
            <p className="text-gray-400 text-sm">Formula: <span className="text-accent-cyan font-mono text-xs">Module = TD×0.4 + Exam×0.6</span> &nbsp;|&nbsp; <span className="text-accent-cyan font-mono text-xs">Average = Σ(Grade × Coeff) / Σ(Coeff)</span></p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider px-6 py-3">Module</th>
                  <th className="text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider px-4 py-3 w-20">Coeff</th>
                  <th className="text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider px-4 py-3 w-24">TD /20</th>
                  <th className="text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider px-4 py-3 w-24">Exam /20</th>
                  <th className="text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider px-4 py-3 w-24">Grade</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((mod, idx) => {
                  const g = grades[mod.id] || { td: '', exam: '' };
                  const td = g.td !== '' ? parseFloat(g.td) : NaN;
                  const exam = g.exam !== '' ? parseFloat(g.exam) : NaN;
                  const moduleGrade = (!isNaN(td) && !isNaN(exam)) ? (td * 0.4 + exam * 0.6) : null;

                  return (
                    <tr key={mod.id} className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${idx % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-md bg-accent-purple/10 text-accent-purple shrink-0">
                            {getModuleIcon(mod.name)}
                          </div>
                          <span className="text-sm font-medium text-white truncate">{mod.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-sm font-bold text-gray-400">{mod.coeff}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <input
                          type="text"
                          inputMode="decimal"
                          value={g.td}
                          onChange={e => updateGrade(mod.id, 'td', e.target.value)}
                          placeholder="--"
                          className="w-16 h-9 rounded-lg bg-black/30 border border-white/10 text-center text-white font-bold text-sm focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all placeholder:text-gray-600 mx-auto"
                        />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <input
                          type="text"
                          inputMode="decimal"
                          value={g.exam}
                          onChange={e => updateGrade(mod.id, 'exam', e.target.value)}
                          placeholder="--"
                          className="w-16 h-9 rounded-lg bg-black/30 border border-white/10 text-center text-white font-bold text-sm focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/20 transition-all placeholder:text-gray-600 mx-auto"
                        />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-sm font-bold ${moduleGrade !== null
                          ? moduleGrade >= 10 ? 'text-green-400' : 'text-red-400'
                          : 'text-gray-600'
                          }`}>
                          {moduleGrade !== null ? moduleGrade.toFixed(2) : '--'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Actions & Result */}
          <div className="p-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex gap-3">
                <button
                  onClick={handleCalculate}
                  disabled={!allFilled}
                  className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${allFilled
                    ? 'bg-accent-purple text-white hover:bg-accent-purple/80 shadow-lg shadow-accent-purple/20'
                    : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5'
                    }`}
                >
                  Calculate Average
                </button>
                <button
                  onClick={() => { setGrades({}); setShowResult(false); }}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all text-sm"
                >
                  Reset
                </button>
              </div>

              {/* Result Display */}
              {showResult && average !== null && (
                <div className={`px-6 py-3 rounded-xl border flex items-center gap-4 ${getAverageBg(average)}`}>
                  <span className="text-sm font-bold text-gray-300">Semester Average:</span>
                  <span className={`text-3xl font-display font-bold ${getAverageColor(average)}`}>
                    {average.toFixed(2)}
                  </span>
                  <span className="text-xs text-gray-500">/ 20</span>
                </div>
              )}
              {showResult && !allFilled && (
                <div className="px-6 py-3 rounded-xl border border-red-400/20 bg-red-400/5 text-red-400 text-sm font-medium">
                  Please fill all TD and Exam fields
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderResources = () => {
    if (!selectedModule) return null;

    const resourceTypes: { id: 'courses' | 'tds' | 'exams'; title: string; icon: React.ReactNode; color: string; desc: string; items?: ResourceItem[] }[] = [
      {
        id: 'courses',
        title: 'Courses',
        icon: <Library size={32} />,
        color: 'text-accent-cyan',
        desc: 'Lecture notes and summaries',
        items: selectedModule.resources?.courses
      },
      {
        id: 'tds',
        title: 'TDs & Exercises',
        icon: <PenTool size={32} />,
        color: 'text-accent-purple',
        desc: 'Tutorial series and practice problems',
        items: selectedModule.resources?.tds
      },
      {
        id: 'exams',
        title: 'Exams',
        icon: <FileText size={32} />,
        color: 'text-accent-pink',
        desc: 'Previous exams and corrections',
        items: selectedModule.resources?.exams
      }
    ];

    // If a category is selected, show the list of items
    if (activeResourceCategory) {
      const category = resourceTypes.find(t => t.id === activeResourceCategory);
      if (!category) return null;

      const items = category.items || [];

      return (
        <div className="animate-float-in space-y-6">
          <button
            onClick={() => setActiveResourceCategory(null)}
            className="flex items-center gap-2 text-accent-cyan hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} /> Back to Categories
          </button>

          <div className="glass-panel p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-4 rounded-full bg-white/5 ${category.color}`}>
                {category.icon}
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-white">{category.title}</h3>
                <p className="text-gray-400">{selectedModule.name}</p>
              </div>
            </div>

            {items.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent-cyan/30 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-black/30 text-gray-400 group-hover:text-white transition-colors">
                        <FileText size={20} />
                      </div>
                      <span className="font-bold text-lg text-gray-200 group-hover:text-white transition-colors">{item.title}</span>
                    </div>
                    <ExternalLink size={18} className="text-gray-500 group-hover:text-accent-cyan transition-colors" />
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-gray-500 border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.02]">
                <div className="w-16 h-16 rounded-full bg-accent-cyan/10 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="text-accent-cyan animate-pulse" size={32} />
                </div>
                <h4 className="text-2xl font-display font-bold text-white mb-2">Coming Soon</h4>
                <p className="text-gray-400 max-w-sm mx-auto"> Our academic team is currently curating the most relevant courses and TDs for this module.</p>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Default view: Categories
    return (
      <div className="space-y-8 animate-float-in">
        <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            {getModuleIcon(selectedModule.name)}
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">{selectedModule.name}</h2>
              {selectedModule.objectives && (
                <p className="text-gray-400 max-w-2xl">{selectedModule.objectives}</p>
              )}
            </div>
            <div className="flex gap-4 shrink-0">
              <div className="px-4 py-2 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple flex flex-col items-center justify-center min-w-[100px]">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">Coefficient</span>
                <span className="text-2xl font-display font-bold">{selectedModule.coeff}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resourceTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveResourceCategory(type.id)}
              className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-white/20 transition-all opacity-80 hover:opacity-100 group hover:bg-white/5"
            >
              <div className={`p-4 rounded-full bg-white/5 ${type.color} mb-2 group-hover:scale-110 transition-transform`}>
                {type.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">{type.title}</h3>
              <p className="text-gray-400">{type.desc}</p>
              <div className="mt-4 px-6 py-2 rounded-full border border-white/10 text-sm font-medium text-white/70 bg-black/20 flex items-center gap-2 group-hover:bg-accent-cyan group-hover:text-black hover:border-accent-cyan transition-all">
                <BookOpen size={16} />
                View Content
              </div>
            </button>
          ))}

          <a
            href={DRIVE_ROOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-white/20 transition-all opacity-80 hover:opacity-100 group hover:bg-white/5"
          >
            <div className="p-4 rounded-full bg-white/5 text-green-400 mb-2 group-hover:scale-110 transition-transform">
              <Video size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-green-400 transition-colors">Additional</h3>
            <p className="text-gray-400">External resources and videos</p>
            <div className="mt-4 px-6 py-2 rounded-full border border-white/10 text-sm font-medium text-white/70 bg-black/20 flex items-center gap-2 group-hover:bg-green-400 group-hover:text-black group-hover:border-green-400 transition-all">
              <ExternalLink size={16} />
              Open Drive
            </div>
          </a>
        </div>
      </div>
    );
  };

  const renderMobileView = () => {
    const activeHeaderTitle = showMobileCalc
      ? 'Grade Calculator'
      : selectedModule
        ? selectedModule.name
        : showAdvice
          ? 'Student Advice'
          : selectedSemester
            ? selectedSemester.title
            : viewMode === 'prep'
              ? 'Preparatory Cycle'
              : activeSpecialty
                ? studyData[activeSpecialty].label
                : 'Engineering Specialties';

    return (
      <div className="pb-28 pt-24 min-h-screen bg-transparent px-4 relative overflow-x-hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between shadow-lg shadow-black/40">
          <div className="flex items-center gap-3 overflow-hidden">
            {(selectedSemester || selectedModule || showAdvice || showMobileCalc || (viewMode === 'specs' && activeSpecialty)) ? (
              <button
                onClick={() => {
                  if (showMobileCalc) setShowMobileCalc(false);
                  else if (selectedModule) setSelectedModule(null);
                  else if (showAdvice || cycleTab === 'advice') { setShowAdvice(false); setCycleTab('semesters'); }
                  else if (selectedSemester) setSelectedSemester(null);
                  else if (activeSpecialty) setActiveSpecialty(null);
                }}
                className="p-2 -ml-2 rounded-full hover:bg-white/10 active:scale-90 transition-all text-gray-300"
              >
                <ArrowLeft size={20} />
              </button>
            ) : (
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-mobile-menu'))}
                className="p-2 -ml-2 rounded-full hover:bg-white/10 active:scale-90 transition-all text-gray-300"
              >
                <Menu size={24} />
              </button>
            )}
            <h1 className="text-lg font-bold text-white truncate font-display tracking-tight">
              {activeHeaderTitle}
            </h1>
          </div>
          {/* <button className="p-2 rounded-full bg-white/5 text-gray-400">
            <Search size={20} />
          </button> */}
        </div>

        {/* Main Content Area */}
        <div className="animate-float-in">
          {/* Level 1: Mode Selection (Hidden if navigated deeper) */}
          {!selectedSemester && !activeSpecialty && viewMode === 'specs' && !showAdvice && !showMobileCalc && (
            <div className="grid grid-cols-1 gap-4">
              {['aes', 'rasd', 'usnc'].map((id) => {
                const s = studyData[id as CycleId];
                let Icon = Cpu;
                if (id === 'rasd') Icon = Cog;
                if (id === 'usnc') Icon = Plane;
                return (
                  <button key={id} onClick={() => handleSpecialtySelect(id as CycleId)} className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-accent-cyan/50 active:scale-[0.98] transition-all text-left">
                    <div className={`p-4 rounded-xl bg-${s.id === 'aes' ? 'accent-cyan' : s.id === 'rasd' ? 'accent-purple' : 'accent-pink'}/10 text-${s.id === 'aes' ? 'accent-cyan' : s.id === 'rasd' ? 'accent-purple' : 'accent-pink'}`}>
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{s.label}</h3>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{s.description}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          )}

          {/* Level 2: Section (Semesters / Advice) */}
          {!selectedSemester && (viewMode === 'prep' || activeSpecialty) && activeData && !showMobileCalc && (
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">{activeData.label}</h2>
                <p className="text-sm text-gray-400">{activeData.description}</p>
              </div>

              {/* Cycle Tabs Mobile */}
              <div className="flex p-1.5 bg-black/40 rounded-2xl border border-white/10 mb-8 backdrop-blur-md relative">
                {/* Sliding Indicator */}
                <div
                  className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-accent-cyan rounded-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_15px_rgba(13,204,242,0.3)] ${cycleTab === 'semesters' ? 'left-1.5' : 'left-[calc(50%+3px)]'
                    }`}
                />

                <button
                  onClick={() => { setCycleTab('semesters'); setShowAdvice(false); }}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl transition-colors relative z-10 ${cycleTab === 'semesters' ? 'text-black' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  Semesters
                </button>
                <button
                  onClick={() => { setCycleTab('advice'); setShowAdvice(true); }}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl transition-colors relative z-10 ${cycleTab === 'advice' ? 'text-black' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  Expert Advice
                </button>
              </div>

              {cycleTab === 'semesters' ? (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest px-1">Choose Semester</h3>
                  {activeData.semesters.map(sem => (
                    <button
                      key={sem.id}
                      onClick={() => handleSemesterClick(sem)}
                      className="w-full glass-panel p-5 rounded-2xl border border-white/5 hover:border-accent-purple/40 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-between group active:scale-[0.98] transition-all relative overflow-hidden shadow-lg shadow-black/20"
                    >
                      <div className="absolute inset-0 bg-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="p-3.5 rounded-xl bg-white/5 text-gray-300 group-hover:text-accent-purple group-hover:bg-accent-purple/10 transition-colors">
                          <Calendar size={22} />
                        </div>
                        <div className="text-left">
                          <span className="block text-lg font-bold text-white group-hover:text-accent-purple transition-colors">{sem.title}</span>
                          <span className="text-xs text-gray-500 font-medium tracking-wide">{sem.modules.length} Modules</span>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-gray-600 group-hover:text-accent-purple group-hover:translate-x-1 transition-all relative z-10" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {(activeData.advice || []).map((tip, idx) => {
                    const parts = tip.split('\n\n');
                    const hasHeader = parts.length > 1;
                    const name = hasHeader ? parts[0] : "Senior Tip";
                    const content = hasHeader ? parts.slice(1).join('\n\n') : tip;
                    return (
                      <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-accent-cyan/20 flex items-center justify-center text-accent-cyan text-xs font-bold">
                            {idx + 1}
                          </div>
                          <span className="font-bold text-accent-cyan text-sm">{name}</span>
                        </div>
                        <p className={`text-gray-300 text-sm leading-relaxed whitespace-pre-wrap ${content.length > 100 ? 'text-right font-arabic' : ''}`} dir={content.length > 100 ? 'rtl' : 'ltr'}>
                          {content}
                        </p>
                      </div>
                    )
                  })}
                  {(!activeData.advice || activeData.advice.length === 0) && (
                    <div className="py-20 text-center glass-panel rounded-2xl border border-white/5 border-dashed">
                      <Heart size={48} className="mx-auto text-gray-700 mb-4 opacity-20" />
                      <p className="text-gray-500 italic text-sm">Advice for this section is coming soon!</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Level 3: Modules List */}
          {selectedSemester && !selectedModule && !showMobileCalc && (
            <div className="grid grid-cols-1 gap-3">
              {selectedSemester.modules.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => handleModuleClick(mod)}
                  className="glass-panel p-5 rounded-xl border border-white/5 flex items-center gap-4 active:scale-[0.98] transition-all text-left"
                >
                  <div className="p-3 rounded-lg bg-accent-purple/10 text-accent-purple shrink-0">
                    {getModuleIcon(mod.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white truncate">{mod.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold bg-white/10 px-1.5 py-0.5 rounded text-gray-400">{mod.code || 'MOD'}</span>
                      <span className="text-[10px] text-gray-500">Coeff: {mod.coeff}</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-600" />
                </button>
              ))}

              {/* Quick Average Calc Button */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-transparent border border-accent-purple/30 text-center">
                <Calculator className="mx-auto text-accent-purple mb-3" size={32} />
                <h3 className="text-lg font-bold text-white mb-1">Calculate Average</h3>
                <p className="text-xs text-gray-400 mb-4">Quickly check your semester performance</p>
                <button
                  onClick={() => setShowMobileCalc(true)}
                  className="px-6 py-3 rounded-lg bg-accent-purple text-white text-sm font-bold shadow-lg shadow-accent-purple/20 active:scale-95 transition-all"
                >
                  Open Calculator
                </button>
                <p className="text-[10px] text-gray-500 mt-2">Enter grades to calculate instantly</p>
              </div>
            </div>
          )}

          {/* Mobile Calculator Overlay */}
          {showMobileCalc && selectedSemester && (
            <div className="space-y-6">
              <div className="glass-panel p-5 rounded-xl border border-white/5 bg-accent-purple/5 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-white">Semester Average</h3>
                  {average !== null && (
                    <span className={`text-2xl font-bold ${getAverageColor(average)}`}>{average.toFixed(2)}</span>
                  )}
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full custom-progress-bar rounded-full ${average && average >= 10 ? 'bg-green-500' : 'bg-red-500'} transition-all duration-500`}
                    style={{ width: `${Math.min((average || 0) / 20 * 100, 100)}%` }}
                  />
                </div>
                <p className="text-[10px] text-gray-400 mt-2 text-center">
                  {allFilled ? 'Calculation Complete' : 'Fill all grades to see result'}
                </p>
              </div>

              <div className="space-y-3">
                {selectedSemester.modules.map((mod) => {
                  const g = grades[mod.id] || { td: '', exam: '' };
                  const modGrade = (!isNaN(parseFloat(g.td)) && !isNaN(parseFloat(g.exam)))
                    ? (parseFloat(g.td) * 0.4 + parseFloat(g.exam) * 0.6)
                    : null;

                  return (
                    <div key={mod.id} className="glass-panel p-4 rounded-xl border border-white/5">
                      <div className="flex justify-between items-start mb-3">
                        <span className="font-bold text-white text-sm truncate max-w-[70%]">{mod.name}</span>
                        <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-gray-400">Coeff: {mod.coeff}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-3 items-end">
                        <div>
                          <label className="block text-[10px] text-gray-500 mb-1">TD</label>
                          <input
                            type="number"
                            inputMode="decimal"
                            value={g.td}
                            onChange={e => updateGrade(mod.id, 'td', e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-center text-white text-sm font-bold focus:border-accent-cyan focus:bg-accent-cyan/5 focus:outline-none transition-all placeholder:text-gray-700"
                            placeholder="--"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-gray-500 mb-1">Exam</label>
                          <input
                            type="number"
                            inputMode="decimal"
                            value={g.exam}
                            onChange={e => updateGrade(mod.id, 'exam', e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-center text-white text-sm font-bold focus:border-accent-purple focus:bg-accent-purple/5 focus:outline-none transition-all placeholder:text-gray-700"
                            placeholder="--"
                          />
                        </div>
                        <div className="text-right">
                          <span className="block text-[10px] text-gray-500 mb-1">Grade</span>
                          <span className={`block text-lg font-bold ${modGrade !== null ? (modGrade >= 10 ? 'text-green-400' : 'text-red-400') : 'text-gray-600'}`}>
                            {modGrade !== null ? modGrade.toFixed(2) : '--'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="h-8" />
            </div>
          )}


          {/* Level 4: Module Detail */}
          {selectedModule && !showMobileCalc && (
            <div className="space-y-6">
              {/* Tabs */}
              <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 mb-6">
                {(['overview', 'resources'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setMobileTab(tab)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all capitalize active:scale-95 ${mobileTab === tab ? 'bg-white/10 text-white shadow-sm' : 'text-gray-500'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {mobileTab === 'overview' && (
                <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-full bg-accent-cyan/10 text-accent-cyan">
                      {getModuleIcon(selectedModule.name)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Module</span>
                      <h2 className="text-xl font-bold text-white leading-tight">{selectedModule.name}</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-white">{selectedModule.coeff}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest">Coeff</span>
                    </div>
                    <div className="text-center border-l border-white/5">
                      <span className="block text-2xl font-bold text-white">{selectedModule.credits}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest">Credits</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-white">Objectives</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {selectedModule.objectives || 'No detailed objectives available for this module yet.'}
                    </p>
                  </div>
                </div>
              )}

              {mobileTab === 'resources' && (
                <div className="space-y-4">
                  {['courses', 'tds', 'exams'].map(type => {
                    const items = selectedModule.resources?.[type as keyof typeof selectedModule.resources];
                    const icons = { courses: Library, tds: PenTool, exams: FileText };
                    const Icon = icons[type as keyof typeof icons];
                    return (
                      <div key={type} className="glass-panel p-5 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3 mb-4">
                          <Icon size={18} className="text-accent-cyan" />
                          <h3 className="font-bold text-white capitalize">{type}</h3>
                          <span className="text-xs text-gray-500 ml-auto">{items?.length || 0} items</span>
                        </div>
                        {items && items.length > 0 ? (
                          <div className="space-y-2">
                            {items.map((item, i) => (
                              <a key={i} href={item.link} target="_blank" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-gray-300">
                                <span className="truncate pr-4">{item.title}</span>
                                <ExternalLink size={12} className="shrink-0" />
                              </a>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-gray-600 italic">No resources available yet.</p>
                        )}
                      </div>
                    )
                  })}
                  <a href={DRIVE_ROOT_URL} target="_blank" className="block p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center text-green-400 text-sm font-bold">
                    Open Google Drive Folder
                  </a>
                </div>
              )}


            </div>
          )}
        </div>

        {/* Floating Dock */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[340px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center justify-between p-2.5 px-6 z-50">
          <button
            onClick={() => { setViewMode('prep'); handleViewModeChange('prep'); setShowAdvice(false); setShowMobileCalc(false); setCycleTab('semesters'); }}
            className={`p-3 rounded-full transition-all active:scale-75 ${viewMode === 'prep' ? 'bg-accent-cyan text-black' : 'text-gray-400 hover:text-white'}`}
          >
            <BookOpen size={20} />
          </button>

          <div className="w-px h-6 bg-white/10"></div>

          <button
            onClick={() => { setViewMode('specs'); handleViewModeChange('specs'); setShowAdvice(false); setShowMobileCalc(false); setCycleTab('semesters'); }}
            className={`p-3 rounded-full transition-all active:scale-75 ${viewMode === 'specs' ? 'bg-accent-cyan text-black' : 'text-gray-400 hover:text-white'}`}
          >
            <Cpu size={20} />
          </button>

          <div className="w-px h-6 bg-white/10"></div>

          <button
            onClick={() => {
              if (selectedSemester) setShowMobileCalc(true);
              else {
                // Optional: Feedback if no semester selected
              }
            }}
            className={`p-3 rounded-full transition-all active:scale-75 ${showMobileCalc ? 'bg-accent-purple text-white shadow-lg shadow-accent-purple/30' : 'text-gray-400 hover:text-white'}`}
          >
            <Calculator size={20} />
          </button>
        </div>
      </div >
    );
  };

  return (
    <>
      {/* Desktop View (Touched Only to Hide on Mobile) */}
      <div className="hidden md:block pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent-purple/10 rounded-lg">
                <GraduationCap className="text-accent-purple" size={24} />
              </div>
              <span className="text-accent-purple font-bold tracking-wider uppercase text-sm">Academic Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">NHSAST <span className="text-gradient">Study Guide</span></h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Comprehensive curriculum resources for the Autonomous Systems specialties.
            </p>
          </div>

          {/* Top Level Navigation Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-white/10 pb-1">
            <button
              onClick={() => handleViewModeChange('prep')}
              className={`px-6 py-3 rounded-t-lg font-medium transition-all relative ${viewMode === 'prep'
                ? 'text-white bg-white/5 border-t border-x border-white/10'
                : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
            >
              Preparatory Cycle
              {viewMode === 'prep' && <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-space-900" />}
            </button>
            <button
              onClick={() => handleViewModeChange('specs')}
              className={`px-6 py-3 rounded-t-lg font-medium transition-all relative ${viewMode === 'specs'
                ? 'text-white bg-white/5 border-t border-x border-white/10'
                : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
            >
              Specialties
              {viewMode === 'specs' && <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-space-900" />}
            </button>
          </div>

          {/* Navigation Breadcrumbs & Controls */}
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center flex-wrap gap-2 text-sm bg-white/5 p-4 rounded-lg border border-white/10">
              <button
                onClick={() => {
                  if (viewMode === 'specs') {
                    setActiveSpecialty(null);
                  }
                  resetSelection();
                }}
                className={`hover:text-accent-cyan transition-colors ${(viewMode === 'prep' && !selectedSemester && !showAdvice) || (viewMode === 'specs' && !activeSpecialty && !showAdvice)
                  ? 'text-accent-cyan font-bold'
                  : 'text-gray-400'
                  }`}
              >
                {viewMode === 'prep' ? 'Preparatory Cycle' : 'Specialties'}
              </button>

              {viewMode === 'specs' && activeSpecialty && (
                <>
                  <ChevronRight size={14} className="text-gray-600" />
                  <button
                    onClick={() => resetSelection()}
                    className={`hover:text-accent-cyan transition-colors ${(!selectedSemester && !showAdvice) ? 'text-accent-cyan font-bold' : 'text-gray-400'}`}
                  >
                    {studyData[activeSpecialty].label}
                  </button>
                </>
              )}

              {selectedSemester && (
                <>
                  <ChevronRight size={14} className="text-gray-600" />
                  <button
                    onClick={() => setSelectedModule(null)}
                    className={`hover:text-accent-cyan transition-colors ${!selectedModule ? 'text-accent-cyan font-bold' : 'text-gray-400'}`}
                  >
                    {selectedSemester.title}
                  </button>
                </>
              )}

              {showAdvice && (
                <>
                  <ChevronRight size={14} className="text-gray-600" />
                  <span className="text-accent-cyan font-bold">
                    Honest Advice
                  </span>
                </>
              )}


              {selectedModule && (
                <>
                  <ChevronRight size={14} className="text-gray-600" />
                  <span className="text-accent-cyan font-bold truncate max-w-[200px]">
                    {selectedModule.name}
                  </span>
                </>
              )}
            </div>

            {/* Back Buttons for Mobile/Convenience */}
            {(selectedSemester || selectedModule || showAdvice || (viewMode === 'specs' && activeSpecialty)) && (
              <button
                onClick={() => {
                  if (selectedModule) {
                    setSelectedModule(null);
                  } else if (selectedSemester) {
                    setSelectedSemester(null);
                  } else if (showAdvice) {
                    setShowAdvice(false);
                  } else if (activeSpecialty) {
                    setActiveSpecialty(null);
                  }
                }}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                  <ArrowLeft size={16} />
                </div>
                <span>Back</span>
              </button>
            )}
          </div>

          {/* Main Interface Content */}
          {viewMode === 'specs' && !activeSpecialty ? (
            renderSpecialtySelection()
          ) : !selectedSemester ? (
            <>
              {/* Optional header for the cycle/specialty */}
              {(activeData) && (
                <div className="mb-8 animate-float-in">
                  <h2 className="text-2xl font-bold mb-2">{activeData.label}</h2>
                  <p className="text-gray-400">{activeData.description}</p>
                </div>
              )}
              {renderSemesters()}
            </>
          ) : !selectedModule ? (
            renderModules()
          ) : (
            renderResources()
          )}
        </div>
      </div>

      {/* Mobile View (New Stitch Design) */}
      <div className="block md:hidden">
        {renderMobileView()}
      </div>
    </>
  );
};

export default StudyGuide;