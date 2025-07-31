export default {
  home: "Home",
  projects: "Projects",
  about: "About",
  contact: "Contact", // ← celui-ci reste pour le menu
  availableForProjects: "Available for new projects",
  webDeveloperFullStack: "Web Developer - Full stack",
  introDescription:
    "I am in my second year of full stack development training, and I work as a technology lead in apprenticeship at Bonnefis Automobile.",
  discoverProjects: "Discover my projects",
  contactMe: "Contact me",
  projectsEyebrow: "PROJECTS",
  projectsTitle: "Main Achievements",
  projectsDescription:
    "Discover how I designed and developed web projects to meet specific needs.",
  discover: "Discover",

  project1: {
    title: "One Up Shad Landing Page",
    result1: "Project from scratch (HTML, CSS, JavaScript)",
    result2: "Dark interface with scroll animation",
    result3: "Promoting an iconic fishing lure",
  },

  project2: {
    title: "Atelier Bonnefis",
    result1: "First project made with Webflow",
    result2: "Created a website for the workshops (mechanics and bodywork)",
    result3: "Developed a website to reflect the new visual identity of the workshops",
  },

  project3: {
    title: "Showcase Car 3D",
    result1: "Project to discover Three.js",
    result2: "Developed an incredible user experience",
    result3: "Example of a canvas usable on a showcase website",
  },

  project4: {
    title: "Flip It marketplace",
    result1: "Final project of the first year at Holberton School",
    result2: "A marketplace with good UI and UX",
    result3: "Login part is currently on hold",
  },

  tapeWords: [
    "High Performance",
    "Dynamic",
    "Responsive",
    "Intuitive",
    "Modern",
    "Search Engine Optimized",
    "Secure",
    "Maintainable",
    "Scalable",
    "Accessible",
    "User Friendly",
  ],
  aboutEyebrow: "ABOUT",
  aboutTitle: "Welcome to my world",
  aboutDescription: "Learn more about me",

  bestSong: "Best Song",
  bestSongDesc: "'On est Peace' by Chinwvr.",

  myToolbox: "My Toolbox",
  myToolboxDesc: "The tools I use to create smooth and modern user experiences.",

  outsideCode: "Outside of Coding",
  outsideCodeDesc: "Discover my passions outside the world of software development.",

  hobby: {
    music: "Music",
    skateboarding: "Skateboarding",
    gaming: "Gaming",
    fishing: "Fishing",
    basketball: "Basketball",
    movies: "Movies",
    travel: "Travel",
  },

  contactSection: { // ← renommé ici
    title: "Let's bring exceptional projects to life",
    subtitle: "Let's chat and discuss your project.",
    button: "Contact",
    formTitle: "Contact Form",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send",
    success: "Your message has been sent successfully!",
    warning: "⚠️ You have already sent several messages.",
    errors: {
      required: "❌ All fields must be filled out.",
      invalidEmail: "❌ Please enter a valid email address.",
      generic: "❌ An error occurred. Please try again.",
      network: "❌ Failed to send message. Try again later.",
    },
  },
} as const;
