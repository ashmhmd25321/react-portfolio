import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React, Angular, HTML & CSS, as well as back-end technologies like JAVA, PHP, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a versatile Software Engineer with a strong foundation in frontend, backend and mobile development. I have hands-on experience building RESTful APIs, integrating machine learning models, and developing innovative mobile applications. I’m passionate about exploring new technologies and thrive in dynamic environments that require problem-solving and creative thinking. With a keen interest in both software and cloud technologies, I’ve successfully contributed to various projects, from e-commerce platforms to AI-powered mobile applications. Eager to embrace new challenges and continuously enhance my skills.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Freelance Software Developer",
    company: "Freelancing",
    description: `Developed both full-stack web and mobile applications, as well as designed and implemented machine learning models.`,
    technologies: ["Javascript", "React.js", "Python", "MongoDB", "Java", "Spring Boot", "PHP", "MySQL"],
  },
  {
    year: "2022 - Present",
    role: "Part-Time Software Developer",
    company: "ICT OPTION",
    description: `Developed RESTful APIs to provide data to an Angular front-end based on user inputs, and built mobile applications that integrate deep learning algorithms.`,
    technologies: ["HTML", "CSS", "Vue.js", "MySQL", "React", "Angular", "Android Studio", "Flask API"],
  },
  {
    year: "2023 - 2024",
    role: "Back-End Developer Intern",
    company: "Megabliss Worldwide",
    description: `Developed a payment API using the Stripe payment gateway for the Megabliss mobile application, enabling secure and efficient transactions. Additionally, implemented a bill-splitting feature, allowing users to divide payments among multiple participants seamlessly.`,
    technologies: ["Spring Boot", "Stripe Payment Gateway", "Postgres", "Postman"],
  },
];

export const PROJECTS = [
  {
    title: "OneMarket Buy & Sell Website",
    image: project1,
    description:
      "One Market is an online platform where users can browse, manage, and advertise products. It offers secure authentication, user profiles, and an admin dashboard for product management. The site is designed to be responsive and user-friendly, ensuring a smooth experience for both buyers and sellers.",
    technologies: ["React", "Firebase", "Namecheap Hosting"],
  },
  {
    title: "VisionC E-commerce Website",
    image: project2,
    description:
      "E-commerce web application using React for Vision C, an eye care company specializing in specs. The platform provides a user-friendly interface for browsing and purchasing eyewear, ensuring a seamless shopping experience.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    title: "MMH EduSense Project",
    image: project3,
    description:
      "EduSense is a React-based platform designed for Grade 1 to 5 students. It predicts children's learning styles and teachers' teaching approaches, providing tailored strategies for better engagement. The project also includes interactive games to enhance children's performance and learning outcomes.",
    technologies: ["React", "Firebase", "Python", "Flask API", "Machine Learning"],
  },
  {
    title: "Payment Gateway Project",
    image: project4,
    description:
      "This project builds a payment system in Java with Spring Boot, integrating Stripe for payments and user-order association. It uses Jackson for JSON conversion, features input validation, exception handling, real-time payments, and REST APIs for client-server communication, tested via Postman.",
    technologies: ["Java", "Spring Boot", "PostgresSQL", "Stripe API"],
  },
  {
    title: "Pocket Guide Project",
    image: project5,
    description:
      "Developed a mobile application designed to guide tourists visiting Sri Lanka. The app uses deep learning algorithms to detect and identify statues, temples, and ancient ruins. It features an intelligent chatbot that provides detailed information about these landmarks and offers guidance on local rules and regulations, enhancing the overall travel experience.",
    technologies: ["Flutter", "Python", "Firebase", "Deep Learning", "Heroku"],
  },
];

export const CONTACT = {
  address: "Kurunagela, Sri Lanka",
  phoneNo: "+94 773098074 ",
  email: "ashfak25321@gmail.com",
};
