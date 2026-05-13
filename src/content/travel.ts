export type TravelEntry = {
  id: string;
  destination: string;
  caption: string;
  image?: string;
};

export const travel: TravelEntry[] = [
  {
    id: "acadia",
    destination: "Chicago → Acadia National Park, Maine",
    caption: "3,000 MILES · ROAD TRIP",
  },
  {
    id: "masai-mara",
    destination: "Masai Mara, Kenya",
    caption: "WILDLIFE SAFARI",
  },
  {
    id: "manali",
    destination: "Coimbatore → Manali, India",
    caption: "9,000 KM · ROAD TRIP",
  },
  {
    id: "bali",
    destination: "Bali, Indonesia",
    caption: "GRADUATION TRIP",
  },
];
