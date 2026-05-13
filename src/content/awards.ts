export type AwardEntry = {
  id: string;
  title: string;
  context: string;
  image?: string;
};

export const awards: AwardEntry[] = [
  {
    id: "gold-medalist",
    title: "Gold Medalist",
    context: "Mechatronics and Automation Engineering, VIT",
  },
  {
    id: "best-capstone",
    title: "Best Capstone Project Award",
    context: "Undergraduate Thesis",
  },
  {
    id: "best-paper-peis",
    title: "Best Paper Award",
    context: "PEIS 2024 Conference, NIT",
  },
  {
    id: "vit-meritorious",
    title: "VIT Meritorious Award — Rank 1",
    context: "2021, 2022, 2023, 2024",
  },
  {
    id: "raptee-hackathon",
    title: "Winner — RAPTEE INNOVAGE Hackathon",
    context: "Electric Vehicle Innovation Challenge",
  },
];
