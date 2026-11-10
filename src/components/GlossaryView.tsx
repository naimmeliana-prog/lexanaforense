import React, { useMemo, useState } from 'react';
import { BookMarked, Scale, Search, Stethoscope } from 'lucide-react';
import { FORENSIC_GLOSSARY, GlossaryCategory } from '../data/glossaryData';

export const GlossaryView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<GlossaryCategory | 'ALL'>('ALL');
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');

  const categories: ('ALL' | GlossaryCategory)[] = [
    'ALL',
    'Criminalística y Custodia',
    'Tanatología',
    'Victimología y Clínica SANE',
    'Toxicología Forense',
    'Traumatología y Balística',
    'Marco Legal y Peritaje',
  ];

  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    for (const item of FORENSIC_GLOSSARY) {
      const firstChar = item.term
        .charAt(0)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
      letters.add(firstChar);
    }
    return ['ALL', ...Array.from(letters).sort()];
  }, []);

  const filteredTerms = useMemo(() => {
    return FORENSIC_GLOSSARY.filter((item) => {
      const matchCategory =
        selectedCategory === 'ALL' || item.category === selectedCategory;

      const firstChar = item.term
        .charAt(0)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
      const matchLetter =
        selectedLetter === 'ALL' || firstChar === selectedLetter;

      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        item.term.toLowerCase().includes(q) ||
        item.englishEquivalent.toLowerCase().includes(q) ||
        item.definition.toLowerCase().includes(q) ||
        item.clinicalApplication.toLowerCase().includes(q) ||
        item.relatedTerms.some((rt) => rt.toLowerCase().includes(q));

      return matchCategory && matchLetter && matchSearch;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <p className="text-xs font-medium text-teal-700 dark:text-teal-400">
            Consulta Rápida Técnico-Pericial · {FORENSIC_GLOSSARY.length} Términos Desarrollados con Equivalencia Bilingüe IAFN
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            Glosario y Diccionario Técnico de Enfermería Forense
          </h2>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar término, Fisch, tanatología, SANE..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
          />
        </div>
      </div>

      {/* Category & Alphabetical Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg">
          {categories.map((cat) => {
            const count =
              cat === 'ALL'
                ? FORENSIC_GLOSSARY.length
                : FORENSIC_GLOSSARY.filter((t) => t.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat === 'ALL' ? `Todas las áreas (${count})` : `${cat} (${count})`}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-1">
          <span className="text-xs text-slate-500 dark:text-slate-400 mr-2">
            Índice alfabético:
          </span>
          {availableLetters.map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() => setSelectedLetter(letter)}
              className={`px-2.5 py-1 text-xs font-mono font-semibold rounded-md border transition-colors ${
                selectedLetter === letter
                  ? 'bg-teal-700 text-white border-teal-700'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-teal-600'
              }`}
            >
              {letter === 'ALL' ? 'Todos' : letter}
            </button>
          ))}
        </div>
      </div>

      {/* Dictionary Terms Grid */}
      {filteredTerms.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-10 text-center space-y-2">
          <BookMarked className="w-8 h-8 text-teal-700 dark:text-teal-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            No se encontraron términos que coincidan con el filtro actual
          </h3>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('ALL');
              setSelectedLetter('ALL');
            }}
            className="text-xs font-semibold text-teal-700 dark:text-teal-400 underline"
          >
            Restablecer filtros del diccionario
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Clean unboxed metadata */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-teal-700 dark:text-teal-400">
                    {item.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="italic">EN: {item.englishEquivalent}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {item.term}
                </h3>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.definition}
                </p>

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5" />
                    <span>Aplicación en la Práctica de Enfermería Forense:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item.clinicalApplication}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-start gap-1.5">
                  <Scale className="w-3.5 h-3.5 mt-0.5 shrink-0 text-slate-400" />
                  <span>
                    <strong className="text-slate-700 dark:text-slate-300">
                      Referencia:
                    </strong>{' '}
                    {item.legalOrTechnicalReference}
                  </span>
                </div>
                {item.relatedTerms.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                    <strong className="text-slate-700 dark:text-slate-300">
                      Conceptos vinculados:
                    </strong>
                    {item.relatedTerms.map((rt, idx) => (
                      <React.Fragment key={rt}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCategory('ALL');
                            setSelectedLetter('ALL');
                            setSearchQuery(rt.split(' (')[0]);
                          }}
                          className="text-teal-700 dark:text-teal-400 hover:underline text-left"
                        >
                          {rt}
                        </button>
                        {idx < item.relatedTerms.length - 1 && (
                          <span aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
