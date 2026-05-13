export type FeaturedProject = {
  slug: string;
  index: string;
  title: string;
  problem: string;
  outcome: string;
  metrics: string[];
  visualLabel: string;
  href: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "nozzle-force-bed-leveling",
    index: "FEATURED 01",
    title: "Nozzle Force Sensitive Auto Bed Leveling System",
    problem:
      "Manual bed leveling on carbon-fiber 3D printers was a top customer pain point, driving high print-failure rates.",
    outcome:
      "Shipped a force-sensitive auto-calibration system that brought manual calibration effort to zero.",
    metrics: [
      "MANUAL CALIBRATION · ↓ 100%",
      "INTEGRATION COST · MINIMAL",
      "0-TO-1 LIFECYCLE OWNED",
    ],
    visualLabel: "FORCE-SENSITIVE AUTO BED LEVELING",
    href: "/projects/nozzle-force-bed-leveling",
  },
  {
    slug: "6-axis-robotic-printer",
    index: "FEATURED 02",
    title: "6-Axis Robotic 3D Printer",
    problem:
      "3-axis printers can't produce complex non-planar geometries, limiting what carbon-fiber parts customers could manufacture.",
    outcome:
      "Led the 0-to-1 development of a next-gen 6-axis robotic 3D printer from concept to validated prototype.",
    metrics: [
      "0→1 CONCEPT TO PROTOTYPE",
      "CROSS-FUNCTIONAL LEAD",
      "DFM-OPTIMIZED",
    ],
    visualLabel: "6-AXIS ROBOTIC 3D PRINTER",
    href: "/projects/6-axis-robotic-printer",
  },
];
