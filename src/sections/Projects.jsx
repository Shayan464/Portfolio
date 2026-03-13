import { ArrowUpRight, Github } from 'lucide-react';
import React from 'react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';

const projects = [
  {
    title: 'Food App',
    description:
      'A MERN stack food ordering application where users can explore menus, add items to their cart, and place orders seamlessly. Built with React for the frontend and Node.js/Express with MongoDB for the backend, ensuring a fast and responsive user experience.',
    image: '/image.png',
    tags: ['React', 'NodeJs'],
    link: 'https://mern-food-app-o9z0.onrender.com/',
    github: 'https://github.com/Shayan464/Mern-food-app',
  },
  // {
  //   title: 'Social Media Platform',
  //   description:
  //     'A feature-rich social media platform that allows users to create and share posts, interact with content through likes and comments, and manage user profiles in a responsive and interactive environment. The project demonstrates full-stack application development, modern UI design, and efficient data man',
  //   image: '/',
  //   tags: ['React', 'NodeJs'],
  //   link: '#',
  //   github: '#',
  // },
  {
    title: 'Real Time chat using socket-io',
    description:
      'A full-stack social media platform built using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to create profiles, share posts, interact through likes and comments, and connect with other users. It focuses on real-time interactions, responsive design, and scalable backend architecture to deliver a smooth social networking experience.',
    image: '/chatty.png',
    tags: ['React', 'NodeJs'],
    link: 'https://realtime-chat-using-socketio-frontend.onrender.com',
    github:
      'https://github.com/Shayan464/Realtime-chat-using-SocketIo/tree/main',
  },
  {
    title: 'React-ecommerce',
    description:
      'A responsive e-commerce web application built with React that allows users to browse products, filter items, and manage a shopping cart with a seamless user experience.',
    image: '/Reactecommerce.png',
    tags: ['React', 'NodeJs'],
    link: 'https://react-ecommerce-9vt4.onrender.com',
    github: 'https://github.com/Shayan464/React-ecommerce',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg gloss  */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {' '}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grif-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* overlay links */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100
                transition-opacity duration-300"
                >
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all "
                  >
                    <ArrowUpRight className="w-5 h-5 " />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all "
                  >
                    <Github className="w-5 h-5 " />
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
                <div className="flex flex-wrap gap-2 ">
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
        <div className="text-center mt-12 animate-fade delay-500">
          <AnimatedBorderButton>
            <a href="https://github.com/Shayan464">View All Projects</a>
            <ArrowUpRight className="w-5 h-5"></ArrowUpRight>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
