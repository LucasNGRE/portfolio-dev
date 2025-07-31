// locales/fr.ts
export default {
  home: "Accueil",
  projects: "Projets",
  about: "À propos",
  contact: "Contact", // ← celui du menu, on le garde
  availableForProjects: "Disponible pour des nouveaux projets",
  webDeveloperFullStack: "Développeur Web - Full stack",
  introDescription:
    "Je suis en deuxième année de formation en développement full stack, et je travaille en alternance chez Bonnefis Automobile en tant que responsable de la partie technologique de l'entreprise.",
  discoverProjects: "Découvre mes projets",
  contactMe: "Me contacter",
  projectsEyebrow: "PROJETS",
  projectsTitle: "Réalisations principales",
  projectsDescription:
    "Découvrez comment j'ai conçu et réalisé des projets de développement web pour répondre à des besoins spécifiques.",
  discover: "Découvrir",

  project1: {
    title: "One Up Shad Landing Page",
    result1: "Projet from scratch (HTML, CSS, JavaScript)",
    result2: "Interface sombre avec animation au scroll",
    result3: "Promotion d'un leurre emblématique pour la pêche",
  },

  project2: {
    title: "Atelier Bonnefis",
    result1: "Premier projet réalisé avec Webflow",
    result2: "Création d'un site web pour les ateliers (mécanique et carrosserie)",
    result3: "Développement d'un site web pour refléter la nouvelle identité visuelle des ateliers",
  },

  project3: {
    title: "Showcase Car 3D",
    result1: "Projet pour découvrir Three.js",
    result2: "Développer une expérience utilisateur incroyable",
    result3: "Exemple de canvas utilisable sur un site vitrine",
  },

  project4: {
    title: "Flip It marketplace",
    result1: "Projet final de la première année à Holberton School",
    result2: "Une marketplace avec une bonne UI et UX",
    result3: "La partie login est en pause actuellement",
  },

  tapeWords: [
    "Performant",
    "Dynamique",
    "Responsive",
    "Intuitif",
    "Moderne",
    "Optimisé SEO",
    "Sécurisé",
    "Facile à maintenir",
    "Évolutif",
    "Accessible",
    "Convivial",
  ],
  aboutEyebrow: "À PROPOS",
  aboutTitle: "Bienvenue dans mon univers",
  aboutDescription: "Découvrez-en plus sur moi",

  bestSong: "Chanson Préférée",
  bestSongDesc: "'On est Peace' de Chinwvr.",

  myToolbox: "Ma Boîte à Outils",
  myToolboxDesc: "Les outils que j'utilise pour créer des expériences utilisateurs fluides et modernes.",

  outsideCode: "En dehors du Code",
  outsideCodeDesc: "Découvrez mes passions en dehors de l'univers du développement.",

  hobby: {
    music: "Musique",
    skateboarding: "Skateboard",
    gaming: "Jeux vidéo",
    fishing: "Pêche",
    basketball: "Basketball",
    movies: "Films",
    travel: "Voyages",
  },

  contactSection: { // ✅ renommé ici
    title: "Ensemble, donnons vie à des projets exceptionnels",
    subtitle: "Échangeons et discutons de votre projet.",
    button: "Contact",
    formTitle: "Formulaire de contact",
    name: "Nom",
    email: "Email",
    subject: "Sujet",
    message: "Message",
    send: "Envoyer",
    success: "Ton message a bien été envoyé !",
    warning: "⚠️ Vous avez déjà envoyé plusieurs messages.",
    errors: {
      required: "❌ Tous les champs doivent être remplis.",
      invalidEmail: "❌ Veuillez entrer une adresse email valide.",
      generic: "❌ Une erreur est survenue. Réessaie.",
      network: "❌ Impossible d’envoyer le message. Réessaie plus tard.",
    },
  },
} as const;
