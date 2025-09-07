type Project = {
  src: string;
  alt: string;
  title: string;
  tags: string;
  desc: string;
  link: string;
}

export const PROJECTS: Project[] = [
    {
      src: "/assets/projects/humankind__cover.jpg",
      alt: "Get into turn-based fights with different monsters that appear in the Land of Kinds. Can you defeat them all?",
      title: "Humankind - Wrestle",
      tags: "Next, TypeScript, Tailwind",
      desc: "Get into turn-based fights with different monsters that appear in the Land of Kinds. Can you defeat them all?",
      link: "https://www.humankind.art/wrestle"
    },
    {
        src: "/assets/projects/pokedex__cover.jpg",
        alt: "Pokedex with a modern aesthetic, made with React as a SPA.",
        title: "Pokedex!",
        tags: "React, TailwindCSS",
        desc: "Using the PokeAPI, fully functional Pokedex up until 5th generation. It's a SPA made with React",
        link: "https://pokedex-liard-sigma.vercel.app"
    },
    {
      src: "/assets/projects/creativity.webp",
      alt: "Animated landing page that plays around with visual animations to catch users attention.",
      title: "Be creative!",
      tags: "Next, Tailwind, Framer",
      desc: "Proof of concept landing page to encourage creativity for Frontend Developers.",
      link: "https://creativity-is-better.vercel.app/"
    },
    {
      src: "/assets/projects/sliders__cover.webp",
      alt: "Facundo Solé alternative landing page that plays around with a smooth animation between sections, to simulate a slider.",
      title: "Facundo Solé",
      tags: "Next, Tailwind, Framer",
      desc: "Alternative landing page made with Google IDX editor, playing around with smooth animations between sections",
      link: "https://google-idx-test.vercel.app/"
    },
    {
      src: "/assets/projects/voting__cover.jpg",
      alt: "Voting app technical challenge from DailyPay, where you can submit your votes.",
      title: "Voting app challenge",
      tags: "Next.js, Tailwind",
      desc: "First project using Next, it's a technical challenge from DailyPay. It uses a mock data file where I get the list of nominees.",
      link: "https://next-voting-app.vercel.app"
    },
    {
      src: "/assets/projects/table__cover.jpg",
      alt: "Finance table where you can keep track of your incomes and your expenses with two individual tabs.",
      title: "Finance table",
      tags: "React, CSS",
      desc: "Financial table where you can keep track of your incomes and your expenses, using localStorage to persist your data",
      link: "https://finances-table.vercel.app"
    },
    {
      src: "/assets/projects/pass__cover.jpg",
      alt: "Password generator, customizable with lowercase, uppercase, symbols and numbers.",
      title: "Password generator",
      tags: "React, TailwindCSS",
      desc: "Password generator, customizable with lowercase, uppercase, symbols and numbers.",
      link: "https://password-gen-theta.vercel.app"
    },
    {
      src: "/assets/projects/Card.webp",
      alt: "Personal contact card, that serves as a little link tree for Facundo Solé website, linkedin and github.",
      title: "Contact card",
      tags: "React, CSS",
      desc: "Personal contact card, where I play around with the React-parallax-tilt library. It serves as a little link tree for my website, linkedin and github.",
      link: "https://facundosole-card.vercel.app"
    }
  ];
  