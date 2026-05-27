import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Cantiere Edile Impresa Balatti"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm mb-6 uppercase tracking-wider backdrop-blur-sm">
            Costruzioni e Ristrutturazioni
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6 leading-tight">
            Costruiamo con <span className="text-accent">solida</span> passione
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Da tre generazioni, l'Impresa Balatti trasforma progetti su carta in realtà di cemento, mattoni e precisione.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto h-14 px-8 text-base group bg-accent hover:bg-accent/90 text-accent-foreground" data-testid="button-hero-contact">
              <a href="#contatti">
                Inizia il tuo progetto
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-14 px-8 text-base bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white" data-testid="button-hero-portfolio">
              <a href="#lavori">Scopri i nostri lavori</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
