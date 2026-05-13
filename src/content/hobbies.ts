export type Hobby = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

export const hobbies: Hobby[] = [
  {
    id: "weekend-builder",
    title: "Car Enthusiast — Weekend Builder",
    description:
      "This is more than a hobby; it's hands-on engineering. Regularly hands-on with advanced vehicle diagnostics, ECU coding, and full mechanical and electrical retrofits. I also design, CAD model, and fabricate custom parts.",
    image: "/images/hobbies/weekend-builder.png",
  },
  {
    id: "karting",
    title: "Go Karting & Racing",
    description:
      "My passion for performance extends to the track. Avid kart racer, love the thrill of pure competition and tuning for the perfect lap. Took 1st place in my last competitive race this past February.",
    image: "/images/hobbies/karting.jpg",
    },
  {
    id: "rc-builds",
    title: "Building RC Cars and Planes",
    description:
      "My passion for mechatronics extends to building and flying custom remote-controlled vehicles. Full system integration challenge — assembling cars, drones, planes, programming flight-controller firmware, and tuning electronics for performance.",
    image: "/images/hobbies/rc-build.png",
    },
  {
    id: "off-roading",
    title: "Off-Roading & Exploring Trails",
    description:
      "As an extension of my \"Weekend Builder\" hobby, I take my 4x4 off the beaten path. Love the unique mechanical challenges and the adventure of navigating tough terrain.",
    image: "/images/hobbies/off-roading.jpg",
    },
  {
    id: "pickleball",
    title: "Pickleball",
    description:
      "When I'm not in the garage or workshop, you can usually find me on the pickleball court. Avid player — love the fast-paced, strategic, social nature of the game.",
    image: "/images/hobbies/pickleball.png",
    },
  {
    id: "quad-biking",
    title: "Quad Biking",
    description:
      "Whether it's on forest trails or open fields, I love the freedom and raw fun of quad biking. Exhilarating way to get outdoors and cover a lot of ground.",
    image: "/images/hobbies/quadbiking.jpg",
    },
];
