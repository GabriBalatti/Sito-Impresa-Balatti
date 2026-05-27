import React from "react";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Villa Moderna",
      category: "Costruzione Civile",
      image: "/portfolio-2.jpg",
    },
    {
      title: "Complesso Residenziale",
      category: "Costruzione Civile",
      image: "/portfolio-1.jpg",
    },
    {
      title: "Polo Logistico",
      category: "Edilizia Industriale",
      image: "/portfolio-3.jpg",
    },
    {
      title: "Ristrutturazione Casale",
      category: "Recupero Edilizio",
      image: "/hero-bg.jpg",
    },
  ];

  return (
    <section id="lavori" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
              I nostri lavori.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Un'immagine vale più di mille parole. Scopri alcuni dei nostri progetti più recenti e rappresentativi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/9] bg-muted cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-accent font-medium text-sm tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
