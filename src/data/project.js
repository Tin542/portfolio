import book from "../Assets/Projects/book.png";
import portfolio from "../Assets/Projects/portfolio.png";
import tinbot from "../Assets/Projects/tinbot.png";

export const ProjectsData = [
  {
    imgPath: tinbot,
    title: "TinBot",
    description:
      `A chatbot application that provides automated responses to user queries, offering support and interaction across multiple platforms`,
    ghLink: "https://github.com/Tin542/chatbot",
    demoLink: "https://tinbot.vercel.app/",
    isBlog: false,
  },
  {
    imgPath: book,
    title: "BookStore",
    description:
      "An online bookstore using an MVC model for the admin page to manage inventory and orders efficiently, and a client-server model for the customer page to handle user interactions and transactions seamlessly.",
    ghLink: "https://github.com/Tin542/bookstore",
    demoLink: "https://bookstore-tinnt.vercel.app/home",
    isBlog: false,
  },
  {
    imgPath: portfolio,
    title: "Portfolio",
    description:
      `A personal portfolio website to showcase my projects, skills, and experience as a Full-stack Developer. Designed a clean and responsive user interface with smooth navigation and animations for a great user experience.`,
    ghLink: "https://github.com/Tin542/portfolio",
    demoLink: "https://nguyenthanhtin.online/",
    isBlog: false,
  },
];
