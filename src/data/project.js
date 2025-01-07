import book from "../Assets/Projects/book.png";
import portfolio from "../Assets/Projects/portfolio.png";

export const ProjectsData = [
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
