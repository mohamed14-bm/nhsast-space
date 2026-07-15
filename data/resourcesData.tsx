import React from 'react';
import { Cpu, Zap, Sparkles, Code, Globe } from 'lucide-react';
import { ResourceArticle } from '../types';

export const resources: ResourceArticle[] = [
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

