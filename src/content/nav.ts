export type NavItem = {
  id: string;
  label: string;
  href: string;
  number: string;
};

export const navItems: NavItem[] = [
  { id: "hero", label: "Home", href: "#hero", number: "01" },
  { id: "about", label: "About", href: "#about", number: "02" },
  { id: "education", label: "Education", href: "#education", number: "03" },
  { id: "career", label: "Career", href: "#career", number: "04" },
  { id: "projects", label: "Projects", href: "#projects", number: "05" },
  { id: "skills", label: "Skills", href: "#skills", number: "06" },
  { id: "awards", label: "Awards", href: "#awards", number: "07" },
  { id: "fun", label: "Fun", href: "#fun", number: "08" },
  { id: "contact", label: "Contact", href: "#contact", number: "09" },
];
