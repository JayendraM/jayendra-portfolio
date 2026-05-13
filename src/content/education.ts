export type EducationEntry = {
  id: string;
  dateRange: string;
  location: string;
  tag: "EDU";
  title: string;
  institution: string;
  bullets: string[];
};

export const education: EducationEntry[] = [
  {
    id: "booth",
    dateRange: "AUG 2025 – JUN 2026",
    location: "CHICAGO, IL",
    tag: "EDU",
    title: "Master in Management",
    institution: "The University of Chicago Booth School of Business",
    bullets: [
      "Dean's Honor List — Fall 2025 and Winter 2026",
      "Related Coursework — New Product Lab, Building New Venture, Marketing Strategy, Microeconomics, Accounting, Statistics",
    ],
  },
  {
    id: "vit",
    dateRange: "2020 – 2024",
    location: "CHENNAI, INDIA",
    tag: "EDU",
    title: "Bachelor of Technology, Mechatronics and Automation Engineering",
    institution: "Vellore Institute of Technology (VIT)",
    bullets: [
      "Gold Medalist — 1st rank holder, GPA 9.63/10 (WES US equivalent 4.0/4.0)",
      "Best Capstone Project Award (undergraduate thesis)",
      "VIT Meritorious Award (1st Rank) with scholarship — 2021, 2022, 2023, 2024",
      "Best Paper Award, PEIS 2024 conference, NIT",
    ],
  },
];
