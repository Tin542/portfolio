import book from "../Assets/Projects/book.png";
import admin from "../Assets/Projects/amdin.png";
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
    imgPath: admin,
    title: "BookStore Admin",
    description:
      `The Admin Page, built with NestJS, EJS, and MVC, uses AJAX for dynamic API interactions. It enables efficient management of products, categories, reviews, promotions, users, orders, and the "About Us" page with a markdown editor. Account: admin/123456`,
    ghLink: "https://github.com/Tin542/bookstore-API",
    demoLink: "https://bookstore-api-n9jf.onrender.com/auth/login",
    isBlog: false,
  },
  {
    imgPath: portfolio,
    title: "Portfolio",
    description:
      `A personal portfolio website to showcase my projects, skills, and experience as a Full-stack Developer. Designed a clean and responsive user interface with smooth navigation and animations for a great user experience.`,
    ghLink: "https://github.com/Tin542/porfolio",
    demoLink: "https://nguyenthanhtin.online/",
    isBlog: false,
  },
];
