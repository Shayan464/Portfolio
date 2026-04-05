import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description:
        'Writing maintainable, scalable code that stands the test of time.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description:
        'Optimizing for speed and delivering lightning-fast user experiences.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with teams to bring ideas to life.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Staying ahead with the latest technologies and best practices.',
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="about">
      {/* 🎥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/miles-morales.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <div>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Building the Future{' '}
              <span className="font-serif italic font-normal text-white">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate software engineer crafting digital products
                that make a difference...
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences..."
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
