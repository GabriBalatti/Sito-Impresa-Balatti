import React from "react";
import { HardHat } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-muted py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-white/10 pb-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-white mb-4">
              <HardHat className="w-8 h-8 text-primary" />
              <span>Impresa Balatti</span>
            </a>
            <p className="text-white/60 max-w-sm mb-6">
              Costruiamo il futuro con la solidità dell'esperienza. Azienda edile specializzata in costruzioni civili e industriali, e ristrutturazioni di prestigio.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Navigazione</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#chi-siamo" className="hover:text-accent transition-colors">Chi Siamo</a></li>
              <li><a href="#servizi" className="hover:text-accent transition-colors">I Nostri Servizi</a></li>
              <li><a href="#lavori" className="hover:text-accent transition-colors">Portfolio Lavori</a></li>
              <li><a href="#perche-sceglierci" className="hover:text-accent transition-colors">Perché Sceglierci</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Informazioni</h4>
            <ul className="space-y-2 text-white/60">
              <li>P.IVA: 01234567890</li>
              <li>Capitale Sociale: € 100.000 i.v.</li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Impresa Edile Balatti S.r.l. Tutti i diritti riservati.</p>
          <p className="mt-2 md:mt-0">Progettato con dedizione in Italia.</p>
        </div>
      </div>
    </footer>
  );
}
