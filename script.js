// Roadmap data array (previously created)
const roadmapData = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      duration: "2-3 weeks",
      topics: [
        "ES6+ features (arrow functions, destructuring, modules, etc.)",
        "Asynchronous JavaScript (Promises, async/await)",
        "Array methods (map, filter, reduce)",
        "Object-oriented programming in JavaScript"
      ],
      project: {
        name: "Vanilla JavaScript Todo List",
        description: "Build a todo list application using vanilla JavaScript",
        features: [
          "Use array methods to manage todos",
          "Implement local storage for persistence",
          "Use ES6+ features like arrow functions and destructuring"
        ]
      },
      resources: [
        { name: "JavaScript.info", url: "https://javascript.info/" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "ES6 for Everyone", url: "https://es6.io/" },
        { name: "JavaScript: Understanding the Weird Parts", url: "https://www.udemy.com/course/understand-javascript/" }
      ]
    },
    {
      id: 2,
      title: "Basic React Concepts",
      duration: "2-3 weeks",
      topics: [
        "Setting up a React environment (Create React App)",
        "JSX syntax",
        "Components (functional and class-based)",
        "Props and state",
        "Handling events",
        "Conditional rendering"
      ],
      project: {
        name: "React Todo List",
        description: "Convert the vanilla JS todo list to a React application",
        features: [
          "Create components for TodoList, TodoItem, and AddTodo",
          "Use state to manage the list of todos",
          "Implement adding and deleting todos"
        ]
      },
      resources: [
        { name: "React Official Documentation", url: "https://reactjs.org/docs/getting-started.html" },
        { name: "React Tutorial", url: "https://react-tutorial.app/" },
        { name: "Full Stack Open", url: "https://fullstackopen.com/en/" },
        { name: "Epic React", url: "https://epicreact.dev/" },
        { name: "React for Beginners", url: "https://reactforbeginners.com/" }
      ]
    },
    {
      id: 3,
      title: "React Hooks",
      duration: "2 weeks",
      topics: [
        "useState",
        "useEffect",
        "useContext",
        "useReducer",
        "Custom hooks"
      ],
      project: {
        name: "Pomodoro Timer",
        description: "Build a pomodoro timer application",
        features: [
          "Use useState for managing timer state",
          "Implement useEffect for timer logic",
          "Create a custom hook for timer functionality"
        ]
      },
      resources: [
        { name: "React Hooks documentation", url: "https://reactjs.org/docs/hooks-intro.html" },
        { name: "useHooks", url: "https://usehooks.com/" }
      ]
    },
    {
      id: 4,
      title: "React Component Lifecycle",
      duration: "1 week",
      topics: [
        "Mounting, updating, and unmounting phases",
        "Lifecycle methods in class components",
        "useEffect for lifecycle in functional components"
      ],
      project: {
        name: "Quote of the Day",
        description: "Create a 'Quote of the Day' application",
        features: [
          "Fetch a new quote when the component mounts",
          "Implement a refresh button to fetch a new quote",
          "Use useEffect to manage side effects"
        ]
      },
      resources: [
        { name: "React lifecycle methods diagram", url: "https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" },
        { name: "React lifecycle methods vs. Hooks", url: "https://rangle.io/blog/react-hooks-vs-lifecycle-methods/" }
      ]
    },
    {
      id: 5,
      title: "Styling in React",
      duration: "1 week",
      topics: [
        "CSS Modules",
        "Styled-components",
        "CSS-in-JS solutions",
        "Tailwind CSS"
      ],
      project: {
        name: "Personal Portfolio Website",
        description: "Design and implement a personal portfolio website",
        features: [
          "Use CSS Modules for component-specific styles",
          "Implement a dark/light theme toggle using styled-components",
          "Use Tailwind CSS for responsive design"
        ]
      },
      resources: [
        { name: "CSS Modules documentation", url: "https://github.com/css-modules/css-modules" },
        { name: "Styled-components documentation", url: "https://styled-components.com/" },
        { name: "Tailwind CSS documentation", url: "https://tailwindcss.com/" }
      ]
    },
    {
      id: 6,
      title: "Forms and User Input",
      duration: "1 week",
      topics: [
        "Controlled components",
        "Uncontrolled components",
        "Form validation",
        "React Hook Form library"
      ],
      project: {
        name: "Multi-step Registration Form",
        description: "Build a multi-step registration form",
        features: [
          "Implement form validation",
          "Use React Hook Form for form state management",
          "Include different input types (text, select, radio buttons, etc.)"
        ]
      },
      resources: [
        { name: "React documentation on forms", url: "https://reactjs.org/docs/forms.html" },
        { name: "Formik documentation", url: "https://formik.org/" },
        { name: "React Hook Form documentation", url: "https://react-hook-form.com/" }
      ]
    },
    {
      id: 7,
      title: "React Router",
      duration: "1 week",
      topics: [
        "Setting up routes",
        "Navigation components",
        "Route parameters",
        "Nested routes"
      ],
      project: {
        name: "Multi-page E-commerce Site",
        description: "Create a multi-page e-commerce site",
        features: [
          "Implement routes for home, product list, product details, and cart",
          "Use route parameters for product details page",
          "Implement nested routes for product categories"
        ]
      },
      resources: [
        { name: "React Router documentation", url: "https://reactrouter.com/" },
        { name: "React Router tutorial", url: "https://reactrouter.com/docs/en/v6/getting-started/tutorial" }
      ]
    },
    {
      id: 8,
      title: "State Management",
      duration: "2-3 weeks",
      topics: [
        "Props drilling and its limitations",
        "Context API",
        "Redux (actions, reducers, store)",
        "Redux Toolkit",
        "Recoil or Jotai (alternative state management libraries)"
      ],
      project: {
        name: "Kanban Board Application",
        description: "Build a kanban board application",
        features: [
          "Use Redux for global state management",
          "Implement drag and drop functionality for tasks",
          "Use Redux Toolkit for simplified Redux setup"
        ]
      },
      resources: [
        { name: "Redux documentation", url: "https://redux.js.org/" },
        { name: "Redux Toolkit documentation", url: "https://redux-toolkit.js.org/" },
        { name: "Recoil documentation", url: "https://recoiljs.org/" }
      ]
    },
    {
      id: 9,
      title: "API Integration",
      duration: "1-2 weeks",
      topics: [
        "Fetch API",
        "Axios",
        "REST API integration",
        "Error handling",
        "Loading states"
      ],
      project: {
        name: "Weather Dashboard",
        description: "Develop a weather dashboard",
        features: [
          "Fetch weather data from a public API",
          "Implement search functionality for different locations",
          "Use React Query for efficient data fetching and caching"
        ]
      },
      resources: [
        { name: "Axios documentation", url: "https://axios-http.com/" },
        { name: "React Query documentation", url: "https://react-query.tanstack.com/" }
      ]
    },
    {
      id: 10,
      title: "Performance Optimization",
      duration: "1-2 weeks",
      topics: [
        "React.memo",
        "useMemo and useCallback",
        "Code splitting and lazy loading",
        "Profiling React applications"
      ],
      project: {
        name: "Infinite-scrolling Image Gallery",
        description: "Create an infinite-scrolling image gallery",
        features: [
          "Implement virtualization for efficient rendering of large lists",
          "Use React.memo to optimize re-renders",
          "Implement code splitting and lazy loading for gallery categories"
        ]
      },
      resources: [
        { name: "React documentation on optimization", url: "https://reactjs.org/docs/optimizing-performance.html" },
        { name: "Web.dev guide on performance", url: "https://web.dev/react/" }
      ]
    },
    {
      id: 11,
      title: "Testing React Applications",
      duration: "1-2 weeks",
      topics: [
        "Jest for unit and integration testing",
        "React Testing Library",
        "Enzyme (optional)",
        "Mocking API calls in tests"
      ],
      project: {
        name: "Weather Dashboard Tests",
        description: "Write tests for the weather dashboard",
        features: [
          "Write unit tests for utility functions",
          "Create integration tests for the search functionality",
          "Implement snapshot tests for UI components"
        ]
      },
      resources: [
        { name: "Jest documentation", url: "https://jestjs.io/" },
        { name: "React Testing Library documentation", url: "https://testing-library.com/docs/react-testing-library/intro/" }
      ]
    },
    {
      id: 12,
      title: "Advanced Patterns",
      duration: "2 weeks",
      topics: [
        "Higher-Order Components (HOCs)",
        "Render props",
        "Compound components",
        "Custom hooks (advanced)"
      ],
      project: {
        name: "Customizable Chart Library",
        description: "Build a customizable chart library",
        features: [
          "Use the compound component pattern for flexible chart composition",
          "Implement a Higher-Order Component for adding data loading to charts",
          "Create custom hooks for chart-related calculations"
        ]
      },
      resources: [
        { name: "Advanced React Patterns course", url: "https://frontendmasters.com/courses/advanced-react-patterns/" }
      ]
    },
    {
      id: 13,
      title: "Server-Side Rendering",
      duration: "1-2 weeks",
      topics: [
        "Next.js basics",
        "SSR vs CSR vs Static Site Generation"
      ],
      project: {
        name: "Next.js E-commerce Site",
        description: "Convert the e-commerce site to a Next.js application",
        features: [
          "Implement server-side rendering for product pages",
          "Use static site generation for static pages (e.g., about, contact)",
          "Implement API routes for handling form submissions"
        ]
      },
      resources: [
        { name: "Next.js documentation", url: "https://nextjs.org/docs" }
      ]
    },
    {
      id: 14,
      title: "TypeScript with React",
      duration: "2 weeks",
      topics: [
        "TypeScript basics",
        "Typing props and state",
        "Generic components",
        "Utility types in React"
      ],
      project: {
        name: "TypeScript Kanban Board",
        description: "Rebuild the kanban board application using TypeScript",
        features: [
          "Define interfaces for task and column types",
          "Use generics for reusable components",
          "Implement strict typing for Redux actions and reducers"
        ]
      },
      resources: [
        { name: "TypeScript documentation", url: "https://www.typescriptlang.org/docs/" },
        { name: "React TypeScript Cheatsheet", url: "https://react-typescript-cheatsheet.netlify.app/" }
      ]
    },
    {
      id: 15,
      title: "Build and Deployment",
      duration: "1 week",
      topics: [
        "Webpack configuration",
        "Optimizing builds",
        "Deployment to platforms (Netlify, Vercel, etc.)"
      ],
      project: {
        name: "Weather Dashboard Deployment",
        description: "Set up CI/CD for the weather dashboard",
        features: [
          "Configure webpack for optimal production builds",
          "Set up automated testing in a CI pipeline",
          "Deploy the application to Netlify or Vercel with automatic deploys"
        ]
      },
      resources: [
        { name: "Create React App deployment guide", url: "https://create-react-app.dev/docs/deployment/" },
        { name: "Netlify documentation", url: "https://docs.netlify.com/" }
      ]
    },
    {
      id: 16,
      title: "Real-world Project",
      duration: "2-4 weeks",
      topics: [
        "Apply all learned concepts in a substantial project",
        "Implement features like authentication, data fetching, state management",
        "Focus on best practices and code organization"
      ],
      project: {
        name: "Full-featured Blog Platform",
        description: "Build a full-featured blog platform",
        features: [
          "Implement user authentication and authorization",
          "Create an admin dashboard for managing posts",
          "Implement comments and likes functionality",
          "Use server-side rendering for improved SEO",
          "Implement rich text editing for creating posts",
          "Add social media sharing functionality"
        ]
      },
      resources: []
    }
  ];
  
  // Function to create roadmap items
  function createRoadmapItems() {
      const container = document.getElementById('roadmap-container');
      roadmapData.forEach(item => {
          const roadmapItem = document.createElement('div');
          roadmapItem.className = 'roadmap-item';
          roadmapItem.innerHTML = `
              <h2>${item.title}</h2>
              <p><strong>Duration:</strong> ${item.duration}</p>
              <h3>Topics:</h3>
              <ul>
                  ${item.topics.map(topic => `<li>${topic}</li>`).join('')}
              </ul>
              <button class="project-button" data-id="${item.id}">View Project</button>
              ${item.resources.length > 0 ? `<button class="resources-button" data-id="${item.id}">View Resources</button>` : ''}
          `;
          container.appendChild(roadmapItem);
      });
  }
  
  // Function to show modal
  function showModal(title, content) {
      const modal = document.getElementById('modal');
      const modalTitle = document.getElementById('modal-title');
      const modalBody = document.getElementById('modal-body');
      
      modalTitle.textContent = title;
      modalBody.innerHTML = content;
      modal.style.display = 'block';
  }
  
  // Function to close modal
  function closeModal() {
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', () => {
      createRoadmapItems();
  
      // Project button click event
      document.addEventListener('click', (e) => {
          if (e.target.classList.contains('project-button')) {
              const id = parseInt(e.target.getAttribute('data-id'));
              const item = roadmapData.find(item => item.id === id);
              const content = `
                  <h3>${item.project.name}</h3>
                  <p>${item.project.description}</p>
                  <h4>Features:</h4>
                  <ul>
                      ${item.project.features.map(feature => `<li>${feature}</li>`).join('')}
                  </ul>
              `;
              showModal(`Project: ${item.title}`, content);
          }
      });
  
      // Resources button click event
      document.addEventListener('click', (e) => {
          if (e.target.classList.contains('resources-button')) {
              const id = parseInt(e.target.getAttribute('data-id'));
              const item = roadmapData.find(item => item.id === id);
              const content = `
                  <ul>
                      ${item.resources.map(resource => `<li><a href="${resource.url}" target="_blank">${resource.name}</a></li>`).join('')}
                  </ul>
              `;
              showModal(`Resources: ${item.title}`, content);
          }
      });
  
      // Close modal event
      const closeBtn = document.querySelector('.close');
      closeBtn.addEventListener('click', closeModal);
  
      // Close modal when clicking outside
      window.addEventListener('click', (e) => {
          const modal = document.getElementById('modal');
          if (e.target === modal) {
              closeModal();
          }
      });
  });