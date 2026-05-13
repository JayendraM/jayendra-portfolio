export type ProjectCardData = {
  id: string;
  title: string;
  tag: string;
  description: string;
};

export const academicProjects: ProjectCardData[] = [
  {
    id: "plc-retrofit",
    title: "PLC-based production-line automation retrofit",
    tag: "AUTOMATION",
    description:
      "Designed and deployed a PLC-based control system to retrofit and automate an existing production conveyor line, improving system control and electrical efficiency.",
  },
  {
    id: "trr-arm",
    title: "3 DOF Robotic Arm (TRR) with Adaptive Gripper Prototype",
    tag: "ROBOTICS",
    description:
      "Designed arm kinematics and CAD model. Prototyped the adaptive gripper using 3D printing for rapid iteration, including circuit design, firmware, and control logic.",
  },
  {
    id: "smart-parking",
    title: "Machine Vision IoT Smart Parking Management System",
    tag: "IOT",
    description:
      "Parking solution leveraging machine vision for occupancy detection and IoT connectivity for real-time reporting and navigation.",
  },
  {
    id: "overtake-adas",
    title: "Overtake Prediction ADAS in IPG CarMaker",
    tag: "ADAS",
    description:
      "High-fidelity ADAS simulation model in IPG CarMaker for testing an overtake-prediction system tuned to Indian road conditions.",
  },
  {
    id: "canbus-telematics",
    title: "CANBUS Telematics for Electric Motorcycles",
    tag: "EV",
    description:
      "Embedded system to acquire and log critical vehicle data over CANBUS for remote telemetry and monitoring.",
  },
  {
    id: "weather-station",
    title: "Smart Weather Station with IoT for farmers",
    tag: "IOT",
    description:
      "Low-cost, multi-sensor weather station implementing IoT protocols for remote data acquisition.",
  },
  {
    id: "abs-enclosure",
    title: "Temperature-Controlled Enclosure for ABS Printing",
    tag: "3D PRINTING",
    description:
      "Heated enclosure for an FDM 3D printer to address ABS warping and layer-adhesion challenges with reliable thermal control.",
  },
  {
    id: "face-recognition",
    title: "Multi-Face Recognition with ANN for class attendance",
    tag: "ML",
    description:
      "Real-time attendance system using Python and OpenCV with a custom-trained ANN for multi-face detection and recognition from live video.",
  },
  {
    id: "bspd-formula",
    title: "BSPD, Pre-Charge, Discharge Circuits for Formula Team",
    tag: "EV",
    description:
      "Multi-layer PCB for the Brake System Plausibility Device and pre-charge/discharge safety circuits — high-voltage safety, competition-compliant.",
  },
  {
    id: "bms-simulink",
    title: "BMS Simulation in MATLAB Simulink",
    tag: "EV",
    description:
      "Battery Management System simulation model to test and validate cell voltage balancing.",
  },
  {
    id: "wpt-coil",
    title: "Comparative Study of Coil Shapes for EV Wireless Power Transfer",
    tag: "RESEARCH",
    description:
      "Research paper presented at PEIS 2024 (NIT), Best Paper Award.",
  },
];
