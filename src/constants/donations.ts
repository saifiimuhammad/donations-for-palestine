const idGenerator = () => {
  let id = 0;
  return () => ++id;
};

const generateId = idGenerator();

export type DonationType = {
  id: number;
  logo: string;
  name: string;
  link: string;
  image: string[];
  description: string;
};

export const donations: DonationType[] = [
  {
    id: generateId(),
    logo: "/assets/logos/pakaid.svg",
    name: "Pak Aid Welfare Trust",
    link: "https://pakaid.org.pk/project_info.php?id=175&name=RESCUE%20IN%20GHAZA",
    image: [
      "/assets/images/pakaid/1.jpg",
      "/assets/images/pakaid/2.jpg",
      "/assets/images/pakaid/3.jpg",
    ],
    description:
      "PAWT excels in global outreach through strategic partnerships with entities like Pak aid USA, Pak Afghan Cooperation Forum, Baseer Association Turkey, and Sened International. This enables PAWT to leverage its substantial humanitarian experience in Pakistan and extend its impact to regions including Afghanistan, Turkey, and Palestine.",
  },
  {
    id: generateId(),
    logo: "/assets/logos/alkhidmat.svg",
    name: "Alkhidmat Foundation",
    link: "https://alkhidmat.org/appeal/emergency-appeal-palestine-save-lives-in-gaza-today",
    image: [
      "/assets/images/alkhidmat/1.jpeg",
      "/assets/images/alkhidmat/2.jpeg",
      "/assets/images/alkhidmat/3.jpeg",
    ],
    description:
      "Alkhidmat Foundation is working in collaboration with local partners in Gaza, including Gazze Destek, Onsur, Hayrat, IHH, and Cansuyu, ensuring that every donation makes a tangible difference on the ground. See our latest work in Gaza, Palestine.",
  },
  {
    id: generateId(),
    logo: "/assets/logos/hdf.svg",
    name: "Human Developement Fund",
    link: "https://hdfund.org/",
    image: [
      "/assets/images/hdf/1.jpeg",
      "/assets/images/hdf/2.jpeg",
      "/assets/images/hdf/3.jpeg",
    ],
    description:
      "Families across Gaza have endured unimaginable hardships. Show your compassion by making a donation today. Your generosity helps provide essential support, including emergency aid, food, medical care, livelihood opportunities, educational programs for children, and more.",
  },
];
