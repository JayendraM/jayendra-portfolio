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
    image: "/images/awards/gold-medalist.png",
  },
  {
    id: "best-capstone",
    title: "Best Capstone Project Award",
    context: "Undergraduate Thesis",
    image: "/images/awards/best-capstone-award.jpg",
  },
  {
    id: "best-paper-peis",
    title: "Best Paper Award",
    context: "PEIS 2024 Conference, NIT",
    image: "/images/awards/best-paper-award.jpg",
  },
  {
    id: "vit-meritorious",
    title: "VIT Meritorious Award — Rank 1",
    context: "2021, 2022, 2023, 2024",
    image: "/images/awards/meritorious-award.jpeg",
  },
  {
    id: "raptee-hackathon",
    title: "Winner — RAPTEE INNOVAGE Hackathon",
    context: "Electric Vehicle Innovation Challenge",
    image: "/images/awards/raptee.png",
  },
];
