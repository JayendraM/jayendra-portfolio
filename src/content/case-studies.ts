export type CaseStudyMeta = {
  role: string;
  company: string;
  duration: string;
  team: string;
  tech: string;
};

export type CaseStudyDecision = {
  title: string;
  alternatives: string;
  tradeoff: string;
};

export type CaseStudy = {
  slug: string;
  breadcrumb: string;
  heroTitle: string;
  heroSub: string;
  heroVisualLabel: string;
  heroImage?: string;
  heroMetrics: string[];
  meta: CaseStudyMeta;
  overview: string;
  problem: {
    body: string;
    pullQuote: string;
    pains?: string[];
  };
  approach: {
    body: string[];
  };
  decisions: CaseStudyDecision[];
  outcome: string;
  reflection: string;
  next: { label: string; href: string };
};

export const caseStudies: Record<string, CaseStudy> = {
  "nozzle-force-bed-leveling": {
    slug: "nozzle-force-bed-leveling",
    breadcrumb: "PROJECTS / FEATURED 01",
    heroTitle:
      "Nozzle Force Sensitive Auto Bed Leveling System for Carbon Fiber 3D Printers",
    heroSub:
      "Eliminating a primary source of customer frustration through a fully automated, force-sensitive calibration system.",
    heroVisualLabel: "FORCE-SENSITIVE AUTO BED LEVELING — HERO IMAGE",
    heroImage: "/images/projects/3d-printer.png",
    heroMetrics: [
      "MANUAL CALIBRATION TIME · ↓ 100%",
      "INTEGRATION COST · MINIMAL",
      "0-TO-1 LIFECYCLE · OWNED END-TO-END",
    ],
    meta: {
      role: "Product Design Engineer / De-facto PM",
      company: "Fabheads Automation",
      duration: "6 months (Jan–Jun 2024)",
      team: "Cross-functional: hardware, firmware, testing",
      tech: "Strain-gauge load cell · Custom PCB · FEA simulation · Embedded firmware",
    },
    overview:
      "Carbon-fiber 3D printers have a critical reliability problem: manual bed leveling. The process is inconsistent, error-prone, and a top driver of print-failure rates. I led a focused 0-to-1 product improvement to eliminate it — defining the problem, scoping the project, validating market feasibility, and delivering a fully automated force-sensitive bed-leveling system that integrated into existing hardware without re-engineering the platform.",
    problem: {
      body: "Print-failure rates were significantly higher than benchmarks for the segment. Field data and direct customer conversations pointed to one root cause: inconsistent manual bed leveling. Operators were spending 10–20 minutes calibrating before each print, and even careful calibration didn't guarantee a successful first layer. This translated into wasted material, lost machine hours, and erosion of customer trust in the platform's reliability.",
      pullQuote:
        "The biggest reason our customers were frustrated wasn't print quality — it was that they couldn't trust the first layer.",
      pains: [
        "Manual calibration time per print: 10–20 min",
        "Inconsistent results across operators",
        "No feedback loop — operators discovered failure only mid-print",
        "High material waste per failed print",
        "Damaged customer confidence in the product",
      ],
    },
    approach: {
      body: [
        "I framed this as a product-improvement project with measurable success criteria: zero manual calibration, no platform re-engineering, ship within the existing release cycle.",
        "Step one was scoping. I conducted a cost-benefit analysis against three alternatives (commercial load cells, inductive probes, custom strain gauges) and built a decision matrix weighing cost, integration complexity, and signal fidelity. The custom strain-gauge approach won — lowest BOM impact, highest control over signal processing.",
        "Step two was technical design. I designed a custom strain-gauge load cell and optimized its geometry via FEA simulation to maximize sensitivity within the existing machine envelope. I engineered the PCB to integrate the analog front-end and developed the embedded firmware from scratch, including a calibration routine using polynomial signal processing for high-precision bed-mesh generation.",
        "Step three was integration and validation. Because the strict design constraint was no major component redesigns, I drove the integration plan with the mechanical and firmware teams to make sure the new sub-system slotted into the existing architecture cleanly. We ran extensive reliability testing across material types and bed conditions.",
      ],
    },
    decisions: [
      {
        title: "Custom strain gauge over off-the-shelf load cell",
        alternatives:
          "Commercial load cell (faster integration, higher BOM cost, mismatch with mechanical envelope) · Inductive probe (cheaper but lower signal fidelity for our use case)",
        tradeoff:
          "More R&D time up front, but ~70% lower BOM impact and full control over signal processing.",
      },
      {
        title: "Reuse existing system architecture instead of re-engineering",
        alternatives:
          "Redesign the print head to accommodate a more elegant probing system",
        tradeoff:
          "Constrained design space, but dramatically faster time-to-integration and zero platform regression risk.",
      },
      {
        title: "Polynomial signal processing over simple thresholding",
        alternatives:
          "Threshold-based touch detection (simpler firmware, less robust)",
        tradeoff:
          "More firmware complexity, but accuracy held up across material and temperature variations.",
      },
    ],
    outcome:
      "Manual calibration effort dropped to zero. Print-failure rates fell across customer machines. The system integrated into the existing hardware platform with no major redesigns, keeping development cost and time-to-ship low. Most importantly, the change removed a known driver of customer frustration and made the platform's reliability story significantly stronger.",
    reflection:
      "If I were running this again, I'd front-load customer testing earlier. We validated the technical performance thoroughly but only got real customer feedback after the integration was complete. Some of our calibration sequence UX could have been simplified earlier if we'd watched operators use the prototype on their own machines two months sooner. That's a habit I'm carrying forward: technical validation and user validation should run in parallel, not in sequence.",
    next: {
      label: "Next case study — 6-Axis Robotic 3D Printer",
      href: "/projects/6-axis-robotic-printer",
    },
  },

  "6-axis-robotic-printer": {
    slug: "6-axis-robotic-printer",
    breadcrumb: "PROJECTS / FEATURED 02",
    heroTitle:
      "Concept to Prototype — Leading 0-1 Development of a 6-Axis Robotic 3D Printer",
    heroSub:
      "Building a next-generation printing system from market need to validated prototype.",
    heroVisualLabel: "6-AXIS ROBOTIC 3D PRINTER — HERO IMAGE",
    heroImage: "/images/projects/6-axis-printer-realistic.png",
    heroMetrics: [
      "0→1 CONCEPT TO PROTOTYPE",
      "CROSS-FUNCTIONAL TEAM LEAD",
      "DFM-OPTIMIZED · BOM-VALIDATED",
    ],
    meta: {
      role: "Product Design Engineer / Project Lead",
      company: "Fabheads Automation",
      duration: "End-to-end concept to prototype",
      team: "Cross-functional: mechanical, electrical, firmware",
      tech: "6-DOF kinematics · Custom PCB · CAD · DFM/DFAM · Firmware tuning",
    },
    overview:
      "Traditional 3-axis 3D printers can't produce complex non-planar geometries, which limits what carbon-fiber parts customers can manufacture and what end-applications are economically viable. I led the complete 0-to-1 development of a 6-axis robotic 3D printer to address that gap — from initial market-need identification through prototype validation.",
    problem: {
      body: "Carbon-fiber parts that require complex curvature, non-planar layering, or fiber-directionality optimization can't be efficiently produced on standard 3-axis systems. Customers in aerospace, defense, and mobility were either tooling around the limitation with multi-step processes or sourcing parts outside their preferred supply chain. The market signal was clear: a printer capable of true multi-axis motion would open up a new product segment.",
      pullQuote:
        "The market wasn't waiting for a better 3-axis printer. It was waiting for a printer that worked the way the parts actually wanted to be made.",
    },
    approach: {
      body: [
        "I built the product roadmap top-down. First, identified the target part geometries and validated demand through customer conversations. Second, I created the full Bill of Materials (BOM) and ran cost analysis early to make sure the system could be priced into the market at margin. Third, I applied Design for Manufacturing (DFM) principles at the design stage, not as a post-design optimization — every part was scoped for cost and assembly from the first CAD revision.",
        "Technically, I designed the complete mechanical system from scratch and created the detailed CAD models. I engineered the motor systems and all associated circuitry, including the PCB design. I owned the full prototype assembly, system configuration, firmware selection and tuning, and applied Design for Additive Manufacturing (DFAM) principles to optimize the parts that the system itself would print.",
        "I managed cross-functional efforts between mechanical design, electrical engineering, and firmware development — the trickiest part wasn't any single discipline, it was making sure the three sub-systems converged on a single design intent.",
      ],
    },
    decisions: [
      {
        title: "Robotic-arm-style kinematics over gantry-style multi-axis",
        alternatives:
          "Add 2 rotational axes to a traditional gantry (cheaper, simpler kinematics) vs. true 6-DOF robotic arm",
        tradeoff:
          "More complex motion planning and kinematics solving, but a dramatically larger printable envelope and access to true non-planar paths.",
      },
      {
        title: "In-house firmware tuning over off-the-shelf slicer integration",
        alternatives: "Use existing multi-axis slicer with stock firmware",
        tradeoff:
          "Longer firmware development, but full control over motion profiles and print quality.",
      },
      {
        title: "DFM/DFAM at design stage, not after",
        alternatives:
          "Design freely, optimize for cost and assembly after prototype validation",
        tradeoff:
          "Slightly slower initial CAD work, but the prototype was assembly-ready and BOM-stable from day one — avoided a typical second-round redesign.",
      },
    ],
    outcome:
      "Delivered a fully functional 6-axis robotic 3D printer prototype validated against the target geometries. The system met print-quality benchmarks and stayed within the BOM cost ceiling defined at project start. The prototype became the foundation for the next-generation product line, with the cross-functional development model proving out for future builds.",
    reflection:
      "The biggest lesson was about firmware risk. We scoped the firmware work as \"tuning and configuration\" early on, but the reality of 6-DOF motion planning meant we ended up developing significant custom logic. Next time, I'd scope firmware as its own first-class workstream from day one, not as a downstream activity on top of mechanical and electrical. The other lesson: design reviews with all three disciplines in the same room early on prevented the kind of integration pain I've seen on other multi-disciplinary projects. That pattern is worth keeping.",
    next: {
      label: "Back to all projects",
      href: "/#projects",
    },
  },
};

export const caseStudyTOC = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "approach", label: "Approach" },
  { id: "decisions", label: "Decisions" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];
