import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Clock, Award } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Solida Affidabilità",
      description: "Non promettiamo ciò che non possiamo mantenere. Rispetto ferreo di preventivi e scadenze.",
      icon: ShieldCheck,
    },
    {
      title: "Personale Qualificato",
      description: "Maestranze esperte, costantemente formate e operanti nel pieno rispetto delle norme di sicurezza.",
      icon: HardHat,
    },
    {
      title: "Puntualità",
      description: "Gestione del cantiere ottimizzata per garantire la consegna nei tempi stabiliti.",
      icon: Clock,
    },
    {
      title: "Qualità Certificata",
      description: "Impiego esclusivo di materiali di primissima scelta e tecniche costruttive all'avanguardia.",
      icon: Award,
    },
  ];

  return (
    <section id="perche-sceglierci" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] rounded-full bg-black/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Perché scegliere noi
          </h2>
          <p className="text-lg text-primary-foreground/80">
            L'edilizia è un investimento importante. Affidarlo nelle mani giuste fa la differenza tra un sogno realizzato e un cantiere senza fine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-md p-8 rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-bold font-display mb-3">{feature.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
