export type SkillColumn = {
  id: string;
  header: string;
  items: string[];
};

export const skillColumns: SkillColumn[] = [
  {
    id: "product",
    header: "PRODUCT & STRATEGY",
    items: [
      "New Product Development (0-to-1)",
      "Product Roadmap & Strategy",
      "Prioritization",
      "Customer Pain Point & User Research",
      "Requirements Definition",
      "Market Feasibility & Cost-Benefit Analysis",
      "User Experience (UX) Improvement",
    ],
  },
  {
    id: "program",
    header: "PROJECT & PROGRAM MANAGEMENT",
    items: [
      "End-to-End Project Lifecycle Management",
      "Lean Six Sigma",
      "Cross-Functional Team Leadership",
      "Hardware Prototyping Methodologies",
      "System Validation & Reliability Testing",
      "Stakeholder Management",
    ],
  },
  {
    id: "technical",
    header: "TECHNICAL",
    items: [
      "Python and SQL",
      "Power BI",
      "Mechanical Design & CAD",
      "Electronics Prototyping & PCB Design",
      "Firmware & System Integration",
      "Additive Manufacturing (3D Printing)",
      "FEA Simulation & Analysis",
      "Design for Manufacturing (DFM)",
    ],
  },
];
