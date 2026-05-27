import React from "react";
import { motion } from "framer-motion";
import { Home, Building2, Wrench, PaintRoller, Ruler, Hammer } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "Costruzioni Civili",
      description: "Realizzazione di nuove unità abitative chiavi in mano, dalle fondamenta al tetto, con attenzione all'efficienza energetica.",
      icon: Home,
    },
    {
      title: "Costruzioni Industriali",
      description: "Capannoni, magazzini e strutture commerciali progettate per la massima funzionalità e durabilità.",
      icon: Building2,
    },
    {
      title: "Ristrutturazioni Complete",
      description: "Rinnovo totale di interni ed esterni, riqualificazione energetica e adeguamento sismico.",
      icon: Hammer,
    },
    {
      title: "Manutenzioni Straordinarie",
      description: "Interventi mirati per il ripristino di facciate, rifacimento tetti e impermeabilizzazioni.",
      icon: Wrench,
    },
    {
      title: "Finiture di Pregio",
      description: "Posa di pavimenti, rivestimenti, opere in cartongesso e tinteggiature eseguite a regola d'arte.",
      icon: PaintRoller,
    },
    {
      title: "Progettazione e Pratiche",
      description: "Supporto tecnico per iter burocratici, permessi e direzione lavori in cantiere.",
      icon: Ruler,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="servizi" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">I Nostri Servizi</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Cosa possiamo costruire per te.
          </h2>
          <p className="text-lg text-muted-foreground">
            Dalla piccola ristrutturazione al grande complesso industriale, mettiamo la stessa dedizione in ogni progetto.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group bg-card">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
