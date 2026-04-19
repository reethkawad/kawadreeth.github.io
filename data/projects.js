// ─────────────────────────────────────────────────────────────
//  PORTFOLIO DATA — kawadreeth.github.io
//
//  To add a project:
//    1. Drop image into assets/
//    2. Push a new object into `projects` below
//    3. Done — card, filter, and drawer are automatic
// ─────────────────────────────────────────────────────────────

const projects = [

  // ── ONGOING ──────────────────────────────────────────────

  {
    id: "vawt",
    title: "Vertical Axis Wind Turbine",
    status: "ongoing",
    zone: "cleantech",
    image: "assets/vawt.jpg",
    images: [],
    summary: "Adaptive pitch control for a VAWT to enhance energy capture in low-wind urban environments.",
    description: "Engineering an adaptive pitch control system for a vertical axis wind turbine to enhance energy efficiency in low-wind environments. The focus is on optimizing blade design and mechanical power conversion through iterative simulation and physical testing. Key challenges include passive vs. active pitch mechanisms and maintaining structural integrity under variable loading.",
    tags: ["Wind Energy", "Controls", "SolidWorks", "CFD", "ANSYS Fluent"],
    links: []
  },

  {
    id: "dexhand",
    title: "8 DoF Robotic Hand",
    status: "ongoing",
    zone: "robotics",
    image: "assets/dexhand.png",
    images: [],
    summary: "Dexterous robotic hand for USC's DRCL bipedal robot — tendon-driven with impact-tolerant MCP joints.",
    description: "Designing and building a robotic hand for the Dynamic and Robotic Controls Lab (DRCL) at USC, to be mounted on the bipedal robot Hector. The hand has two fingers and a thumb across 8 degrees of freedom. DIP joints are passive and linked to the actuated PIP joints via a tendon mechanism driven by N20 high-gear-ratio motors. The MCP joint uses a spring-damper system and a 20 kg·cm servo motor for high torque output and impact mitigation. The CAD shown is the current progress.",
    tags: ["Robotics", "Mechanical Design", "Actuation", "SolidWorks", "DRCL"],
    links: []
  },

  // ── COMPLETED ────────────────────────────────────────────

  {
    id: "windtunnel",
    title: "Blowdown Wind Tunnel",
    status: "completed",
    zone: "hardware",
    image: "assets/windtunnel.jpg",
    images: [],
    summary: "Designed and fabricated a 1.5 m blowdown wind tunnel validating honeycomb flow straighteners.",
    description: "Designed and built a 1.5-meter-long blowdown wind tunnel with a 100×100 mm² test section, primarily using plywood and acrylic. A custom 3D-printed PLA honeycomb was integrated as a flow straightener. The primary objective was to validate the effectiveness of honeycomb geometry in achieving laminar flow conditions. Through velocity profile analysis, the system demonstrated flow stabilization with Reynolds numbers up to 2000 — successfully confirming the honeycomb's role in minimizing turbulence and producing repeatable test conditions.",
    tags: ["Aerodynamics", "Fabrication", "Flow Testing", "3D Printing", "Instrumentation"],
    links: []
  },

  {
    id: "firewarden",
    title: "Wildfire Defense Water Pump",
    status: "completed",
    zone: "cleantech",
    image: "assets/firewarden.jpg",
    images: [],
    summary: "Pool-fed automated spray system with MATLAB-modeled hydraulics for Palisades wildfire defense.",
    description: "Developed a water pump system for wildfire protection by integrating a pool-based spray network with manual activation. Built a MATLAB hydraulic calculator to model pump sizing, pipe losses, and spray coverage for homes in the Palisades area. The system was designed for rapid deployment with minimal infrastructure, enhancing fire safety margins in wildland-urban interface zones.",
    tags: ["Cleantech", "Fluid Systems", "MATLAB", "Hydraulics", "Safety Systems"],
    links: [
      { label: "MATLAB Code", url: "https://github.com/kawadreeth/FireWarden" },
      { label: "Website", url: "https://firewarden.ai/" }
    ]
  },

  {
    id: "fsae",
    title: "FSAE Projects",
    status: "completed",
    zone: "hardware",
    image: "assets/fsaecar.jpg",
    images: [],
    summary: "Aero parts, CFD automation, custom tools, and CNC manufacturing for a Formula SAE race car.",
    description: "Multiple subsystem contributions to the USC Formula SAE team across aerodynamics, tooling, and manufacturing:\n\n• Aerodynamic fixtures: front wing mounting fixtures and undertray mounts\n• CFD automation: developed a fault-tolerant ANSYS Fluent meshing script for half-car and full-car surface and volume mesh generation\n• Custom tooling: designed and built a ±20° yaw probe and a toe angle alignment tool\n• Manufacturing: CNC composite molds for wing elements, CNC milled differential mounts and bracket mounts, 3D printed Nylon 12 CF components, aerodynamic wing sections, and ergonomic driver interface parts (steering wheel, pedal assembly, foot rest)",
    tags: ["Automotive", "CFD", "ANSYS Fluent", "CNC", "Composites", "Tooling"],
    links: []
  },

  {
    id: "waterrocket",
    title: "Water Rocket Flight Optimization",
    status: "completed",
    zone: "hardware",
    image: "assets/WaterRocketPhoto.JPG",
    images: [],
    summary: "MATLAB simulation optimizing air/water ratio, pressure, and parachute size for maximum altitude.",
    description: "Developed a MATLAB simulation to optimize a water rocket's air-to-water fill ratio, initial pressure, and parachute surface area. The model captured thrust decay, drag, and parachute deployment dynamics to maximize apogee and minimize landing impact. Parametric sweeps were used to map the design space and identify optimal configurations, enhancing flight efficiency through physics-based mathematical modeling.",
    tags: ["MATLAB", "Propulsion", "Simulation", "Optimization", "Dynamics"],
    links: [
      { label: "MATLAB Code", url: "https://github.com/kawadreeth/Water-rocket" }
    ]
  },

  {
    id: "drone",
    title: "Drone CAD & Structural Analysis",
    status: "completed",
    zone: "hardware",
    image: "assets/drone.png",
    images: [],
    summary: "Full quadrotor drone CAD in Siemens NX with FEA and multi-body dynamics for structural validation.",
    description: "Designed a quadrotor drone frame using Siemens NX CAD and conducted comprehensive structural validation using Finite Element Analysis (FEA) and Multi-Body Dynamics (MBD) simulation in ANSYS. The analysis optimized aerodynamic geometry, joint design, and material selection for improved flight performance and structural durability under dynamic loading conditions including vibration and impact.",
    tags: ["CAD", "FEA", "Siemens NX", "ANSYS", "Drones", "Structural Analysis"],
    links: [
      { label: "Report", url: "https://drive.google.com/file/d/1575TLy4KyPg1gU15R2b3k51xjANRKEK5/view?usp=sharing" }
    ]
  },

  {
    id: "bridge",
    title: "Truss Bridge Optimization",
    status: "completed",
    zone: "hardware",
    image: "assets/bridge.png",
    images: [],
    summary: "Parametric MATLAB truss analysis optimizing bridge geometry for maximum load-to-weight ratio.",
    description: "Modeled and analyzed truss bridge forces using parametric MATLAB simulations, sweeping over joint positions and member configurations to optimize structural efficiency. The optimal design was validated through physical prototyping and load cell testing, comparing simulated force distributions to measured values. Assumptions about pin-joint behavior and material linearity were verified through the testing campaign.",
    tags: ["Structural", "MATLAB", "Optimization", "Prototyping", "Load Testing"],
    links: [
      { label: "Presentation", url: "https://docs.google.com/presentation/d/1VA9FRjOtLrg-IBJXrp6H5tkmueV63h8G1FIaLfHCmkg/edit?usp=sharing" }
    ]
  },

  {
    id: "monopoly",
    title: "Automated Monopoly Board",
    status: "completed",
    zone: "hardware",
    image: "assets/monopoly.JPG",
    images: [],
    summary: "Electromechanical Monopoly board enabling human vs. bot gameplay — 1st place finish.",
    description: "Led the electro-mechanical design of a robotic Monopoly board game, collaborating with a team of six to develop a fully automated system enabling human vs. bot gameplay. Responsible for mechanism design, motor selection, PCB layout integration, and system assembly. The board handles dice rolling, piece movement, and card drawing autonomously, interfacing with a game-logic controller.",
    tags: ["Mechatronics", "Arduino", "Fabrication", "Automation", "Systems Design"],
    links: [
      { label: "Presentation", url: "https://docs.google.com/presentation/d/1Zo48lH4bJnZnYgCcLSDdN7ztpLo-VSnM-4SqTbtNbzY/edit?usp=sharing" }
    ]
  },

  {
    id: "walkane",
    title: "Walkane — Walker-Cane Hybrid",
    status: "completed",
    zone: "hardware",
    image: "assets/walkane_real.png",
    images: [],
    summary: "Collapsible assistive device bridging cane and walker — 2nd place in competition.",
    description: "Engineered a hybrid walker-cane with a collapsible mechanism designed to improve stability during transitions between stairs and flat ground. The design addresses a critical gap in assistive mobility: standard canes are insufficient on flat ground, while full walkers are impractical on stairs. The collapsible linkage allows rapid reconfiguration with one hand. Won 2nd place in the USC mechanical design competition.",
    tags: ["Product Design", "DFM", "SolidWorks", "Mechanisms", "Prototyping"],
    links: []
  },

  {
    id: "alarm",
    title: "Smart Alarm Clock — REM Monitoring",
    status: "completed",
    zone: "hardware",
    image: "assets/alarm.png",
    images: [],
    summary: "Arduino DAQ alarm that tracks BPM to wake users during optimal REM sleep — 1st place hackathon.",
    description: "Built a smart alarm clock integrating a pulse oximeter sensor and Arduino-based data acquisition system to track heart rate (BPM) throughout the night. Leveraged sleep cycle research correlating BPM patterns to REM stages to trigger the alarm during a light-sleep window, improving wakefulness quality. Won 1st place at the USC HackIoT 2023 hackathon.",
    tags: ["Arduino", "Sensors", "DAQ", "IoT", "Sleep Science"],
    links: [
      { label: "Code", url: "https://github.com/anuhashah/USCHackIoT2023" }
    ]
  },

  {
    id: "strandbeest",
    title: "Strandbeest Model",
    status: "completed",
    zone: "robotics",
    image: "assets/strandbeest.png",
    images: [],
    summary: "3D-printed scale model of Theo Jansen's wind-powered kinematic walking mechanism.",
    description: "Designed and 3D printed a scaled-down functional model of Theo Jansen's Strandbeest — a wind-powered walking mechanism using a specific 13-bar linkage to convert rotational input into a smooth walking gait. The project focused on understanding complex kinematic linkages, tolerance stack-up for printed joints, and achieving smooth motion without traditional control systems.",
    tags: ["Kinematics", "Mechanisms", "3D Printing", "Linkage Design"],
    links: []
  },

  {
    id: "kothcar",
    title: "2-DoF Bluetooth Car",
    status: "completed",
    zone: "robotics",
    image: "assets/kothcar.jpg",
    images: [],
    summary: "Custom-built Arduino car with Bluetooth remote control and two-axis steering.",
    description: "Designed and built a two-degree-of-freedom remote-controlled car with Bluetooth communication. The system integrates Arduino microcontroller, motor drivers, and a Bluetooth module to enable real-time remote navigation. Custom chassis was fabricated to house all electronics, with independent control of drive speed and steering angle from a phone interface.",
    tags: ["Arduino", "Bluetooth", "Fabrication", "Controls", "Mechatronics"],
    links: []
  }

];

// ─────────────────────────────────────────────────────────────

const experience = [

  {
    id: "lumindt",
    company: "Lumindt Labs",
    logo: "assets/lumindt.JPG",
    role: "Mechanical Engineering Intern",
    dates: "May 2025 – Aug 2025",
    location: "San Francisco, CA",
    zone: "cleantech",
    bullets: [
      "Developed a transient hot-wire sensor system using Raspberry Pi DAQ, Python automation, and 3D-printed test rig to measure thermal conductivity of four metal powders (<10% uncertainty), enabling material down-selection",
      "Designed a production-ready skid for 24 electrolyzers (300 kg) with optimized manifold design for hydrogen, coolant, and water lines, balancing structural strength, minimal footprint, and serviceability",
      "Built an Excel-based heat exchanger and coolant loop calculator to evaluate effects of coolant composition on specific heat, efficiency, and operating thresholds, informing system-level thermal management",
      "Designed and assembled a modular 250 kW fuel cell frame (200 kg capacity) using SolidWorks CAD, weldment design, structural calculations, and machining — combining a welded steel base with carbon steel tubing and 8020 extrusions",
      "Programmed Python modules for DAQ, relay boards, and automation workflows, streamlining powder activation testing and hydrogen gas handling",
      "Supported process engineering by selecting BOP components (pumps, valves), fabricating custom adapters, and conducting ASME standard-based preliminary stress analyses"
    ],
    links: []
  },

  {
    id: "makerspace",
    company: "Baum Family Makerspace",
    logo: "assets/machining.jpg",
    role: "Student Worker",
    dates: "Sep 2023 – Present",
    location: "Los Angeles, CA",
    zone: "hardware",
    bullets: [
      "Program and operate Haas CNC, ProtoTRAK, Omax waterjet, and laser cutter to manufacture GD&T precision components, interpret technical drawings, and optimize toolpaths in MasterCam",
      "Fabricated 100+ 3D printed prototypes (PLA, resin, carbon fiber), supporting 12+ design teams and 80+ research labs with design for manufacturing (DFM) guidance, including FSAE wing elements"
    ],
    links: []
  },

  {
    id: "tutr",
    company: "TuTr Hyperloop",
    logo: "assets/tutrchassis.jpg",
    role: "Mechanical Engineering Intern",
    dates: "May 2023 – Aug 2023",
    location: "Los Angeles, CA",
    zone: "robotics",
    bullets: [
      "Optimized chassis weight by 30% while maintaining structural integrity through 1D and 3D structural analysis in ANSYS Mechanical and SolidWorks",
      "Developed and simulated an air gap control system (±6 mm tolerance) for a linear induction motor using MATLAB Simulink"
    ],
    links: []
  },

  {
    id: "rld",
    company: "Robotic Locomotion & Dynamics Lab, USC",
    logo: "assets/robotframe.jpg",
    role: "Mechanical Design Engineer",
    dates: "Jan 2023 – May 2023",
    location: "Los Angeles, CA",
    zone: "robotics",
    bullets: [
      "Devised a 4-link leg mechanism with custom holding frame for a force-sensing direct-drive quadrupedal robot designed for complex terrain navigation, using SolidWorks",
      "Built a motor feedback test stand using linear actuators and stepper motors to support terrain adaptability research"
    ],
    links: []
  },

  {
    id: "niwe",
    company: "National Institute of Wind Energy (NIWE)",
    logo: "assets/wind blade.png",
    role: "Wind Blade Intern",
    dates: "Jun 2022 – Aug 2022",
    location: "Chennai, India",
    zone: "cleantech",
    bullets: [
      "Designed, analyzed, and optimized a 5.7 m wind turbine blade using SolidWorks and ANSYS Mechanical as a research project for the certification department, identifying critical load cases"
    ],
    links: [
      { label: "Internship Report", url: "https://github.com/kawadreeth/Wind-turbine-blade/blob/main/Niwe%20Internship%20Report.pdf" }
    ]
  }

];

// ─────────────────────────────────────────────────────────────

const skills = {
  cleantech: {
    label: "Cleantech & Energy",
    icon: "⚡",
    categories: [
      {
        label: "Simulation & Analysis",
        items: ["ANSYS Fluent", "CFD", "TotalSim", "Thermal Analysis", "FEA"]
      },
      {
        label: "Domain",
        items: ["Wind Energy", "Hydrogen Systems", "Fluid Systems", "Heat Transfer", "Electrolyzer BOP"]
      },
      {
        label: "Courses",
        items: ["Heat Transfer", "Measurement & Instrumentation", "CAE"]
      }
    ]
  },
  robotics: {
    label: "Robotics & Controls",
    icon: "🤖",
    categories: [
      {
        label: "Programming",
        items: ["Python", "MATLAB / Simulink", "LabVIEW", "Arduino", "C++"]
      },
      {
        label: "Systems & Tools",
        items: ["Control Systems", "DAQ", "Raspberry Pi", "Mechatronics", "Sensors"]
      },
      {
        label: "Courses",
        items: ["Dynamic Systems", "MEMS", "Accelerated Python", "Mechanics of Materials"]
      }
    ]
  },
  hardware: {
    label: "Hardware & Manufacturing",
    icon: "🔧",
    categories: [
      {
        label: "CAD & Simulation",
        items: ["SolidWorks", "Fusion 360", "Siemens NX", "MasterCam", "ANSYS Mechanical"]
      },
      {
        label: "Fabrication",
        items: ["CNC Milling", "Lathing", "3D Printing", "Composite Layup", "Waterjet", "Laser Cutting"]
      },
      {
        label: "Methods",
        items: ["GD&T", "DFM", "Weldment Design", "Structural Analysis", "ASME Standards"]
      }
    ]
  }
};
