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
  Globe
} from 'lucide-react';

// Types
type CycleId = 'prep' | 'aes' | 'rasd' | 'usnc';
type ViewMode = 'prep' | 'specs';

interface Module {
  id: string;
  name: string;
  code?: string;
  coeff: number; // Kept in interface but not rendered
  credits: number; // Kept in interface but not rendered
  objectives?: string;
  icon?: React.ReactNode;
}

interface Semester {
  id: string;
  title: string;
  modules: Module[];
}

interface CycleData {
  id: CycleId;
  label: string;
  description: string;
  semesters: Semester[];
}

const SCHOOL_INTRO = "Autonomous systems represent the pinnacle of modern engineering—machines capable of sensing, thinking, and acting without direct human intervention. From self-driving cars to interplanetary rovers, this field is reshaping our world. NHSAST is committed to training the elite engineers who will drive this revolution. Our curriculum is rigorously designed to bridge the gap between abstract mathematical theory and real-world application, fostering a deep understanding of the complex interplay between hardware, software, and physical dynamics.";

// Data Definition based on NHSAST Program PDF & Standard CP
const studyData: Record<CycleId, CycleData> = {
  prep: {
    id: 'prep',
    label: 'Preparatory Cycle',
    description: 'Foundational sciences and engineering basics (CP1 & CP2)',
    semesters: [
      {
        id: 's1',
        title: 'Semester 1 (CP1)',
        modules: [
          {
            id: 'math1', name: 'Analysis 1', code: 'MATH1', coeff: 5, credits: 5,
            objectives: 'Real numbers, sequences, limits, continuity, differentiability, and expansion formulations.'
          },
          {
            id: 'alg1', name: 'Algebra 1', code: 'MATH2', coeff: 4, credits: 4,
            objectives: 'Logic, sets, maps, algebraic structures (groups, rings, fields), polynomials, and rational fractions.'
          },
          {
            id: 'stat1', name: 'Probability and Statistics', code: 'STAT1', coeff: 4, credits: 4,
            objectives: 'Descriptive statistics, probability spaces, conditional probability, and random variables.'
          },
          {
            id: 'phys1', name: 'Physics 1 (Mechanics)', code: 'PHYS1', coeff: 5, credits: 5,
            objectives: 'Kinematics, dynamics of point masses, work, energy, and momentum conservation laws.'
          },
          {
            id: 'chem1', name: 'Chemistry 1', code: 'CHEM1', coeff: 4, credits: 4,
            objectives: 'Structure of matter, atomistic theory, periodic table, chemical bonding, and molecular structure.'
          },
          {
            id: 'info1', name: 'Introduction to Programming', code: 'INFO1', coeff: 4, credits: 4,
            objectives: 'Introduction to algorithmic thinking, variables, loops, arrays, and basic programming logic.'
          },
          {
            id: 'tech1', name: 'Technical Drawing', code: 'TECH1', coeff: 1, credits: 1,
            objectives: 'Fundamentals of technical drawing, projections, and standard engineering representations.'
          },
          {
            id: 'foss', name: 'Free and Open-Source Software', code: 'FOSS', coeff: 1, credits: 1,
            objectives: 'Introduction to FOSS philosophy, licensing, and usage of open-source tools in engineering.'
          },
          {
            id: 'hist1', name: 'History of Algeria 1', code: 'HIST1', coeff: 1, credits: 1,
            objectives: 'Historical context and key events in the history of Algeria.'
          },
          {
            id: 'eng1', name: 'English 1', code: 'LANG1', coeff: 1, credits: 1,
            objectives: 'Technical English vocabulary, reading comprehension of scientific texts, and basic communication skills.'
          },
        ]
      },
      {
        id: 's2',
        title: 'Semester 2 (CP1)',
        modules: [
          {
            id: 'math2', name: 'Analysis 2', code: 'MATH3', coeff: 5, credits: 5,
            objectives: 'Integration (Riemann), differential equations, and functions of several variables.'
          },
          {
            id: 'alg2', name: 'Algebra 2', code: 'MATH4', coeff: 4, credits: 4,
            objectives: 'Vector spaces, linear maps, matrices, determinants, and systems of linear equations.'
          },
          {
            id: 'prob2', name: 'Probability', code: 'PROB', coeff: 4, credits: 4,
            objectives: 'Advanced probability concepts, distributions, and applications in engineering contexts.'
          },
          {
            id: 'phys2', name: 'Physics 2 (Electricity)', code: 'PHYS2', coeff: 5, credits: 5,
            objectives: 'Electrostatics, magnetostatics, DC circuits, Kirchhoff laws, and introductory electromagnetism.'
          },
          {
            id: 'chem2', name: 'Chemistry 2', code: 'CHEM2', coeff: 4, credits: 4,
            objectives: 'Thermodynamics, first and second laws, entropy, enthalpy, and chemical equilibrium.'
          },
          {
            id: 'info2', name: 'Algorithms and Data Structures', code: 'INFO2', coeff: 4, credits: 4,
            objectives: 'Advanced data structures (lists, stacks, queues), recursion, and algorithm efficiency.'
          },
          {
            id: 'cad', name: 'Computer Aided Design', code: 'CAD', coeff: 1, credits: 1,
            objectives: 'Introduction to CAD software tools for engineering design and modeling.'
          },
          {
            id: 'linux', name: 'Linux OS Fundamentals', code: 'LINUX', coeff: 1, credits: 1,
            objectives: 'Basics of the Linux operating system, command line interface, and file system management.'
          },
          {
            id: 'hist2', name: 'History of Algeria 2', code: 'HIST2', coeff: 1, credits: 1,
            objectives: 'Continuation of historical studies regarding Algeria.'
          },
          {
            id: 'eng2', name: 'English 2', code: 'LANG2', coeff: 1, credits: 1,
            objectives: 'Advanced technical English, report writing, and professional communication.'
          },
        ]
      },
      {
        id: 's3',
        title: 'Semester 3 (CP2)',
        modules: [
          {
            id: 'math3', name: 'Analysis 3', code: 'MATH5', coeff: 3, credits: 3,
            objectives: 'Series (numerical and function), power series, and Fourier series.'
          },
          {
            id: 'num1', name: 'Numerical Analysis 1', code: 'NUM1', coeff: 3, credits: 3,
            objectives: 'Numerical methods for root finding, linear systems, and error analysis.'
          },
          {
            id: 'phys3', name: 'Physics 3', code: 'PHYS3', coeff: 4, credits: 4,
            objectives: 'Vibrations and Waves: Mechanical and electrical oscillations, damped/forced vibrations.'
          },
          {
            id: 'chem3', name: 'Chemistry 3', code: 'CHEM3', coeff: 3, credits: 3,
            objectives: 'Chemical kinetics, electrochemistry, and advanced solution chemistry.'
          },
          {
            id: 'mrb1', name: 'Mechanics of Rigid Bodies 1', code: 'MECH1', coeff: 3, credits: 3,
            objectives: 'Kinematics and dynamics of rigid bodies, moments of inertia, and static equilibrium.'
          },
          {
            id: 'elec1', name: 'General Electricity', code: 'ELEC1', coeff: 4, credits: 4,
            objectives: 'AC circuits, resonance, filters, and network theorems in frequency domain.'
          },
          {
            id: 'fluid', name: 'Fluid Mechanics', code: 'FLUID', coeff: 3, credits: 3,
            objectives: 'Properties of fluids, fluid statics, fluid dynamics, continuity and Bernoulli equations.'
          },
          {
            id: 'algo3', name: 'Adv. Data Structures & Algo', code: 'INFO3', coeff: 3, credits: 3,
            objectives: 'Trees, graphs, hashing, advanced sorting algorithms, and complexity analysis.'
          },
          {
            id: 'dig1', name: 'Digital Logic & Comb. Circuits', code: 'DIG1', coeff: 3, credits: 3,
            objectives: 'Boolean algebra, logic gates, minimization techniques, and combinational circuit design.'
          },
          {
            id: 'pat1', name: 'Patriotism and Citizenship 1', code: 'CIV1', coeff: 1, credits: 1,
            objectives: 'Concepts of citizenship, national identity, and civic responsibilities.'
          },
        ]
      },
      {
        id: 's4',
        title: 'Semester 4 (CP2)',
        modules: [
          {
            id: 'math4', name: 'Analysis 4', code: 'MATH6', coeff: 3, credits: 3,
            objectives: 'Complex analysis, holomorphic functions, residues, and integral transforms (Laplace/Fourier).'
          },
          {
            id: 'num2', name: 'Numerical Analysis 2', code: 'NUM2', coeff: 3, credits: 3,
            objectives: 'Numerical integration, differentiation, and solving differential equations numerically.'
          },
          {
            id: 'phys4', name: 'Physics 4', code: 'PHYS4', coeff: 4, credits: 4,
            objectives: 'Modern Physics and Optics: Quantum concepts, geometrical and wave optics.'
          },
          {
            id: 'chem4', name: 'Chemistry 4', code: 'CHEM4', coeff: 3, credits: 3,
            objectives: 'Organic chemistry fundamentals or specialized chemistry topics for engineering.'
          },
          {
            id: 'mrb2', name: 'Mechanics of Rigid Bodies 2', code: 'MECH2', coeff: 3, credits: 3,
            objectives: 'Advanced dynamics, gyroscopic motion, and lagrangian mechanics fundamentals.'
          },
          {
            id: 'elec2', name: 'General Electronics', code: 'ELEC2', coeff: 4, credits: 4,
            objectives: 'Diodes, transistors (BJT/FET), amplifiers, and operational amplifier applications.'
          },
          {
            id: 'som', name: 'Strength of Materials', code: 'RDM', coeff: 3, credits: 3,
            objectives: 'Stress, strain, torsion, bending, and deflection of beams.'
          },
          {
            id: 'oop', name: 'Object-Oriented Programming', code: 'OOP', coeff: 3, credits: 3,
            objectives: 'OOP principles: encapsulation, inheritance, polymorphism using Java or C++.'
          },
          {
            id: 'dig2', name: 'Digital Sys. & Seq. Circuits', code: 'DIG2', coeff: 3, credits: 3,
            objectives: 'Latches, flip-flops, counters, registers, and sequential state machine design.'
          },
          {
            id: 'pat2', name: 'Patriotism and Citizenship 2', code: 'CIV2', coeff: 1, credits: 1,
            objectives: 'Advanced topics in civic engagement, ethics, and national institutions.'
          },
        ]
      }
    ]
  },
  aes: {
    id: 'aes',
    label: 'Autonomous Embedded Systems',
    description: 'Design robust embedded systems for autonomous operation, focusing on firmware, sensors, and real-time processing.',
    semesters: [
      {
        id: 'aes_s1',
        title: 'Semester 1 (S5)',
        modules: [
          { id: 'fe', name: 'Fundamental Electronics', coeff: 4, credits: 4 },
          { id: 'is', name: 'Instrumentation and Sensors', coeff: 4, credits: 4 },
          { id: 'mp', name: 'Microprocessors', coeff: 4, credits: 4 },
          { id: 'isp', name: 'Introduction to Signal Processing', coeff: 3, credits: 3 },
          { id: 'ose', name: 'Operating Systems Essentials', coeff: 3, credits: 3 },
          { id: 'netf', name: 'Networking Fundamentals', coeff: 3, credits: 3 },
          { id: 'iai', name: 'Introduction to Artificial Intelligence', coeff: 3, credits: 3 },
          { id: 'db', name: 'Database Essentials for Embedded Systems', coeff: 3, credits: 3 },
          { id: 'pcb', name: 'Reverse Engineering & PCB Design', coeff: 2, credits: 2 },
          { id: 'ees', name: 'Engineering Ethics and Safety', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'aes_s2',
        title: 'Semester 2 (S6)',
        modules: [
          { id: 'ef', name: 'Electronics Functions', coeff: 3, credits: 3 },
          { id: 'mc', name: 'Microcontrollers', coeff: 3, credits: 3 },
          { id: 'asa', name: 'Advanced Sensors and Actuators', coeff: 3, credits: 3 },
          { id: 'spe', name: 'Stochastic Processes and Estimation', coeff: 3, credits: 3 },
          { id: 'osp', name: 'Operating Systems for Programmers', coeff: 3, credits: 3 },
          { id: 'anet', name: 'Advanced Networking', coeff: 3, credits: 3 },
          { id: 'cs', name: 'Control Systems', coeff: 3, credits: 3 },
          { id: 'ml', name: 'Machine Learning', coeff: 3, credits: 3 },
          { id: 'rsus', name: 'Regulations & Standards for Unmanned System', coeff: 3, credits: 3 },
          { id: 'cp1', name: 'Capstone Project I', coeff: 2, credits: 2 },
          { id: 'ti1', name: 'Training Internship I', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'aes_s3',
        title: 'Semester 3 (S7)',
        modules: [
          { id: 'pe', name: 'Power Electronics', coeff: 3, credits: 3 },
          { id: 'incp', name: 'Industrial Networks and Communication Protocols', coeff: 3, credits: 3 },
          { id: 'dsp', name: 'Digital Signal Processors', coeff: 3, credits: 3 },
          { id: 'msdf', name: 'Multi-Sensor Data Fusion', coeff: 2, credits: 2 },
          { id: 'irtos', name: 'Introduction to Real-Time Operating Systems', coeff: 3, credits: 3 },
          { id: 'df', name: 'Digital Filtering', coeff: 3, credits: 3 },
          { id: 'hmi', name: 'Human-Machine Interface for Embedded Systems', coeff: 2, credits: 2 },
          { id: 'dcs', name: 'Digital Control Systems', coeff: 3, credits: 3 },
          { id: 'dl', name: 'Deep Learning', coeff: 3, credits: 3 },
          { id: 'or', name: 'Operations Research', coeff: 2, credits: 2 },
          { id: 'ess', name: 'Introduction to Embedded Systems Security', coeff: 2, credits: 2 },
          { id: 'pme', name: 'Project Management for Engineers', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'aes_s4',
        title: 'Semester 4 (S8)',
        modules: [
          { id: 'iot', name: 'Internet of Things (IoT)', coeff: 3, credits: 3 },
          { id: 'em', name: 'Electric Machines', coeff: 3, credits: 3 },
          { id: 'fpga', name: 'FPGA and Hardware Design', coeff: 3, credits: 3 },
          { id: 'artos', name: 'Advanced Real-Time Operating Systems', coeff: 3, credits: 3 },
          { id: 'cryp', name: 'Cryptography', coeff: 3, credits: 3 },
          { id: 'vip', name: 'Embedded Vision and Intelligent Image Processing', coeff: 2, credits: 2 },
          { id: 'rc', name: 'Regulation and Control', coeff: 3, credits: 3 },
          { id: 'robo', name: 'Fundamentals of Robotics', coeff: 3, credits: 3 },
          { id: 'wce', name: 'Wireless Communication Essentials', coeff: 3, credits: 3 },
          { id: 'eai', name: 'Embedded AI', coeff: 2, credits: 2 },
          { id: 'cp2', name: 'Capstone Project II', coeff: 2, credits: 2 },
          { id: 'ti2', name: 'Training Internship II', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'aes_s5',
        title: 'Semester 5 (S9)',
        modules: [
          { id: 'posp', name: 'Program Optimization and System Performance', coeff: 3, credits: 3 },
          { id: 'psap', name: 'Power Supply and Auxiliary Peripherals', coeff: 3, credits: 3 },
          { id: 'gpu', name: 'Parallel Computing on GPUs', coeff: 3, credits: 3 },
          { id: 'eos', name: 'Embedded Operating Systems', coeff: 3, credits: 3 },
          { id: 'syse', name: 'Systems Security', coeff: 3, credits: 3 },
          { id: 'ns', name: 'Network Security', coeff: 3, credits: 3 },
          { id: 'rses', name: 'Reliability and Safety of Embedded Systems', coeff: 3, credits: 3 },
          { id: 'dces', name: 'Distributed Computing for Embedded Systems', coeff: 2, credits: 2 },
          { id: 'fan', name: 'Fundamentals of Autonomous Navigation', coeff: 2, credits: 2 },
          { id: 'qc', name: 'Introduction to Quantum Computing', coeff: 2, credits: 2 },
          { id: 'cp3', name: 'Capstone Project III', coeff: 2, credits: 2 },
          { id: 'esd', name: 'Entrepreneurship and Startup Development', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'aes_s6',
        title: 'Semester 6 (S10)',
        modules: [
          { id: 'pfe', name: 'Internship and Final Year Project', coeff: 30, credits: 30 },
        ]
      }
    ]
  },
  rasd: {
    id: 'rasd',
    label: 'Robotics & Autonomous Systems Design',
    description: 'Master the design, modeling, and control of intelligent robotic agents, from manipulators to mobile robots.',
    semesters: [
      {
        id: 'rasd_s1',
        title: 'Semester 1 (S5)',
        modules: [
          { id: 'isdc', name: 'Introduction to System Dynamics and Control', coeff: 4, credits: 4 },
          { id: 'dsp', name: 'Digital Signal Processing', coeff: 4, credits: 4 },
          { id: 'math', name: 'Mathematics for Engineers', coeff: 4, credits: 4 },
          { id: 'aae', name: 'Advanced Analog Electronics', coeff: 4, credits: 4 },
          { id: 'iee', name: 'Introduction to Electrical Engineering', coeff: 4, credits: 4 },
          { id: 'cms', name: 'Computational Modeling & Simulation for Engineering Design', coeff: 3, credits: 3 },
          { id: 'atd', name: 'Advanced Technical Design', coeff: 3, credits: 3 },
          { id: 'si', name: 'Sensors and Instrumentation', coeff: 2, credits: 2 },
          { id: 'ent', name: 'Introduction to Entrepreneurship', coeff: 1, credits: 1 },
          { id: 'bpr', name: 'Basic Principles of Robotics', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'rasd_s2',
        title: 'Semester 2 (S6)',
        modules: [
          { id: 'iml', name: 'Introduction to Machine Learning', coeff: 4, credits: 4 },
          { id: 'opt', name: 'Optimization Techniques', coeff: 4, credits: 4 },
          { id: 'mpmc', name: 'Microprocessors and Microcontrollers', coeff: 4, credits: 4 },
          { id: 'dcs', name: 'Digital Control Systems', coeff: 4, credits: 4 },
          { id: 'ms', name: 'Mechanical Systems', coeff: 3, credits: 3 },
          { id: 'cad', name: 'Computer Aided Design (CAD)', coeff: 3, credits: 3 },
          { id: 'ep', name: 'Engineering Programming', coeff: 2, credits: 2 },
          { id: 'ear', name: 'Electric Actuators for Robotics', coeff: 2, credits: 2 },
          { id: 'uav', name: 'Introduction to UAVs Operations and Regulations', coeff: 1, credits: 1 },
          { id: 'cp1', name: 'Capstone Project I', coeff: 1, credits: 1 },
          { id: 'los', name: 'Linux Operating System', coeff: 1, credits: 1 },
          { id: 'ti1', name: 'Training Internship I', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'rasd_s3',
        title: 'Semester 3 (S7)',
        modules: [
          { id: 'nocd', name: 'Nonlinear and Optimal Control Design', coeff: 4, credits: 4 },
          { id: 'mpm', name: 'Multi-Physics Modeling of Technological Systems', coeff: 4, credits: 4 },
          { id: 'rmp', name: 'Robot Motion Planning', coeff: 4, credits: 4 },
          { id: 'kdc', name: 'Kinematics, Dynamics and Control of Robot Manipulators', coeff: 4, credits: 4 },
          { id: 'pe', name: 'Power Electronics', coeff: 4, credits: 4 },
          { id: 'mr', name: 'Mobile Robotics', coeff: 3, credits: 3 },
          { id: 'ai', name: 'Advanced and Current Trends in AI', coeff: 2, credits: 2 },
          { id: 'ros', name: 'Robot Operating System & Computer Tools for Robotics', coeff: 2, credits: 2 },
          { id: 'me', name: 'Marketing and Economy', coeff: 1, credits: 1 },
          { id: 'sas', name: 'Sensors for Autonomous Systems', coeff: 1, credits: 1 },
          { id: 'cp2', name: 'Capstone Project II', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'rasd_s4',
        title: 'Semester 4 (S8)',
        modules: [
          { id: 'ia', name: 'Industrial Automation', coeff: 4, credits: 4 },
          { id: 'irc', name: 'Industrial Robots Control', coeff: 2, credits: 2 },
          { id: 'iot', name: 'Internet Of Things (IOT)', coeff: 4, credits: 4 },
          { id: 'uav2', name: 'UAV Flight Testing & Operations', coeff: 4, credits: 4 },
          { id: 'mat', name: 'Introduction to Materials & Mechanical Manufacturing Processes', coeff: 4, credits: 4 },
          { id: 'aes', name: 'Advanced Embedded Systems', coeff: 2, credits: 2 },
          { id: 'md', name: 'Machine Dynamics', coeff: 3, credits: 3 },
          { id: 'cio', name: 'Computational Intelligence for Optimization', coeff: 3, credits: 3 },
          { id: 'pm', name: 'Project Management', coeff: 1, credits: 1 },
          { id: 'rerp', name: 'Reverse Engineering and Rapid Prototyping', coeff: 1, credits: 1 },
          { id: 'i40', name: 'Introduction to Industry 4.0 and Smart Manufacturing', coeff: 1, credits: 1 },
          { id: 'ti2', name: 'Training Internship II', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'rasd_s5',
        title: 'Semester 5 (S9)',
        modules: [
          { id: 'aml', name: 'Advanced Machine Learning for Robotics', coeff: 4, credits: 4 },
          { id: 'dsab', name: 'Distributed Systems and Agent-Based Technologies', coeff: 4, credits: 4 },
          { id: 'hmi', name: 'Human-Machine / Machine-Machine Interaction', coeff: 3, credits: 3 },
          { id: 'cvr', name: 'Computer Vision for Robotics', coeff: 4, credits: 4 },
          { id: 'rtos', name: 'Real-Time Operating Systems', coeff: 3, credits: 3 },
          { id: 'mar', name: 'Marine Robotics', coeff: 4, credits: 4 },
          { id: 'df', name: 'Data Fusion', coeff: 3, credits: 3 },
          { id: 'esd', name: 'Entrepreneurship & Startup Development', coeff: 1, credits: 1 },
          { id: 'qc', name: 'Quality Control', coeff: 1, credits: 1 },
          { id: 'sr', name: 'Service Robotics', coeff: 1, credits: 1 },
          { id: 'cs', name: 'Cybersecurity', coeff: 1, credits: 1 },
          { id: 'ti3', name: 'Training Internship III', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'rasd_s6',
        title: 'Semester 6 (S10)',
        modules: [
          { id: 'pfe', name: 'Internship and Final Year Project', coeff: 30, credits: 30 },
        ]
      }
    ]
  },
  usnc: {
    id: 'usnc',
    label: 'Unmanned Systems Nav & Control',
    description: 'Specialty dealing with the guidance, navigation, and control systems of UAVs and other unmanned vehicles.',
    semesters: [
      {
        id: 'usnc_s1',
        title: 'Semester 1 (S5)',
        modules: [
          { id: 'lcs', name: 'Linear Control Systems', coeff: 4, credits: 4 },
          { id: 'esd', name: 'Embedded Systems Design', coeff: 4, credits: 4 },
          { id: 'ae', name: 'Advanced Electronics', coeff: 4, credits: 4 },
          { id: 'is', name: 'Instrumentation and Sensors', coeff: 4, credits: 4 },
          { id: 'dsp', name: 'Digital Signal Processing', coeff: 4, credits: 4 },
          { id: 'lin', name: 'Introduction to Linux', coeff: 3, credits: 3 },
          { id: 'opt', name: 'Optimization Techniques', coeff: 3, credits: 3 },
          { id: 'esa', name: 'Ethics and Safety in AI and Robotics', coeff: 2, credits: 2 },
          { id: 'pfa', name: 'Principles of Flight and Aeronautics', coeff: 2, credits: 2 },
        ]
      },
      {
        id: 'usnc_s2',
        title: 'Semester 2 (S6)',
        modules: [
          { id: 'ssac', name: 'State Space Analysis and Control Design', coeff: 4, credits: 4 },
          { id: 'kdus', name: 'Kinematics and Dynamics of Unmanned Systems', coeff: 3, credits: 3 },
          { id: 'mcrm', name: 'Modeling and Control of Robotic Manipulators', coeff: 3, credits: 3 },
          { id: 'act', name: 'Actuators', coeff: 3, credits: 3 },
          { id: 'com', name: 'Communication Systems', coeff: 3, credits: 3 },
          { id: 'rtos', name: 'Real Time Operating Systems', coeff: 3, credits: 3 },
          { id: 'pe', name: 'Power Electronics', coeff: 3, credits: 3 },
          { id: 'iml', name: 'Introduction to Machine Learning', coeff: 3, credits: 3 },
          { id: 'rsus', name: 'Regulations and Standards for Unmanned Systems', coeff: 2, credits: 2 },
          { id: 'cp1', name: 'Capstone Project I', coeff: 2, credits: 2 },
          { id: 'ti1', name: 'Training Internship I', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'usnc_s3',
        title: 'Semester 3 (S7)',
        modules: [
          { id: 'mcs', name: 'Multivariable Control Systems Design', coeff: 3, credits: 3 },
          { id: 'cv', name: 'Computer Vision', coeff: 3, credits: 3 },
          { id: 'sid', name: 'System Identification', coeff: 3, credits: 3 },
          { id: 'fan', name: 'Fundamentals of Autonomous Navigation', coeff: 3, credits: 3 },
          { id: 'fre', name: 'Filtering and Recursive Estimation', coeff: 3, credits: 3 },
          { id: 'aesd', name: 'Advanced Embedded Systems Design', coeff: 3, credits: 3 },
          { id: 'nndl', name: 'Neural Networks and Deep Learning', coeff: 3, credits: 3 },
          { id: 'ap', name: 'Antennas and Propagation', coeff: 3, credits: 3 },
          { id: 'mcad', name: 'Mechanical CAD for Robotics', coeff: 2, credits: 2 },
          { id: 'pm', name: 'Project Management for Engineers', coeff: 2, credits: 2 },
          { id: 'cp2', name: 'Capstone Project II', coeff: 2, credits: 2 },
        ]
      },
      {
        id: 'usnc_s4',
        title: 'Semester 4 (S8)',
        modules: [
          { id: 'nlcs', name: 'Non Linear Control Systems', coeff: 3, credits: 3 },
          { id: 'oc', name: 'Optimal Control', coeff: 3, credits: 3 },
          { id: 'aai', name: 'Advanced AI Techniques', coeff: 3, credits: 3 },
          { id: 'ans', name: 'Advanced Navigation Systems', coeff: 3, credits: 3 },
          { id: 'ah', name: 'Aerodynamics and Hydrodynamics', coeff: 3, credits: 3 },
          { id: 'hri', name: 'Human-Robot Interaction', coeff: 3, credits: 3 },
          { id: 'uav', name: 'UAV Flight Testing and Operations', coeff: 3, credits: 3 },
          { id: 'ps', name: 'Propulsion Systems', coeff: 3, credits: 3 },
          { id: 'cus', name: 'Cybersecurity for Unmanned Systems', coeff: 3, credits: 3 },
          { id: 'rerp', name: 'Reverse Engineering and Rapid Prototyping', coeff: 1, credits: 1 },
          { id: 'cp3', name: 'Capstone Project III', coeff: 1, credits: 1 },
          { id: 'ti2', name: 'Training Internship II', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'usnc_s5',
        title: 'Semester 5 (S9)',
        modules: [
          { id: 'auas', name: 'Advanced UAS Programming', coeff: 4, credits: 4 },
          { id: 'fae', name: 'Fundamentals of Aerospace Engineering', coeff: 4, credits: 4 },
          { id: 'eves', name: 'Electric Vehicles and Energy Systems', coeff: 3, credits: 3 },
          { id: 'rl', name: 'Reinforcement Learning', coeff: 3, credits: 3 },
          { id: 'srma', name: 'Swarm Robotics and Multi-Agent Systems', coeff: 3, credits: 3 },
          { id: 'uspc', name: 'Unmanned Systems Practical Cases', coeff: 3, credits: 3 },
          { id: 'bbr', name: 'Biomimetisme and Bio-inspired Robotics', coeff: 3, credits: 3 },
          { id: 'ia', name: 'Industrial Automation', coeff: 3, credits: 3 },
          { id: 'ti3', name: 'Training Internship III', coeff: 1, credits: 1 },
          { id: 'cp4', name: 'Capstone Project IV', coeff: 2, credits: 2 },
          { id: 'acr', name: 'Academic Communication and Research', coeff: 1, credits: 1 },
        ]
      },
      {
        id: 'usnc_s6',
        title: 'Semester 6 (S10)',
        modules: [
          { id: 'pfe', name: 'Internship and Final Year Project', coeff: 30, credits: 30 },
        ]
      }
    ]
  }
};

const StudyGuide: React.FC = () => {
  const location = useLocation();
  const [viewMode, setViewMode] = useState<ViewMode>('prep');
  const [activeSpecialty, setActiveSpecialty] = useState<CycleId | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<Semester | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

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
    }
  }, [location]);

  // Reset helpers
  const resetSelection = () => {
    setSelectedSemester(null);
    setSelectedModule(null);
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
  };

  const handleModuleClick = (module: Module) => {
    setSelectedModule(module);
  };

  // Determine current active data
  const getCurrentCycleData = () => {
    if (viewMode === 'prep') return studyData['prep'];
    if (viewMode === 'specs' && activeSpecialty) return studyData[activeSpecialty];
    return null;
  };

  const activeData = getCurrentCycleData();


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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-float-in">
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
    );
  };

  const renderModules = () => {
    if (!selectedSemester) return null;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-float-in">
        {selectedSemester.modules.map((module) => (
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
                {/* Coefficients and Credits removed */}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors leading-tight">
                {module.name}
              </h3>
            </div>
          </button>
        ))}
      </div>
    );
  };

  const renderResources = () => {
    if (!selectedModule) return null;

    const resourceTypes: { id: string; title: string; icon: React.ReactNode; color: string; desc: string }[] = [
      {
        id: 'courses',
        title: 'Courses',
        icon: <Library size={32} />,
        color: 'text-accent-cyan',
        desc: 'Lecture notes and summaries'
      },
      {
        id: 'td',
        title: 'TDs & Exercises',
        icon: <PenTool size={32} />,
        color: 'text-accent-purple',
        desc: 'Tutorial series and practice problems'
      },
      {
        id: 'exams',
        title: 'Exams',
        icon: <FileText size={32} />,
        color: 'text-accent-pink',
        desc: 'Previous exams and corrections'
      },
      {
        id: 'extra',
        title: 'Additional Resources',
        icon: <Video size={32} />,
        color: 'text-green-400',
        desc: 'Video tutorials and external links'
      },
    ];

    return (
      <div className="space-y-8 animate-float-in">
        {/* Module Details Header */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            {getModuleIcon(selectedModule.name)}
          </div>
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-bold border border-accent-cyan/20">
                {selectedModule.code || 'MOD'}
              </span>
              {/* Coefficients and Credits removed */}
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">{selectedModule.name}</h2>

            {selectedModule.objectives && (
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-gray-300 font-bold">
                  <Info size={18} />
                  <span>Module Objectives</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {selectedModule.objectives}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceTypes.map((type) => (
            <div
              key={type.id}
              className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-white/20 transition-all opacity-80 hover:opacity-100 group"
            >
              <div className={`p-4 rounded-full bg-white/5 ${type.color} mb-2 group-hover:scale-110 transition-transform`}>
                {type.icon}
              </div>
              <h3 className="text-2xl font-display font-bold">{type.title}</h3>
              <p className="text-gray-400">{type.desc}</p>
              <div className="mt-4 px-4 py-2 rounded-full border border-white/10 text-sm text-gray-500 bg-black/20">
                Empty (Coming Soon)
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-accent-purple/10 rounded-lg">
              <GraduationCap className="text-accent-purple" size={24} />
            </div>
            <span className="text-accent-purple font-bold tracking-wider uppercase text-sm">Engineering Skills Center</span>
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
                if (viewMode === 'specs' && activeSpecialty) {
                  setActiveSpecialty(null);
                  resetSelection();
                }
              }}
              className={`hover:text-accent-cyan transition-colors ${!activeSpecialty && !selectedSemester ? 'text-accent-cyan font-bold' : 'text-gray-400'}`}
              disabled={viewMode === 'prep'}
            >
              {viewMode === 'prep' ? 'Preparatory Cycle' : 'Specialties'}
            </button>

            {viewMode === 'specs' && activeSpecialty && (
              <>
                <ChevronRight size={14} className="text-gray-600" />
                <button
                  onClick={() => resetSelection()}
                  className={`hover:text-accent-cyan transition-colors ${!selectedSemester ? 'text-accent-cyan font-bold' : 'text-gray-400'}`}
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
          {(selectedSemester || selectedModule || (viewMode === 'specs' && activeSpecialty)) && (
            <button
              onClick={() => {
                if (selectedModule) {
                  setSelectedModule(null);
                } else if (selectedSemester) {
                  setSelectedSemester(null);
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
  );
};

export default StudyGuide;