import React, { useState, useEffect } from 'react';
import { Book, Video, Link as LinkIcon, Download, ArrowLeft, Cpu, Globe, Code, Zap, Sparkles, BookOpen, PenTool, Send } from 'lucide-react';

interface ResourceArticle {
  id: string;
  title: string;
  category: string;
  type: 'Article' | 'Tutorial' | 'Guide';
  readTime: string;
  description: string;
  content: string;
  icon: React.ReactNode;
  color: string;
  // Project specific fields
  components?: string[];
  projectImage?: string;
  videoLinks?: { title: string; url: string }[];
}

const resources: ResourceArticle[] = [
  // --- MINI PROJECTS ---
  {
    id: 'proj-arduino',
    category: 'Arduino Basics',
    type: 'Tutorial', // Changed to Tutorial to fit "Project"
    title: 'Mini Project: Ultrasonic Radar System',
    readTime: '2 Hours Build',
    description: 'Build your own scanning radar using an Ultrasonic Sensor and a Servo Motor, visualized in Processing.',
    icon: <Cpu size={24} />,
    color: 'text-accent-cyan',
    projectImage: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=1000',
    components: [
      'Arduino Uno',
      'HC-SR04 Ultrasonic Sensor',
      'SG90 Micro Servo Motor',
      'Breadboard & Jumper Wires',
      'Mounting Bracket (or Cardboard)'
    ],
    videoLinks: [
      { title: 'Project Demo & Tutorial', url: 'https://www.youtube.com/watch?v=kQRYIH2HqsY' },
      { title: 'Processing Visualization Code', url: 'https://www.youtube.com/watch?v=YCDvU8e5sNw' }
    ],
    content: `This classic project brings together hardware control and software visualization. You'll create a sonar that sweeps 180 degrees, detecting objects and mapping them on your screen.

Step 1: The Circuit
1. Mount the HC-SR04 sensor onto the Servo arm.
2. Connect Servo Signal to Pin 9, VCC to 5V, GND to GND.
3. Connect Sensor Trig to Pin 10, Echo to Pin 11.

Step 2: The Arduino Code
We need to sweep the servo from 15° to 165° and read the distance at each degree.
\`\`\`cpp
#include <Servo.h>
Servo myServo;
// ... setup pins ...
void loop() {
  for(int i=15; i<=165; i++){  
    myServo.write(i);
    delay(30);
    distance = calculateDistance();
    Serial.print(i); 
    Serial.print(","); 
    Serial.print(distance); 
    Serial.print(".");
  }
  // ... repeat map back ...
}
\`\`\`

Step 3: The Visualization
Using **Processing IDE**, we write a script that listens to the Serial Port. It draws a green radar line and red blips where obstacles are detected.

Troubleshooting
- If the servo jitters, your USB port might not supply enough current. Use an external 9V battery.
- Ensure the Baud Rate in Processing matches your Arduino sketch (9600).`
  },
  {
    id: 'proj-pcb',
    category: 'PCB Design',
    type: 'Tutorial',
    title: 'Mini Project: 555 Timer Blinking Badge',
    readTime: '3 Hours Build',
    description: 'Design and manufacture a custom PCB badge that pulses LEDs using the legendary 555 timer IC.',
    icon: <Zap size={24} />,
    color: 'text-accent-purple',
    projectImage: 'https://images.unsplash.com/photo-1599553533446-56f8745500b3?auto=format&fit=crop&q=80&w=1000',
    components: [
      'KiCad Software',
      'NE555 Timer IC (SOIC-8)',
      'CR2032 Coin Cell Holder',
      'LEDs (0805 Package)',
      'Resistors & Capacitors (0805)'
    ],
    videoLinks: [
      { title: 'Designing a PCB Badge in KiCad', url: 'https://www.youtube.com/watch?v=C7-8nU64MLI' },
      { title: 'SMD Soldering Tutorial', url: 'https://www.youtube.com/watch?v=hoLf8gvvXXU' }
    ],
    content: `Start your journey into professional electronics by creating a wearable piece of art.

Step 1: Schematic Design
We are building an "Astable Multivibrator".
- Connect the 555 timer with a capacitor and two resistors to set the frequency (blink speed).
- formula: f = 1.44 / ((R1 + 2*R2) * C). Aim for 1-2 Hz.

Step 2: Artistic Layout
1. Import a black and white graphic (DXF or Bitmap) for your badge shape.
2. Place the LEDs in the eyes/features of your character.
3. Route the traces on the back layer to keep the front clean.
4. Add a "Copper Pour" on the front connected to Ground for shielding (and aesthetics).

Step 3: Ordering & Assembly
- Export your Gerber files and send them to a fab house (JLCPCB/PCBWay).
- When they arrive, use fine solder paste and tweezers to solder the surface mount (SMD) components.`
  },
  {
    id: 'proj-ai',
    category: 'AI',
    type: 'Tutorial',
    title: 'Mini Project: Gesture Controlled Robot',
    readTime: 'Weekend Project',
    description: 'Control a robot arm or car using just your hand gestures via a webcam and Computer Vision.',
    icon: <Sparkles size={24} />,
    color: 'text-accent-pink',
    projectImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    components: [
      'Python (MediaPipe Library)',
      'Webcam',
      'Arduino Uno',
      'Any Servo-controlled mechanism'
    ],
    videoLinks: [
      { title: 'Hand Tracking with MediaPipe', url: 'https://www.youtube.com/watch?v=01sAkU_NvOY' },
      { title: 'Python to Arduino Serial Comms', url: 'https://www.youtube.com/watch?v=fCGV5421Xk8' }
    ],
    content: `This project bridges the gap between high-level AI and low-level hardware control.

Step 1: Hand Tracking (Python)
We use Google's MediaPipe library. It detects 21 landmarks on your hand in real-time.
\`\`\`python
import cv2
import mediapipe as mp
# ... init mediapipe ...
while True:
    success, img = cap.read()
    results = hands.process(img)
    if results.multi_hand_landmarks:
       # Calculate distance between thumb and index finger
       distance = get_distance(thumb_tip, index_tip)
       # Map distance to 0-180 for servo
\`\`\`

Step 2: Serial Communication
Send the calculated angle to the Arduino via USB.
\`\`\`python
import serial
arduino = serial.Serial(port='COM3', baudrate=115200)
arduino.write(bytes(str(angle), 'utf-8'))
\`\`\`

Step 3: The Robot
On the Arduino side, read the integer from Serial and write it to the Servo. Now, pinching your fingers closes the robot gripper!`
  },
  {
    id: 'proj-code',
    category: 'Coding',
    type: 'Tutorial',
    title: 'Mini Project: Real-Time Face Tracker',
    readTime: '2 Hours Code',
    description: 'Write a Python script that locks onto faces and keeps them centered using a Pan/Tilt camera mechanism.',
    icon: <Code size={24} />,
    color: 'text-green-400',
    projectImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    components: [
      'Python (OpenCV)',
      'Webcam',
      'Pan/Tilt Bracket (2 Servos)',
      'Arduino (to drive servos)'
    ],
    videoLinks: [
      { title: 'OpenCV Face Detection', url: 'https://www.youtube.com/watch?v=XIrOM9oP3pA' },
      { title: 'PID Control for Camera Tracking', url: 'https://www.youtube.com/watch?v=GoHtRzbEIOs' }
    ],
    content: `This project simulates an "Auto-Turret" or cameraman functionality.

Step 1: Detection
Use a Haar Cascade or DNN model in OpenCV to find faces.
\`\`\`python
faces = face_cascade.detectMultiScale(gray, 1.1, 4)
for (x, y, w, h) in faces:
    center_x = x + w//2
    center_y = y + h//2
\`\`\`

Step 2: The Error Loop
Calculate how far the face is from the center of the image.
- \`error_x = screen_center_x - face_center_x\`
- \`error_y = screen_center_y - face_center_y\`

Step 3: Proportional Control
Move the servos based on the error.
- \`servo_x_angle += error_x * Kp\`
- If the face is to the left, pan left. If roughly centered, stay still.

Step 4: Integration
Send these angles to the Arduino to physically move the webcam. You've just built a closed-loop control system!`
  },
  // --- END MINI PROJECTS ---
  {
    id: 'arduino-1',
    category: 'Arduino Basics',
    type: 'Guide',
    title: 'Introduction to Arduino: Getting Started with Microcontrollers',
    readTime: '8 min read',
    description: 'Learn the fundamentals of the Arduino ecosystem, from hardware pinouts to the IDE environment.',
    icon: <Cpu size={24} />,
    color: 'text-accent-cyan',
    videoLinks: [
      { title: 'Arduino Tutorial for Beginners (Full Course)', url: 'https://www.youtube.com/watch?v=fJWR7dBuc18' },
      { title: 'Arduino 101: Hardware and Software', url: 'https://www.youtube.com/watch?v=nL34zDTPkJK' }
    ],
    content: `Arduino is the gateway drug to embedded systems engineering. At its core, it abstracts away the complex register-level manipulation required for microcontrollers (like the ATmega328P) into an accessible C++ based API.

Hardware Anatomy: Inside the Arduino Uno
The standard board used in our labs features:
- ATmega328P MCU: An 8-bit AVR microcontroller running at 16MHz. It has 32KB of Flash memory (for your code) and 2KB of SRAM (for runtime variables).
- GPIO Pins (0-13): These 14 digital pins can act as Inputs (reading sensors) or Outputs (driving LEDs/relays). Pins marked with '~' support PWM (Pulse Width Modulation) for simulating analog output.
- ADC (A0-A5): Analog-to-Digital Converters. These map 0-5V signals to integer values from 0-1023 (10-bit resolution).
- UART/Serial: Pins 0 (RX) and 1 (TX) are used for communication with the computer. Never connect devices to these while uploading code!

The Core Loop
Every Arduino sketch has two main functions:
1. setup(): Runs once on startup. Use this to initialize pin modes (INPUT/OUTPUT) and start serial communication.
2. loop(): Runs continuously. This is where your main control logic lives.

Pro-Tip: Avoid 'delay()'
Beginners use delay(1000) to wait for a second. This halts the processor completely! In robotics, this is fatal. Instead, learn to use millis() for non-blocking timing, allowing your robot to read sensors while waiting.`
  },
  {
    id: 'pcb-1',
    category: 'PCB Design',
    type: 'Article',
    title: 'Introduction to PCB Design: From Schematic to Layout',
    readTime: '12 min read',
    description: 'A comprehensive journey through the Printed Circuit Board design workflow using industry-standard tools.',
    icon: <Zap size={24} />,
    color: 'text-accent-purple',
    videoLinks: [
      { title: 'Introduction to PCB Design (EEVblog)', url: 'https://www.youtube.com/watch?v=V8BHitOcL_g' },
      { title: 'PCB Design for Beginners (GreatScott!)', url: 'https://www.youtube.com/watch?v=hoLf8gvvXXU' }
    ],
    content: `PCB design differentiates hobbyists from engineers. It is the art of translating a schematic diagram into a manufacturable physical board that ensures signal integrity and thermal management.

Phase 1: Schematic Capture (The Logic)
Before drawing a single wire, you must define connectivity.
- Netlist: The database of connections. If pin 1 of U1 connects to pin 2 of R1, the netlist records this.
- BOM (Bill of Materials): Selecting real-world components. You must know the package size (e.g., 0805 vs 0402) before layout.

Phase 2: Layout & Routing (The Physics)
This is where electrical engineering meets geometry.
- Stackup: Defining layer structure. A typical 4-layer board is: Signal - Ground - Power - Signal.
- Trace Width: Calculated based on current density. Use a calculator (like Saturn PCB) to determine width. High current = wider traces.
- Impedance Control: Critical for high-speed signals (USB, Ethernet). Traces must have specific widths/spacing to match 50Ω or 90Ω impedance.
- Decoupling: Always place bypass capacitors (100nF) as close as physically possible to the power pins of ICs to filter noise.

Phase 3: Manufacturing Output
You don't send the .kicad_pcb file to the factory. You generate Gerber Files. There is one file per layer (Copper Top, Copper Bottom, Solder Mask, Silkscreen, Drill file).`
  },
  {
    id: 'ai-1',
    category: 'AI',
    type: 'Guide',
    title: 'Introduction to AI in Robotics: Enabling Autonomous Decision Making',
    readTime: '10 min read',
    description: 'How machine learning and neural networks are replacing traditional control theory in modern autonomous systems.',
    icon: <Sparkles size={24} />,
    color: 'text-accent-pink',
    videoLinks: [
      { title: 'The Future of AI in Robotics', url: 'https://www.youtube.com/watch?v=0_u6_nLNKvA' },
      { title: 'Robotics & AI Learning Roadmap', url: 'https://www.youtube.com/watch?v=S5t6WToj3Q8' }
    ],
    content: `Modern robotics has moved beyond simple PID control loops. We are now in the era of Cognitive Robotics, where agents must perceive, reason, and act in unstructured environments.

The Autonomy Pipeline
1. Perception (Sensors → Data): 
   Raw data from LIDAR, Cameras (RGB-D), and IMUs is noisy. We use algorithms like Kalman Filters to fuse these inputs into a coherent state estimate.
   
2. Localization & Mapping (SLAM):
   "Where am I?" and "What does the world look like?". 
   - Visual SLAM: Uses features (corners, edges) tracked across video frames to triangulate position.
   - Lidar SLAM: Matches point clouds to build 2D/3D occupancy grids.

3. Planning (The Brain):
   - Global Planning: A* or Dijkstra's algorithm finds the shortest path on a map.
   - Local Planning: Algorithms like DWA (Dynamic Window Approach) generate velocity commands (v, ω) to follow the path while dodging dynamic obstacles (like people).

4. Control (The Action):
   Converting velocity commands into motor voltages. This is typically done via low-level PID controllers running on microcontrollers.`
  },
  {
    id: 'code-1',
    category: 'Coding',
    type: 'Guide',
    title: 'Introduction to Python for Engineers: The Swiss Army Knife',
    readTime: '7 min read',
    description: 'Why Python has become the essential language for rapid prototyping in robotics and data science.',
    icon: <Code size={24} />,
    color: 'text-green-400',
    videoLinks: [
      { title: 'Python for Beginners (Learn in 1 Hour)', url: 'https://www.youtube.com/watch?v=kqtD5dpn9C8' },
      { title: 'Python for Data Science/Engineering', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw' }
    ],
    content: `In the world of Embedded Systems and Robotics, Python has emerged as the de-facto "glue" language. While C/C++ is used for low-level firmware (Arduino/STM32), Python handles the high-level logic, computer vision, and data analysis.

Why Python dominates Robotics (ROS)
The Robot Operating System (ROS) relies heavily on Python. It allows engineers to write "Nodes" (independent processes) that communicate over a network.
- Rapid Prototyping: You can write a script to move a robot arm in 10 lines of Python, vs 50 lines of C++.
- Computer Vision: OpenCV bindings in Python allow for real-time face detection, object tracking, and lane following with minimal code.

Micropython: Python on Hardware
You can now run Python directly on microcontrollers like the ESP32 or Raspberry Pi Pico.

Example: Reading an Analog Sensor with a Filter
\`\`\`python
import machine
import time

sensor = machine.ADC(0)
# Simple Moving Average Filter to smooth noise
readings = []

while True:
    raw_val = sensor.read()
    readings.append(raw_val)
    
    if len(readings) > 10:
        readings.pop(0) # Keep only last 10 readings
        
    smooth_val = sum(readings) / len(readings)
    print(f"Raw: {raw_val} | Smooth: {smooth_val}")
    time.sleep(0.1)
\`\`\`
This simplicity allows mechanical engineers to implement complex logic without getting bogged down in memory pointers.`
  },
  {
    id: 'pcb-2',
    category: 'PCB Design',
    type: 'Tutorial',
    title: 'KiCad Essentials: Setting Up Your First Project',
    readTime: '15 min read',
    description: 'Start your EDA journey by learning the interface and basic keyboard shortcuts of the worlds leading open-source PCB tool.',
    icon: <Globe size={24} />,
    color: 'text-accent-purple',
    videoLinks: [
      { title: 'KiCad 8.0 Beginner Tutorial', url: 'https://www.youtube.com/watch?v=V8BHitOcL_g' },
      { title: 'PCB Design Workflow in KiCad', url: 'https://www.youtube.com/watch?v=Z7D_r5LwO7E' }
    ],
    content: `KiCad has become the industry standard for open-source hardware design, used by CERN and Raspberry Pi. Mastering it is a resume superpower.

The Workflow of a Pro
1. Library Management: Never trust default libraries blindly. Always verify symbol pinouts against the datasheet. 
   - Best Practice: Create your own project-specific library for every component you use.

2. Hierarchical Schematics:
   Don't cram everything on one page. Use Hierarchical Sheets to break your design into functional blocks (e.g., Power Supply, MCU, Sensors, Motor Drivers). This makes the schematic readable and reusable.

3. Layout Guidelines:
   - Power: Use thick traces (20-40 mil) for power lines. Better yet, pour Copper Zones (polygons) for GND and VCC.
   - 3D Viewer: Press Alt + 3 frequently. If the 3D model looks wrong, the footprint is likely wrong.
   - DRC (Design Rule Check): This is your spell-checker. Run it constantly. It catches unconnected pins and traces that are too close together.

Essential Hotkeys
- X: Route track
- V: Place Via (switches active layer)
- M: Move (breaks connection) vs G: Drag (keeps connection)`
  }
];

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