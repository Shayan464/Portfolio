import { ArrowUpRight, Github } from 'lucide-react';
import React from 'react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';

const projects = [
  {
    title: 'Quick-Gpt',
    description:
      'QuickGPT is a modern AI assistant built using a full-stack approach, designed to deliver fast, responsive, and intelligent conversational experiences.',
    image: '/Quick-gpt.png',
    tags: ['React', 'NodeJs'],
    link: 'https://quick-gpt-s6wc.vercel.app',
    github: 'https://github.com/Shayan464/QuickGpt',
  },
  {
    title: 'Chatify',
    description:
      '💬 Real-Time Chat ApplicationA real-time chat application built using React, Node.js, Express, MongoDB, and Socket.io that allows users to send and receive messages instantly without refreshing the page, The application uses WebSocket communication with Socket.io to provide seamless real-time messaging between connected users.',
    image: '/chatify.png',
    tags: ['React', 'NodeJs'],
    link: 'https://chat-application-yt9b.onrender.com',
    github: 'https://github.com/Shayan464/Chat-Application',
  },
  {
    title: 'Food App',
    description:
      'A MERN stack food ordering application where users can explore menus, add items to their cart, and place orders seamlessly. Built with React for the frontend and Node.js/Express with MongoDB for the backend, ensuring a fast and responsive user experience.',
    image: '/image.png',
    tags: ['React', 'NodeJs'],
    link: 'https://mern-food-app-5pid.vercel.app',
    github: 'https://github.com/Shayan464/Mern-food-app',
  },
  {
    title: 'React-ecommerce',
    description:
      'A responsive e-commerce web application built with React that allows users to browse products, filter items, and manage a shopping cart with a seamless user experience.',
    image: '/Reactecommerce.png',
    tags: ['React', 'NodeJs'],
    link: 'https://react-ecommerce-azure-zeta.vercel.app',
    github: 'https://github.com/Shayan464/React-ecommerce',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg gloss */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-2xl opacity-50" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-2xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {' '}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden md:row-span-1 will-change-transform"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
              transition-transform duration-300
              group-hover:scale-105
              will-change-transform transform-gpu"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* overlay links */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100
              transition-opacity duration-200 will-change-opacity"
                >
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagidx) => (
                    <span
                      key={tagidx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* view all cta */}
        <div className="text-center mt-12">
          <AnimatedBorderButton>
            <a href="https://github.com/Shayan464">View All Projects</a>
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
