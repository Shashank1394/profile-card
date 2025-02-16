/**
 * data.js
 *
 * This file contains an array of dummy data representing different individuals.
 * Each object in the array includes:
 * - name: The individual's full name.
 * - image: The filename of the individual's image.
 * - intro: A short introduction or bio.
 * - skills: An array of skills the individual is proficient in.
 * - emojis: An array of emojis representing their personality or style.
 *
 * This data can be imported and used across the frontend and backend of your application.
 */

const data = [
  {
    name: "Kyle Cambridge",
    image: "kyle-cambridge.jpg", // Updated image filename
    intro:
      "Kyle is a versatile full-stack developer with a passion for innovation. He bridges creative front-end design with robust back-end development to deliver seamless user experiences and optimized performance.",
    skills: ["Vue.js", "Node.js", "GraphQL", "TypeScript"],
    emojis: ["🔥", "🚀", "💡", "⚡"],
  },
  {
    name: "Alice Johnson",
    image: "alice-johnson.jpg",
    intro:
      "Alice is a passionate front-end developer with a keen eye for design and user experience. She loves creating dynamic interfaces using modern technologies.",
    skills: ["React", "JavaScript", "CSS", "HTML"],
    emojis: ["😊", "🚀", "👍"],
  },
  {
    name: "Bob Smith",
    image: "bob-smith.jpg",
    intro:
      "Bob is a skilled full-stack engineer who enjoys building robust and scalable web applications. His expertise spans from server-side programming to interactive UI development.",
    skills: ["Node.js", "Express", "MongoDB", "Angular"],
    emojis: ["💻", "🔥", "👌"],
  },
  {
    name: "Charlie Daniels",
    image: "charlie-daniels.jpg",
    intro:
      "Charlie is a creative UI/UX designer who combines artistic flair with technical proficiency. He is dedicated to designing user-friendly interfaces that delight users.",
    skills: ["Figma", "Sketch", "Adobe XD", "HTML+CSS"],
    emojis: ["🎨", "✨", "👏"],
  },
  {
    name: "Diana Prince",
    image: "diana-prince.jpg",
    intro:
      "Diana is a seasoned software engineer with a focus on security and system optimization. She brings a wealth of experience in developing high-performance applications.",
    skills: ["C++", "Python", "Go", "Rust"],
    emojis: ["🛡️", "⚡", "💡"],
  },
  {
    name: "Ethan Brown",
    image: "ethan-brown.jpg",
    intro:
      "Ethan excels in back-end development and system architecture. He is passionate about designing efficient and maintainable code that powers large-scale applications.",
    skills: ["Java", "Spring Boot", "SQL", "Docker"],
    emojis: ["🗄️", "📈", "🔧"],
  },
  {
    name: "Fiona Wilson",
    image: "fiona-wilson.jpg",
    intro:
      "Fiona is a forward-thinking developer who integrates art with technology. Her expertise lies in creating visually appealing websites with a strong emphasis on responsiveness.",
    skills: ["Vue.js", "Nuxt", "SCSS", "Tailwind CSS"],
    emojis: ["🌟", "🎯", "💖"],
  },
];

export default data;
