type Project = {
  src: string;
  alt: string;
  title: string;
  tags: string;
  desc: string;
  link?: string;
  slug: string;
  content?: string;
}

export const PROJECTS: Project[] = [
    {
      src: "/assets/projects/humankind__cover.jpg",
      alt: "Get into turn-based fights with different monsters that appear in the Land of Kinds. Can you defeat them all?",
      title: "Humankind - Wrestle",
      tags: "Next, TypeScript, Tailwind",
      desc: "Get into turn-based fights with different monsters that appear in the Land of Kinds. Can you defeat them all?",
      link: "https://www.humankind.art/wrestle",
      slug: "humankind-wrestle"
    },
    {
        src: "/assets/projects/pokedex__cover.jpg",
        alt: "Pokedex with a modern aesthetic, made with React as a SPA.",
        title: "Pokedex!",
        tags: "React, TailwindCSS",
        desc: "Using the PokeAPI, fully functional Pokedex up until 5th generation. It's a SPA made with React",
        link: "https://pokedex-liard-sigma.vercel.app",
        slug: "pokedex",
        content: `          
          <div>
            <h2>Project Overview</h2>
            <p>This Pokedex application represents my first deep dive into modern React development, focusing on mastering essential concepts like hooks, API integration, and responsive design. The project serves as a comprehensive exploration of how to build interactive web applications that consume external data sources while maintaining clean, maintainable code.</p>
            <br />
            
            <h3>Technical Learning Journey</h3>
            <p>One of the primary learning objectives was understanding React hooks, particularly <code>useState</code> and <code>useEffect</code>. I implemented state management to handle the dynamic Pokemon data, loading states, and user interactions. The <code>useEffect</code> hook became crucial for managing side effects, especially when fetching data from the PokeAPI and updating the component state accordingly.</p>
            <br />
            
            <h3>API Integration & Data Handling</h3>
            <p>Working with the PokeAPI taught me valuable lessons about external API consumption. I learned to structure fetch calls properly, handle different response states (loading, success, error), and implement robust error handling. The API's pagination system required me to develop logic for loading additional Pokemon as users scroll, which introduced me to concepts like infinite scrolling and performance optimization.</p>
            
            <p>Data transformation became another key learning area. The PokeAPI returns complex nested objects, so I had to develop skills in data mapping, filtering, and restructuring to create a user-friendly interface. This involved working with array methods like <code>map</code>, <code>filter</code>, and <code>reduce</code> to manipulate the raw API data into a format suitable for rendering.</p>
            <br />
            
            <h3>Component Architecture & State Management</h3>
            <p>I designed the application with a component-based architecture, creating reusable components for Pokemon cards, search functionality, and loading indicators. This approach taught me about prop drilling, component composition, and the importance of keeping components focused on single responsibilities. Each component handles its own state while communicating with parent components through props and callback functions.</p>
            <br />
            
            <h3>User Experience & Responsive Design</h3>
            <p>The project emphasizes a clean, intuitive user interface that works seamlessly across different devices. I implemented responsive design principles using CSS Grid and Flexbox to ensure the Pokemon cards adapt beautifully to various screen sizes. The search functionality provides instant feedback, and the loading states keep users informed about the application's status.</p>
            <br />            
            <h3>Performance Considerations</h3>
            <p>Working with a large dataset (over 800 Pokemon) introduced me to performance optimization techniques. I implemented lazy loading for images, debounced search input to reduce unnecessary API calls, and efficient state updates to prevent unnecessary re-renders. These optimizations ensure smooth performance even when dealing with extensive data.</p>
            <br />
            <h3>Key Features Implemented</h3>
            <ul>
              <li>Dynamic Pokemon data fetching from PokeAPI</li>
              <li>Real-time search functionality with instant filtering</li>
              <li>Responsive card-based layout for Pokemon display</li>
              <li>Loading states and error handling for better UX</li>
              <li>Detailed Pokemon information modal</li>
              <li>Type-based filtering and sorting options</li>
              <li>Mobile-first responsive design</li>
            </ul>
            <br />
            <h3>Technical Challenges Overcome</h3>
            <p>One of the most challenging aspects was handling the asynchronous nature of API calls and ensuring the UI remained responsive during data fetching. I learned to implement proper loading states and error boundaries to provide a smooth user experience even when network requests fail or take longer than expected.</p>
            <br />
            <p>Another significant challenge was managing the application state as it grew more complex. Initially, I struggled with prop drilling and state synchronization, but this project taught me the importance of thoughtful state management and component organization. These lessons later proved invaluable when working on larger, more complex applications.</p>
            <br />
            <h3>Learning Outcomes</h3>
            <p>This project served as a comprehensive introduction to modern React development, teaching me essential skills that form the foundation of my frontend development expertise. The combination of API integration, state management, and responsive design provided a well-rounded learning experience that directly applies to real-world development scenarios.</p>
        `
    },
    {
      src: "/assets/projects/creativity.webp",
      alt: "Animated landing page that plays around with visual animations to catch users attention.",
      title: "Be creative!",
      tags: "Next, Tailwind, Framer",
      desc: "Proof of concept landing page to encourage creativity for Frontend Developers.",
      link: "https://creativity-is-better.vercel.app/",
      slug: "be-creative"
    },
    {
      src: "/assets/projects/sliders__cover.webp",
      alt: "Facundo Solé alternative landing page that plays around with a smooth animation between sections, to simulate a slider.",
      title: "Facundo Solé",
      tags: "Next, Tailwind, Framer",
      desc: "Alternative landing page made with Google IDX editor, playing around with smooth animations between sections",
      link: "https://google-idx-test.vercel.app/",
      slug: "facundo-sole"
    },
    {
      src: "/assets/projects/voting__cover.jpg",
      alt: "Voting app technical challenge from DailyPay, where you can submit your votes.",
      title: "Voting app challenge",
      tags: "Next.js, Tailwind",
      desc: "First project using Next, it's a technical challenge from DailyPay. It uses a mock data file where I get the list of nominees.",
      link: "https://next-voting-app.vercel.app",
      slug: "voting-app-challenge"
    },
    {
      src: "/assets/projects/table__cover.jpg",
      alt: "Finance table where you can keep track of your incomes and your expenses with two individual tabs.",
      title: "Finance table",
      tags: "React, CSS",
      desc: "Financial table where you can keep track of your incomes and your expenses, using localStorage to persist your data",
      link: "https://finances-table.vercel.app",
      slug: "finance-table"
    },
    {
      src: "/assets/projects/pass__cover.jpg",
      alt: "Password generator, customizable with lowercase, uppercase, symbols and numbers.",
      title: "Password generator",
      tags: "React, TailwindCSS",
      desc: "Password generator, customizable with lowercase, uppercase, symbols and numbers.",
      link: "https://password-gen-theta.vercel.app",
      slug: "password-generator"
    },
    {
      src: "/assets/projects/Card.webp",
      alt: "Personal contact card, that serves as a little link tree for Facundo Solé website, linkedin and github.",
      title: "Contact card",
      tags: "React, CSS",
      desc: "Personal contact card, where I play around with the React-parallax-tilt library. It serves as a little link tree for my website, linkedin and github.",
      link: "https://facundosole-card.vercel.app",
      slug: "contact-card"
    }
  ];
  