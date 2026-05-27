import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const stats = [
    { label: "Anni di Esperienza", value: "35+" },
    { label: "Progetti Completati", value: "500+" },
    { label: "Team Specializzato", value: "20+" },
  ];

  return (
    <section id="chi-siamo" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3" />
              <img
                src="/portfolio-1.jpg"
                alt="Il nostro team al lavoro"
                className="relative rounded-2xl shadow-xl object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-xl shadow-2xl hidden md:block">
                <p className="text-5xl font-bold font-display mb-1">35<span className="text-accent">+</span></p>
                <p className="text-sm font-medium uppercase tracking-wider">Anni di<br/>Esperienza</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Chi Siamo</span>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground leading-tight">
                Molto più di un'impresa edile.
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-8">
              <p>
                Siamo un'azienda familiare nata dalla dedizione al lavoro ben fatto. Da oltre tre decenni, costruiamo e ristrutturiamo abitazioni, edifici commerciali e strutture industriali con la stessa cura che metteremmo nella nostra stessa casa.
              </p>
              <p>
                Non crediamo nelle scorciatoie. Crediamo nei materiali di qualità, nel rispetto dei tempi e in un rapporto diretto e trasparente con ogni singolo cliente.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Affidabilità e trasparenza garantite",
                "Materiali di prima scelta e tecniche all'avanguardia",
                "Rispetto rigoroso dei tempi di consegna",
                "Preventivi chiari senza sorprese"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border md:hidden">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-primary font-display mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
