import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type ActiveSection =
  | 'ruta'
  | 'laboratorio'
  | 'traducciones'
  | 'glosario'
  | 'foro'
  | 'perfil';

interface NavbarProps {
  activeSection: ActiveSection;
  onSelectSection: (section: ActiveSection) => void;
  username: string;
  overallPercentage: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onSelectSection,
  username,
  overallPercentage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveSection; label: string }[] = [
    { id: 'ruta', label: 'Ruta Formativa' },
    { id: 'laboratorio', label: 'Simulador y Casos' },
    { id: 'traducciones', label: 'Biblioteca IAFN' },
    { id: 'glosario', label: 'Glosario Forense' },
    { id: 'foro', label: 'Foro Colaborativo' },
    { id: 'perfil', label: 'Perfil y Datos' },
  ];

  const handleNavClick = (id: ActiveSection) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('ruta')}
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 font-display whitespace-nowrap shrink-0 text-left focus-visible:outline-2 focus-visible:outline-teal-600"
        >
          LexAna Forense
        </button>

        {/* Zone 2: Concise single-line text navigation links */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`py-1 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                  isActive
                    ? 'border-teal-700 dark:border-teal-400 text-slate-900 dark:text-white font-semibold'
                    : 'border-transparent hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('perfil')}
            className="px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg transition-colors whitespace-nowrap shrink-0 tabular-nums"
          >
            @{username} · {overallPercentage}%
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Abrir menú de navegación"
            className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
