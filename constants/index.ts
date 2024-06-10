import type {
    TNavLink,
    TService,
    TTechnology,
    TExperience,
    TTestimonial,
    TProject,
  } from '@/types';
  
  import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    aws,
    next,
    docker,
  wipro,
  ibm,
  chordify,
   
  } from '@/assets';
  
  export const navLinks: TNavLink[] = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'work',
      title: 'Work',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
    {
      id: 'skills',
      title: 'Skills',
    },
  ];
  
  const services: TService[] = [
    {
      title: 'Frontend Developer',
      icon: web.src,
    },
  
    {
      title: 'Backend Developer',
      icon: backend.src,
    },
    {
      title: 'React  Developer',
      icon: creator.src,
    },
  ];
  
  const technologies: TTechnology[] = [
    {
      name: 'HTML 5',
      icon: html.src, // Accessing the src property
    },
    {
      name: 'CSS 3',
      icon: css.src, // Accessing the src property
    },
    {
      name: 'JavaScript',
      icon: javascript.src, // Accessing the src property
    },
    {
      name: 'TypeScript',
      icon: typescript.src, // Accessing the src property
    },
    {
      name: 'React JS',
      icon: reactjs.src, // Accessing the src property
    },
    {
      name: 'Redux Toolkit',
      icon: redux.src, // Accessing the src property
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind.src, // Accessing the src property
    },
    {
      name: 'Node JS',
      icon: nodejs.src, // Accessing the src property
    },
    {
      name: 'MongoDB',
      icon: mongodb.src, // Accessing the src property
    },
    {
      name: 'git',
      icon: git.src, // Accessing the src property
    },
    {
      name: 'docker',
      icon: docker.src, // Accessing the src property
    },
    {
      name: 'AWS',
      icon: aws.src, // Accessing the src property
    },
    {
      name: 'Next',
      icon: next.src, // Accessing the src property
    },
  ];
  
  const experiences: TExperience[] = [
    {
      title: 'Web Developer Intern',
      companyName: 'IBM',
      icon: ibm,
      iconBg: '#383E56',
      date: 'Jun 2021 - Nov 2021',
      points: [
        'Developing and maintaining web applications using Javascript html css and other related technologies.',
        'Acquired solid knowledge of JavaScript, HTML, CSS, and React Js for front-end web development.',
        'Demonstrated proficiency in JavaScript and React, optimizing code for improved performance in scalable web applications.',
        'Implementing responsive design and ensuring cross-browser compatibility.',
      ],
    },
    {
      title: 'MERN STACK Developer',
      companyName: 'Wipro',
      icon: wipro,
      iconBg: '#E6DEDD',
      date: 'Jan 2021 - Feb 2022',
      points: [
        'Acquired solid knowledge of JavaScript, HTML, CSS, and React Js for front-end web development.',
        'Demonstrated proficiency in JavaScript and React, optimizing code for improved performance in scalable web applications.',
        'Implementing responsive design and ensuring cross-browser compatibility.',
      ],
    },
    {
      title: 'Full Stack Developer',
      companyName: 'Chordify.Inc',
      icon: chordify,
      iconBg: '#383E56',
      date: 'Feb 2023 - Present',
      points: [
        'Contributed to the implementation of a Feature Product section on the Pampered Chef Product project using Next.js, Scss, and Redux, enhancing   web development standards. ',
        ' Developed frontend features for i-Communify web application, a College Club Managing Web App. Leveraged Next.js and Redux Toolkit,and incorporated Bootstrap and SCSS for a responsive design. Demonstrated expertise in sophisticated web development techniques.',
        'Achieved a 20% cost reduction for clients through strategic integration of efficient tools, emphasizing commitment to optimizing  project outcomes.',
        ' Designed and implemented a proficient Rest Api using Express.js.',
        'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
        'Implementing responsive design and ensuring cross-browser compatibility.',
        'Participating in code reviews and providing constructive feedback to other developers.',
      ],
    },
    
  ];
  
  const testimonials: TTestimonial[] = [
    {
      testimonial:
        'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
      name: 'Sara Lee',
      designation: 'CFO',
      company: 'Acme Co',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: 'Chris Brown',
      designation: 'COO',
      company: 'DEF Corp',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: 'Lisa Wang',
      designation: 'CTO',
      company: '456 Enterprises',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
  ];
  
  const projects: TProject[] = [
    {
      name: 'Anime Clothing store use NextJS and Mern Stack',
      description:
        'A ecommerce Web app full responsive using Next Js redux, bootstrap,,mui , expressjs and mongdb(mongoAtlas), for authentication I used jwt and stored the token inside cookies for user and admin validation I created middleware. And frontend is designed in Next js and redux toolkit used reduxthunk for api call,login ,register page with attractive user interface and use Scss..',
      tags: [
        {
          name: 'NextJS',
          color: 'blue-text-gradient',
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient',
        },
        {
          name: 'ExpressJS',
          color: 'pink-text-gradient',
        },
      ],
      image: '/images/projects/animeEcom.png',
      sourceCodeLink: 'https://github.com/',
      previewLink: 'https://anime-clothing-frontend.vercel.app/',
    },
    {
      name: 'Job Hunt Website',
      description:
        'Job website where user can apply for the job and they can accesses more feature a website after registration , frontend of website is based on React and backend is based on Express js and jwt is used for authentication mongoDB is used as database',
      tags: [
        {
          name: 'React',
          color: 'blue-text-gradient',
        },
        {
          name: 'ExpressJS',
          color: 'green-text-gradient',
        },
        {
          name: 'MongoDB',
          color: 'pink-text-gradient',
        },
      ],
      image: 'images/projects/jobwebsite.png',
      sourceCodeLink: 'https://github.com/',
    },
    {
      name: 'Motion-School LMS Web Application',
      description:
        'Developed an advanced Learning Management System (LMS) platform using Next.js 13 with the App Router within the React.js Framework. Implemented TypeScript for a robust and modern frontend architecture.\n- Implemented Prisma for seamless data management and Stripe for secure payment processing.\n- Integrated Mux for advanced video streaming and employed Tailwind for modern, responsive styling.\n- Developed a multifaceted authentication system with Google, GitHub, and email login options using clerk.\n- Demonstrated proficiency in latest technologies, emphasizing commitment to user-friendly solutions in educational technology.',
      tags: [
        {
          name: 'NextJS',
          color: 'blue-text-gradient',
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient',
        },
        {
          name: 'OpenAI',
          color: 'pink-text-gradient',
        },
      ],
      image: '/images/projects/lmsprotfolio.png',
      sourceCodeLink: 'https://github.com/amanguptak/Motion-school',
      previewLink: 'https://motion-school.vercel.app',
    },
    {
      name: 'Motion an Ai powered note talking app',
      description:
        "Motion, fully responsive web application utilizing Next.js 13, an innovative frontend framework rooted in React.js. Developed with TypeScript, the project featured meticulous styling using Tailwind CSS to achieve a refined and contemporary user interface. Integrated MongoDB as the backend database for streamlined and secure data management. Successfully orchestrated the seamless integration of the OpenAI API, enhancing the application with cutting-edge artificial intelligence capabilities. Implemented Pinecone for precise request optimization, resulting in a substantial improvement in overall performance. A standout feature of this project is the integration of an AI chatbot 🤖, seamlessly incorporated to deliver insightful responses derived from users' current notes, thereby significantly enhancing overall user engagement. This project serves as a testament to proficiency in contemporary web development technologies and a steadfast commitment to optimizing the user experience.",
      tags: [
        {
          name: 'NextJS',
          color: 'blue-text-gradient',
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient',
        },
        {
          name: 'OpenAI',
          color: 'pink-text-gradient',
        },
      ],
      image: 'https://i.postimg.cc/hjHdG1M3/Screenshot-2023-12-11-120722.png',
      sourceCodeLink: 'https://github.com/amanguptak/MotionMan',
      previewLink: 'https://motion-aman.vercel.app',
    },
    {
      name: 'Icommunify College Club managing web app',
      description:
        'A college club and its Event managing web app for client based on mern stack where I have implemented all frontend features Using Next js and Redux toolkit and used bootstrap and scss for responsiveness for api call used axios.',
      tags: [
        {
          name: 'NextJS',
          color: 'blue-text-gradient',
        },
        {
          name: 'MongoDB',
          color: 'green-text-gradient',
        },
        {
          name: 'OpenAI',
          color: 'pink-text-gradient',
        },
      ],
      image: '/images/projects/icom.png',
      sourceCodeLink: '/',
      previewLink: 'https://www.icommunify.com',
    },
    {
      name: 'Weather App React  PWA',
      description: 'Used axios , React and used PWA features of React ',
      tags: [
        {
          name: 'React JS',
          color: 'blue-text-gradient',
        },
        {
          name: 'Pwa',
          color: 'green-text-gradient',
        },
        {
          name: 'Axios',
          color: 'pink-text-gradient',
        },
      ],
      image: '/images/projects/weather.png',
      sourceCodeLink: 'https://github.com/amanguptak/MotionMan',
      previewLink: 'https://weatherappbyaman.web.app',
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  