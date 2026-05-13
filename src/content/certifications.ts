export type CertificationEntry = {
  id: string;
  title: string;
  context: string;
  image?: string;
};

export const certifications: CertificationEntry[] = [
  {
    id: "product-mgmt",
    title: "Product Management",
    context: "Professional Certification",
  },
  {
    id: "lean-six-sigma",
    title: "Lean Six Sigma Foundations",
    context: "PMI",
  },
  {
    id: "ev-part-1",
    title: "Electric Vehicles Part 1",
    context: "Top 5%, Silver Badge",
  },
  {
    id: "solidworks-cswp",
    title: "Certified SOLIDWORKS Professional",
    context: "CSWP",
  },
  {
    id: "automotive-systems",
    title: "Fundamentals of Automotive Systems",
    context: "Top 5%, Silver Badge",
  },
];
