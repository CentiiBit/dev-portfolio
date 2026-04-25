export const siteConfig = {
  name: "Mark Vincent F. Villegas",
  title: "Computer Science Graduate",
  description: "Portfolio website of Mark Vincent",
  accentColor: "#1d4ed8",
  social: {
    email: "markvillegas0@gmail.com",
    linkedin: "https://www.linkedin.com/in/mark-vincent-villegas/",
    github: "https://github.com/CentiiBit",
  },
  aboutMe:
    "I am a Computer Science graduate from the Immaculate Conception I-College of Arts and Technology. Throughout my academic career, I developed a strong foundation in C#, which I have expanded into the blockchain space. I developed a Decentralized Lottery prototype modeled after the PCSO 6/58 Ultra Lotto—which I presented at the ICBEST 2025 conference Additionally, I built a Blockchain-Based Procurement System using Vue.js and Solidity, focusing on transparent and immutable record-keeping. My experience also includes a 250-hour internship at Microclever Enterprises Inc., where I served as a Network Administrator and IT Support Intern.",
  skills: ["C#", "React.js", "Node.js", "Vue.js", "Blockchain"],
  projects: [
    {
      name: "Decentralized Lottery (PCSO 6/58 Prototype)",
      description:
        "A blockchain-powered lottery system modeled after the Ultra Lotto, utilizing smart contracts for transparent and tamper-proof drawing.",
      link: "https://github.com/CentiiBit/Lottery-System-Final",
      certificate: "/7-VILLEGAS.pdf",
      isThesis: true,
      skills: ["React.js", "Solidity", "Node.js"],
    },
    {
      name: " Blockchain Procurement System",
      description:
        "A procurement and liquidation system that integrates Ethereum smart contracts to ensure transparent, tamper-proof tracking of organizational budgets.",
      link: "https://github.com/CentiiBit/procurement-system",
      skills: ["Vue.js", "Node.js", "Solidity", "Supabase"],
    },
  ],
  experience: [
    {
      company: "Microclever Enterprise Inc.",
      title: "Network Administrator & IT Support Intern",
      dateRange: "May 2025 - July 2025",
      description:
        "Completed a 250-hour practicum focused on network maintenance and providing technical IT support in a professional workplace environment.",
    },
  ],
  education: [
    {
      school: "Immaculate Conception I-College of Arts and Technology",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2022 - 2026",
      achievements: [
        "International Conference of Business, Education, Science and Technology (ICBEST) 2025 Presenter",
        "BSCS Representative of WIWIT CLub",
      ],
    },
  ],
};
