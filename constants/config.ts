type TSection = {
    p: string;
    h2: string;
    content?: string;
  };
  
  type TConfig = {
    html: {
      title: string;
      fullName: string;
      email: string;
    };
    hero: {
      name: string;
      p: string[];
    };
    contact: {
      form: {
        name: {
          span: string;
          placeholder: string;
        };
        email: {
          span: string;
          placeholder: string;
        };
        message: {
          span: string;
          placeholder: string;
        };
      };
    } & TSection;
    sections: {
      about: Required<TSection>;
      experience: TSection;
      feedbacks: TSection;
      works: Required<TSection>;
    };
  };
  
  export const config: TConfig = {
    html: {
      title: 'Aman Gupta',
      fullName: 'Aman Gupta',
      email: 'imamangupta600@gmail.com',
    },
    hero: {
      name: 'Aman Gupta',
      p: [],
    },
    contact: {
      p: 'Get in touch',
      h2: 'Contact.',
      form: {
        name: {
          span: 'Your Name',
          placeholder: "What's your name?",
        },
        email: { span: 'Your Email', placeholder: "What's your email?" },
        message: {
          span: 'Your Message',
          placeholder: 'What do you want to say?',
        },
      },
    },
    sections: {
      about: {
        p: 'Introduction',
        h2: 'Overview.',
        content: `I am a  Web Developer with a fervor for crafting interactive and responsive web applications. Possessing proficiency in JavaScript, TypeScript, React, Redux, Node.js, Express.js, Next.js,
          HTML, CSS, and Git,
         I bring a comprehensive skill set to the development landscape. My commitment 
         to continual learning is evidenced by my quick adaptability and eagerness to broaden my knowledge base. Recognized as a dedicated team player, I am enthusiastic about collaborative efforts to conceive and deliver exceptional
          applications. My professional approach and passion for web
           development fuel my commitment to contributing meaningfully to 
           collaborative projects I collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!`,
      },
      experience: {
        p: 'What I have done so far',
        h2: 'Work Experience.',
      },
      feedbacks: {
        p: 'What others say',
        h2: 'Testimonials.',
      },
      works: {
        p: 'My work',
        h2: 'Projects.',
        content: `Following projects showcases my skills and experience through
      real-world examples of my work. Each project is briefly described with
      links to code repositories and live demos in it. It reflects my
      ability to solve complex problems, work with different technologies,
      and manage projects effectively.`,
      },
    },
  };
  