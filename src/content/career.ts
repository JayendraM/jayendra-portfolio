export type CareerEntry = {
  id: string;
  dateRange: string;
  location: string;
  tag: "WORK";
  title: string;
  institution: string;
  descriptor?: string;
  bullets?: string[];
};

export const career: CareerEntry[] = [
  {
    id: "aanoor",
    dateRange: "JUN 2024 – JUL 2025",
    location: "COIMBATORE, INDIA",
    tag: "WORK",
    title: "Product Strategy and Operations",
    institution: "Aanoor Bagley Coir",
    descriptor:
      "Sustainable agritech manufacturing company specializing in coco peat and coir-based products for global horticulture markets.",
  },
  {
    id: "fabheads",
    dateRange: "JAN 2024 – JUN 2024",
    location: "CHENNAI, INDIA",
    tag: "WORK",
    title: "Product Design Engineer",
    institution: "Fabheads Automation",
    descriptor:
      "Deep-tech startup automating the manufacturing of composite and carbon-fiber components for aerospace, defense, and mobility using proprietary 3D printing and robotic systems.",
  },
  {
    id: "evitrc",
    dateRange: "AUG 2023 – MAR 2024",
    location: "CHENNAI, INDIA",
    tag: "WORK",
    title: "Research Intern (Part-Time)",
    institution: "Electric Vehicles Incubation, Testing and Research Centre (eVIT-RC)",
    descriptor:
      "Research division at VIT Chennai developing and testing EV technologies, including powertrains, BMS, and wireless charging.",
    bullets: [
      'Authored "Comparative Study of Coil Shapes for Electric Vehicle Resonant Wireless Power Transfer System" — published by Springer, presented at PEIS 2024 (NIT), won Best Paper Award.',
    ],
  },
  {
    id: "srivaru",
    dateRange: "MAY 2023 – JUL 2023",
    location: "COIMBATORE, INDIA",
    tag: "WORK",
    title: "Summer Intern",
    institution: "Srivaru Motors",
    descriptor:
      'Startup designing and manufacturing premium electric motorcycles, like the flagship "Prana," focused on sustainable two-wheeler transportation.',
  },
  {
    id: "autovit",
    dateRange: "JAN 2022 – DEC 2023",
    location: "CHENNAI, INDIA",
    tag: "WORK",
    title: "AUTOVIT Club — Robotics / Automation / AI Student Club",
    institution: "VIT Chennai",
    descriptor:
      "Student club member working on robotics and automation initiatives.",
  },
  {
    id: "craftsman",
    dateRange: "JUN 2022 – JUL 2022",
    location: "COIMBATORE, INDIA",
    tag: "WORK",
    title: "Summer Intern",
    institution: "Craftsman Automation",
    descriptor:
      "Large-scale engineering company specializing in automated storage systems, hoists, gears, and precision automotive component manufacturing.",
  },
  {
    id: "shaurya",
    dateRange: "2020 – 2022",
    location: "CHENNAI, INDIA",
    tag: "WORK",
    title: "Electrical Department",
    institution: "Shaurya Racing",
    descriptor:
      "Formula Student Racing team of VIT Chennai, competing in Formula Bharat.",
  },
];
