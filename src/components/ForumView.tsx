import React, { useState } from 'react';
import { MessageSquare, Plus, Search, Send, ThumbsUp } from 'lucide-react';
import {
  ForumThread,
  LearningLevelId,
  UserProfileCustomization,
} from '../types/forensic';

interface ForumViewProps {
  threads: ForumThread[];
  currentUsername: string;
  userProfile: UserProfileCustomization;
  onCreateThread: (thread: {
    title: string;
    category: ForumThread['category'];
    levelId: LearningLevelId;
    content: string;
    tags: string[];
  }) => void;
  onAddReply: (threadId: string, content: string) => void;
  onUpvoteThread: (threadId: string) => void;
}

export const ForumView: React.FC<ForumViewProps> = ({
  threads,
  currentUsername,
  userProfile,
  onCreateThread,
  onAddReply,
  onUpvoteThread,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showNewThreadForm, setShowNewThreadForm] = useState<boolean>(false);

  // New Thread Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] =
    useState<ForumThread['category']>('Casos Clínicos');
  const [newLevel, setNewLevel] = useState<LearningLevelId>(LearningLevelId.LEVEL_1);
  const [newContent, setNewContent] = useState('');
  const [newTags, setNewTags] = useState('Urgencias, España, Protocolo');

  // Reply input state per thread
  const [replyDrafts, setReplyDrafts] = useState<Record<string, string>>({});

  const categories: ('ALL' | ForumThread['category'])[] = [
    'ALL',
    'Casos Clínicos',
    'Marco Legal España',
    'Literatura Traducida IAFN',
    'Cadena de Custodia',
    'Peritaje y Salidas',
  ];

  const filteredThreads = threads.filter((t) => {
    const matchCat = selectedCategory === 'ALL' || t.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      !q ||
      t.title.toLowerCase().includes(q) ||
      t.content.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  const handleSubmitNewThread = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;
    const parsedTags = newTags
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    onCreateThread({
      title: newTitle.trim(),
      category: newCategory,
      levelId: newLevel,
      content: newContent.trim(),
      tags: parsedTags.length > 0 ? parsedTags : ['Enfermería Forense'],
    });

    setNewTitle('');
    setNewContent('');
    setShowNewThreadForm(false);
  };

  const handleReplySubmit = (threadId: string) => {
    const draft = replyDrafts[threadId]?.trim();
    if (!draft) return;
    onAddReply(threadId, draft);
    setReplyDrafts((prev) => ({ ...prev, [threadId]: '' }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <p className="text-xs font-medium text-teal-700 dark:text-teal-400">
            Comunidad Hispano-Americana de Estudio · Resolución de Dudas Clínicas y Legales
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
            Foro Colaborativo de Enfermería Forense
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setShowNewThreadForm((prev) => !prev)}
          className="px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{showNewThreadForm ? 'Cancelar consulta' : 'Plantear nueva duda'}</span>
        </button>
      </div>

      {/* New Thread Form */}
      {showNewThreadForm && (
        <form
          onSubmit={handleSubmitNewThread}
          className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Publicar consulta como @{currentUsername} ({userProfile.nursingSpecialty})
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-1">
              <label
                htmlFor="thread-title"
                className="block text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                Título de la duda o caso clínico
              </label>
              <input
                id="thread-title"
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Ej. Conservación de muestras en guardia de fin de semana sin médico forense in situ"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-slate-100"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="thread-category"
                className="block text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                Categoría Temática
              </label>
              <select
                id="thread-category"
                value={newCategory}
                onChange={(e) =>
                  setNewCategory(e.target.value as ForumThread['category'])
                }
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-slate-100"
              >
                <option value="Casos Clínicos">Casos Clínicos</option>
                <option value="Marco Legal España">Marco Legal España</option>
                <option value="Literatura Traducida IAFN">Literatura Traducida IAFN</option>
                <option value="Cadena de Custodia">Cadena de Custodia</option>
                <option value="Peritaje y Salidas">Peritaje y Salidas</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label
                htmlFor="thread-level"
                className="block text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                Nivel relacionado
              </label>
              <select
                id="thread-level"
                value={newLevel}
                onChange={(e) => setNewLevel(e.target.value as LearningLevelId)}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-slate-100"
              >
                <option value={LearningLevelId.LEVEL_1}>Nivel 1 · Fundamentos</option>
                <option value={LearningLevelId.LEVEL_2}>Nivel 2 · Criminalística</option>
                <option value={LearningLevelId.LEVEL_3}>Nivel 3 · SANE y Violencia</option>
                <option value={LearningLevelId.LEVEL_4}>Nivel 4 · Patología y Peritaje</option>
              </select>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="thread-tags"
                className="block text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                Etiquetas (separadas por comas)
              </label>
              <input
                id="thread-tags"
                type="text"
                value={newTags}
                onChange={(e) => setNewTags(e.target.value)}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-slate-100"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="thread-content"
              className="block text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              Descripción detallada (recuerda omitir datos identificativos de pacientes reales)
            </label>
            <textarea
              id="thread-content"
              rows={4}
              required
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Describe el protocolo, duda normativa o procedimiento técnico..."
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3.5 py-2 text-sm text-slate-900 dark:text-slate-100"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowNewThreadForm(false)}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg"
            >
              Publicar en el Foro
            </button>
          </div>
        </form>
      )}

      {/* Search & Category Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat === 'ALL' ? 'Todos los temas' : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar en el foro..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
          />
        </div>
      </div>

      {/* Threads List */}
      {filteredThreads.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-10 text-center space-y-3">
          <MessageSquare className="w-8 h-8 text-teal-700 dark:text-teal-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            El foro está limpio y sin publicaciones previas
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            No hay usuarios ni hilos prefabricados. Pulsa en «Plantear nueva duda» arriba a la derecha para abrir el primer debate o anotar una consulta clínica.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredThreads.map((thread) => (
            <article
              key={thread.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-5"
            >
            {/* Clean unboxed metadata */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-teal-700 dark:text-teal-400">
                  {thread.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>@{thread.authorUsername}</span>
                <span aria-hidden="true">·</span>
                <span>{thread.authorSpecialty}</span>
                <span aria-hidden="true">·</span>
                <span>{thread.authorRegion}</span>
              </div>

              <button
                type="button"
                onClick={() => onUpvoteThread(thread.id)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800 hover:border-teal-600 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <ThumbsUp className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>Útil ({thread.upvotes})</span>
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {thread.title}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {thread.content}
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>Temas:</span>
                <span>{thread.tags.join(' · ')}</span>
              </div>
            </div>

            {/* Replies */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 tabular-nums">
                <MessageSquare className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>{thread.replies.length} aportaciones de compañeras</span>
              </div>

              <div className="space-y-3">
                {thread.replies.map((rep) => (
                  <div
                    key={rep.id}
                    className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800 space-y-1.5"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        @{rep.authorUsername}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{rep.authorSpecialty}</span>
                      <span aria-hidden="true">·</span>
                      <span>{rep.authorRegion}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {rep.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Add Reply Input */}
              <div className="pt-2 flex gap-2">
                <input
                  type="text"
                  value={replyDrafts[thread.id] || ''}
                  onChange={(e) =>
                    setReplyDrafts((prev) => ({
                      ...prev,
                      [thread.id]: e.target.value,
                    }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleReplySubmit(thread.id);
                    }
                  }}
                  placeholder="Añadir respuesta o referencia clínica..."
                  className="flex-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3.5 py-2 text-xs sm:text-sm text-slate-900 dark:text-slate-100"
                />
                <button
                  type="button"
                  onClick={() => handleReplySubmit(thread.id)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg flex items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Responder</span>
                </button>
              </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
