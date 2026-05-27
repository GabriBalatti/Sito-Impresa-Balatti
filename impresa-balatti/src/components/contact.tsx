import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Messaggio inviato",
      description: "Grazie per averci contattato. Ti risponderemo il prima possibile.",
    });
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contatti" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Contatti</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
              Costruiamo il tuo futuro, insieme.
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Hai un progetto in mente o hai bisogno di una consulenza? Contattaci per un preventivo gratuito e senza impegno.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Sede Operativa</h4>
                  <p className="text-muted-foreground">Via delle Costruzioni, 42<br/>20100 Milano (MI), Italia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Telefono</h4>
                  <p className="text-muted-foreground">+39 02 1234 5678<br/>Lun - Ven, 8:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">info@impresabalatti.it<br/>preventivi@impresabalatti.it</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
              <h3 className="text-2xl font-display font-bold mb-6">Richiedi un Preventivo</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome e Cognome</Label>
                    <Input id="nome" required placeholder="Mario Rossi" className="bg-background" data-testid="input-contact-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Telefono</Label>
                    <Input id="telefono" type="tel" required placeholder="+39 333 1234567" className="bg-background" data-testid="input-contact-phone" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="mario.rossi@email.com" className="bg-background" data-testid="input-contact-email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servizio">Servizio di interesse</Label>
                  <select id="servizio" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" data-testid="select-contact-service">
                    <option value="">Seleziona un servizio...</option>
                    <option value="nuova-costruzione">Nuova Costruzione</option>
                    <option value="ristrutturazione">Ristrutturazione Completa</option>
                    <option value="manutenzione">Manutenzione Straordinaria</option>
                    <option value="industriale">Edilizia Industriale</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="messaggio">Il tuo progetto</Label>
                  <Textarea id="messaggio" required placeholder="Descrivi brevemente di cosa hai bisogno..." className="min-h-[120px] bg-background" data-testid="input-contact-message" />
                </div>

                <Button type="submit" size="lg" className="w-full text-base" data-testid="button-contact-submit">
                  Invia Richiesta
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
