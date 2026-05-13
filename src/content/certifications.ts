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
    image: "/images/certifications/leland-pm.jpg",
  },
  {
    id: "lean-six-sigma",
    title: "Lean Six Sigma Foundations",
    context: "PMI",
    image: "/images/certifications/lean-six-sigma.jpg",
  },
  {
    id: "ev-part-1",
    title: "Electric Vehicles Part 1",
    context: "Top 5%, Silver Badge",
    image: "/images/certifications/nptel-ev.jpg",
  },
  {
    id: "solidworks-cswp",
    title: "Certified SOLIDWORKS Professional",
    context: "CSWP",
    image: "/images/certifications/solidworks-cswp.jpg",
  },
  {
    id: "automotive-systems",
    title: "Fundamentals of Automotive Systems",
    context: "Top 5%, Silver Badge",
    image: "/images/certifications/nptel-auto.jpg",
  },
];
