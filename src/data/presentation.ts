type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "tressa1930@gmail.com",
  title: "Tressa Pantalena",
  description:
    "Dedicated and analytical undergraduate neuroscience student with a great interest in research. Strong communicator with experience in public speaking. Enthusiastic and efficient research assistant planning to pursue a terminal degree.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/tressap",
    },
    {
      label: "Twitter",
      link: "https://twitter.com/TressaPantalena",
    },
    {
      label: "Github",
      link: "https://github.com/tr3ssa",
    },
  ],
};

export default presentation;
