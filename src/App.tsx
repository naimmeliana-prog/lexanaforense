/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from 'react';
import {
  BellRing,
  BookOpen,
  Download,
  FlaskConical,
  Scale,
  X,
} from 'lucide-react';
import {
  ForumThread,
  LearningLevelId,
  LocalUserAccount,
  ReminderSettings,
  ThemePreference,
  UserProfileCustomization,
} from './types/forensic';
import { CURRICULUM_MODULES } from './data/curriculumData';
import { INTERACTIVE_EXERCISES } from './data/exercisesData';
import { INITIAL_FORUM_THREADS } from './data/forumSeedData';
import {
  buildExportPayload,
  calculateCurriculumProgress,
  createDefaultProgress,
  createNewUserAccount,
  hashPasswordLocal,
  toggleSubTopicCompletion,
  validateAndParseImportJson,
  validateCredentialsInput,
} from './services/storageService';
import { ActiveSection, Navbar } from './components/Navbar';
import { CurriculumView } from './components/CurriculumView';
import { InteractiveLabView } from './components/InteractiveLabView';
import { TranslatedLibraryView } from './components/TranslatedLibraryView';
import { GlossaryView } from './components/GlossaryView';
import { ForumView } from './components/ForumView';
import { ProfileAndDataView } from './components/ProfileAndDataView';
import heroForensicImg from './assets/images/hero_forensic_nursing_1794272209242.jpg';

// New v2 storage keys (purges any previous v1 demo/invented users)
const ACCOUNTS_STORAGE_KEY = 'lexana_forense_accounts_v2';
const ACTIVE_USER_STORAGE_KEY = 'lexana_forense_active_user_v2';
const GUEST_STATE_STORAGE_KEY = 'lexana_forense_guest_v2';
const FORUM_STORAGE_KEY = 'lexana_forense_forum_v2';

function purgeLegacyV1Storage() {
  try {
    localStorage.removeItem('lexmedica_forense_accounts_v1');
    localStorage.removeItem('lexmedica_forense_active_user_v1');
    localStorage.removeItem('lexmedica_forense_forum_v1');
  } catch {
    // Ignore storage errors
  }
}

function loadRegisteredAccounts(): Record<string, LocalUserAccount> {
  purgeLegacyV1Storage();
  try {
    const raw = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    }
  } catch {
    // Fallback to empty
  }
  return {};
}

function createCleanGuestSession(): LocalUserAccount {
  try {
    const raw = localStorage.getItem(GUEST_STATE_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && parsed.progress) {
        return parsed;
      }
    }
  } catch {
    // Fallback
  }
  const cleanSession = createNewUserAccount('invitada', '0000');
  cleanSession.profile.displayName = 'Sin usuario registrado';
  cleanSession.progress = createDefaultProgress(); // 0% progress, 0 completed, 0 streak
  return cleanSession;
}

export default function App() {
  const [accounts, setAccounts] = useState<Record<string, LocalUserAccount>>(
    loadRegisteredAccounts
  );
  const [activeUsername, setActiveUsername] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(ACTIVE_USER_STORAGE_KEY);
      return saved || null;
    } catch {
      return null;
    }
  });

  const [guestAccount, setGuestAccount] = useState<LocalUserAccount>(
    createCleanGuestSession
  );

  const [forumThreads, setForumThreads] = useState<ForumThread[]>(() => {
    try {
      const saved = localStorage.getItem(FORUM_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Fallback
    }
    return INITIAL_FORUM_THREADS; // Empty array [] without invented users
  });

  const [activeSection, setActiveSection] = useState<ActiveSection>('ruta');
  const [heroImgError, setHeroImgError] = useState(false);
  const [pushBannerMessage, setPushBannerMessage] = useState<string | null>(null);

  const isGuestSession = !activeUsername || !accounts[activeUsername];

  const currentAccount = useMemo(
    () =>
      !isGuestSession && activeUsername
        ? accounts[activeUsername]
        : guestAccount,
    [accounts, activeUsername, guestAccount, isGuestSession]
  );

  const progressSummary = useMemo(
    () => calculateCurriculumProgress(CURRICULUM_MODULES, currentAccount.progress),
    [currentAccount.progress]
  );

  // Persist registered accounts & guest session
  useEffect(() => {
    try {
      localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
      if (activeUsername) {
        localStorage.setItem(ACTIVE_USER_STORAGE_KEY, activeUsername);
      } else {
        localStorage.removeItem(ACTIVE_USER_STORAGE_KEY);
      }
      localStorage.setItem(GUEST_STATE_STORAGE_KEY, JSON.stringify(guestAccount));
    } catch {
      // Ignore quota errors
    }
  }, [accounts, activeUsername, guestAccount]);

  // Persist forum threads
  useEffect(() => {
    try {
      localStorage.setItem(FORUM_STORAGE_KEY, JSON.stringify(forumThreads));
    } catch {
      // Ignore
    }
  }, [forumThreads]);

  // Automatic & Manual Dark Mode Sync on <html>
  useEffect(() => {
    const root = document.documentElement;
    const pref = currentAccount.profile.themePreference;

    const applyTheme = () => {
      if (pref === ThemePreference.DARK) {
        root.classList.add('dark');
      } else if (pref === ThemePreference.LIGHT) {
        root.classList.remove('dark');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.toggle('dark', prefersDark);
      }
    };

    applyTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => {
      if (currentAccount.profile.themePreference === ThemePreference.SYSTEM) {
        applyTheme();
      }
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [currentAccount.profile.themePreference]);

  // Daily Push Reminder Checker
  useEffect(() => {
    if (!currentAccount.reminders.enabled) return;

    const interval = setInterval(() => {
      const now = new Date();
      const todayIso = now.toISOString().split('T')[0];
      const currentHHMM = `${String(now.getHours()).padStart(2, '0')}:${String(
        now.getMinutes()
      ).padStart(2, '0')}`;

      if (
        currentAccount.reminders.daysOfWeek.includes(now.getDay()) &&
        currentAccount.reminders.dailyTime === currentHHMM &&
        currentAccount.reminders.lastNotifiedDate !== todayIso
      ) {
        triggerNotification(
          'Recordatorio Diario · LexAna Forense',
          `Dedica hoy ${currentAccount.profile.dailyGoalMinutes} min a estudiar un módulo o resolver un caso clínico.`
        );
        updateCurrentAccount((acc) => ({
          ...acc,
          reminders: {
            ...acc.reminders,
            lastNotifiedDate: todayIso,
          },
        }));
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [currentAccount]);

  const updateCurrentAccount = (
    updater: (acc: LocalUserAccount) => LocalUserAccount
  ) => {
    if (!isGuestSession && activeUsername) {
      setAccounts((prev) => {
        const target = prev[activeUsername];
        if (!target) return prev;
        return {
          ...prev,
          [activeUsername]: updater(target),
        };
      });
    } else {
      setGuestAccount((prev) => updater(prev));
    }
  };

  const triggerNotification = async (title: string, body: string) => {
    setPushBannerMessage(`${title}: ${body}`);
    if (typeof window !== 'undefined' && 'Notification' in window) {
      try {
        if (Notification.permission === 'granted') {
          new Notification(title, { body, icon: '/favicon.svg' });
        } else if (Notification.permission !== 'denied') {
          const perm = await Notification.requestPermission();
          if (perm === 'granted') {
            new Notification(title, { body, icon: '/favicon.svg' });
          }
        }
      } catch {
        // Fallback to in-app notification banner already set above
      }
    }
  };

  const handleToggleSubTopic = (subTopicId: string) => {
    updateCurrentAccount((acc) => ({
      ...acc,
      progress: toggleSubTopicCompletion(
        acc.progress,
        subTopicId,
        CURRICULUM_MODULES
      ),
    }));
  };

  const handleSaveModuleNote = (moduleId: string, note: string) => {
    updateCurrentAccount((acc) => ({
      ...acc,
      progress: {
        ...acc.progress,
        moduleNotes: {
          ...acc.progress.moduleNotes,
          [moduleId]: note,
        },
      },
    }));
  };

  const handleRecordExerciseAttempt = (
    exerciseId: string,
    selectedOptionId: string,
    isCorrect: boolean
  ) => {
    updateCurrentAccount((acc) => ({
      ...acc,
      progress: {
        ...acc.progress,
        exerciseAttempts: {
          ...acc.progress.exerciseAttempts,
          [exerciseId]: {
            exerciseId,
            selectedOptionId,
            isCorrect,
            attemptedAt: new Date().toISOString(),
          },
        },
      },
    }));
  };

  const handleResetProgressToZero = () => {
    updateCurrentAccount((acc) => ({
      ...acc,
      progress: createDefaultProgress(),
    }));
  };

  const handleRegisterOrLogin = (
    mode: 'login' | 'register',
    rawUsername: string,
    rawPassword: string
  ): { success: boolean; message: string } => {
    const validation = validateCredentialsInput(rawUsername, rawPassword);
    if (!validation.valid) {
      return { success: false, message: validation.error || 'Datos inválidos.' };
    }

    const cleanUser = rawUsername.trim();
    const existing = accounts[cleanUser];

    if (mode === 'register') {
      if (existing) {
        return {
          success: false,
          message: `El usuario @${cleanUser} ya existe en este dispositivo. Usa "Iniciar sesión".`,
        };
      }
      const newAcc = createNewUserAccount(cleanUser, rawPassword);
      setAccounts((prev) => ({
        ...prev,
        [cleanUser]: newAcc,
      }));
      setActiveUsername(cleanUser);
      return {
        success: true,
        message: `Cuenta @${cleanUser} creada con el progreso a 0% y activada correctamente.`,
      };
    } else {
      if (!existing) {
        return {
          success: false,
          message: `No se encontró el usuario @${cleanUser}. Regístralo primero.`,
        };
      }
      const candidateHash = hashPasswordLocal(cleanUser, rawPassword);
      if (existing.passwordHash !== candidateHash) {
        return {
          success: false,
          message: 'Contraseña incorrecta para este usuario local.',
        };
      }
      setActiveUsername(cleanUser);
      return {
        success: true,
        message: `Sesión iniciada correctamente como @${cleanUser}.`,
      };
    }
  };

  const handleUpdateProfile = (nextProfile: UserProfileCustomization) => {
    updateCurrentAccount((acc) => ({
      ...acc,
      profile: nextProfile,
    }));
  };

  const handleUpdateReminders = (nextReminders: ReminderSettings) => {
    updateCurrentAccount((acc) => ({
      ...acc,
      reminders: nextReminders,
    }));
  };

  const handleExportJson = () => {
    const payload = buildExportPayload(currentAccount, forumThreads);
    const jsonString = JSON.stringify(payload, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lexana-forense-${currentAccount.username}-${
      new Date().toISOString().split('T')[0]
    }.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportJson = (
    rawJson: string
  ): { success: boolean; message: string } => {
    const parsed = validateAndParseImportJson(rawJson);
    if (!parsed.valid || !parsed.data) {
      return {
        success: false,
        message: parsed.error || 'Archivo JSON inválido.',
      };
    }

    const importedUser = parsed.data.userAccount;
    const restoredAccount: LocalUserAccount = {
      username: importedUser.username,
      passwordHash:
        accounts[importedUser.username]?.passwordHash ||
        hashPasswordLocal(importedUser.username, 'forense2026'),
      createdAt: importedUser.createdAt,
      profile: importedUser.profile,
      progress: importedUser.progress,
      reminders: importedUser.reminders,
    };

    setAccounts((prev) => ({
      ...prev,
      [restoredAccount.username]: restoredAccount,
    }));
    setActiveUsername(restoredAccount.username);

    if (Array.isArray(parsed.data.customForumThreads)) {
      setForumThreads(parsed.data.customForumThreads);
    }

    return {
      success: true,
      message: `Progreso y configuración de @${restoredAccount.username} restaurados con éxito desde JSON.`,
    };
  };

  const handleCreateForumThread = (newThreadData: {
    title: string;
    category: ForumThread['category'];
    levelId: LearningLevelId;
    content: string;
    tags: string[];
  }) => {
    const authorLabel = isGuestSession ? 'estudiante_local' : currentAccount.username;
    const created: ForumThread = {
      id: `thread-${Date.now()}`,
      title: newThreadData.title,
      category: newThreadData.category,
      levelId: newThreadData.levelId,
      authorUsername: authorLabel,
      authorSpecialty: currentAccount.profile.nursingSpecialty,
      authorRegion: currentAccount.profile.regionalFocus,
      createdAt: new Date().toISOString(),
      content: newThreadData.content,
      tags: newThreadData.tags,
      upvotes: 1,
      replies: [],
    };
    setForumThreads((prev) => [created, ...prev]);
  };

  const handleAddForumReply = (threadId: string, content: string) => {
    const authorLabel = isGuestSession ? 'estudiante_local' : currentAccount.username;
    setForumThreads((prev) =>
      prev.map((t) => {
        if (t.id !== threadId) return t;
        return {
          ...t,
          replies: [
            ...t.replies,
            {
              id: `rep-${Date.now()}`,
              authorUsername: authorLabel,
              authorSpecialty: currentAccount.profile.nursingSpecialty,
              authorRegion: currentAccount.profile.regionalFocus,
              createdAt: new Date().toISOString(),
              content,
              upvotes: 1,
            },
          ],
        };
      })
    );
  };

  const handleUpvoteThread = (threadId: string) => {
    setForumThreads((prev) =>
      prev.map((t) => (t.id === threadId ? { ...t, upvotes: t.upvotes + 1 } : t))
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Top Bar Contract */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        username={isGuestSession ? 'Crear cuenta' : currentAccount.username}
        overallPercentage={progressSummary.overallPercentage}
      />

      {/* Push Notification Toast Banner */}
      {pushBannerMessage && (
        <div
          role="status"
          className="bg-teal-800 text-white px-6 py-3 text-xs font-medium flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 max-w-[1280px] mx-auto w-full justify-between">
            <div className="flex items-center gap-2">
              <BellRing className="w-4 h-4 shrink-0" />
              <span>{pushBannerMessage}</span>
            </div>
            <button
              type="button"
              onClick={() => setPushBannerMessage(null)}
              aria-label="Cerrar notificación"
              className="p-1 hover:bg-teal-700 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 py-10 space-y-12">
        {/* Hero Split Section (Shown on Ruta Formativa) */}
        {activeSection === 'ruta' && (
          <section className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-teal-700 dark:text-teal-400 font-medium">
                    <span>LexAna Forense · Formación Abierta y Gratuita</span>
                    <span aria-hidden="true">·</span>
                    <span>España (IMLCF / LECrim)</span>
                    <span aria-hidden="true">·</span>
                    <span>Hispanoamérica</span>
                    <span aria-hidden="true">·</span>
                    <span>Estándar Americano IAFN / SANE</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-slate-900 dark:text-slate-100 leading-[1.15] tracking-tight">
                    Especialízate en Enfermería Forense sin pagar por títulos no reconocidos
                  </h1>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                    Ante la ausencia de especialidad oficial vía EIR en España, LexAna Forense desarrolla íntegramente el temario clínico-legal de los Institutos de Medicina Legal (IMLCF), la Orden JUS/1291/2010 del INTCF, la Red Iberoamericana y las guías norteamericanas SANE/IAFN traducidas al español.
                  </p>
                </div>

                {/* Single Focal CTA + Secondary Action */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveSection('laboratorio')}
                    className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
                  >
                    <FlaskConical className="w-4 h-4" />
                    <span>Practicar los {INTERACTIVE_EXERCISES.length} Casos Clínicos</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleExportJson}
                    className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Exportar Progreso (.JSON)</span>
                  </button>
                </div>
              </div>

              {/* Right Column Hero Visual */}
              <div className="lg:col-span-5 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 relative min-h-[240px]">
                {!heroImgError ? (
                  <img
                    src={heroForensicImg}
                    alt="Mesa de trabajo de enfermería forense clínica con estetoscopio, lámina anatómica, tubos de muestras precintados y cuaderno médico-legal"
                    onError={() => setHeroImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-100 to-teal-50 dark:from-slate-900 dark:to-teal-950">
                    <Scale className="w-12 h-12 text-teal-700 dark:text-teal-400 mb-3" />
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      Documentación Clínico-Legal y Preservación Forense
                    </span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                  <div className="text-xs font-medium">
                    {isGuestSession
                      ? 'Sesión Local Limpia (Progreso Inicial: 0%)'
                      : `Usuario Activo: @${currentAccount.username}`}
                  </div>
                  <div className="text-[11px] text-slate-200 tabular-nums">
                    Especialidad: {currentAccount.profile.nursingSpecialty} · Enfoque:{' '}
                    {currentAccount.profile.regionalFocus}
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column KPI Progress Strip below Hero (Starts at 0%) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 tabular-nums">
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Progreso Global del Plan
                </div>
                <div className="text-2xl font-bold text-teal-700 dark:text-teal-400 mt-1">
                  {progressSummary.overallPercentage}% completado
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {progressSummary.completedSubTopics} de{' '}
                  {progressSummary.totalSubTopics} unidades clínicas
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Carga Lectiva Acumulada
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {progressSummary.completedHours} / {progressSummary.totalHours} h
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  8 Módulos · SANE-A + IMLCF + INTCF
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Casos Clínicos Evaluados
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {Object.keys(currentAccount.progress.exerciseAttempts).length} /{' '}
                  {INTERACTIVE_EXERCISES.length} casos
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Con justificación legal LECrim e INTCF
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Racha de Estudio Personal
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {currentAccount.progress.studyStreakDays} días ·{' '}
                  {currentAccount.profile.dailyGoalMinutes} min/día
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Sin certificados comerciales · 100% conocimiento real
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Active View Content */}
        {activeSection === 'ruta' && (
          <CurriculumView
            modules={CURRICULUM_MODULES}
            progress={currentAccount.progress}
            progressSummary={progressSummary}
            showOriginalExcerpts={currentAccount.profile.showOriginalLanguageExcerpts}
            onToggleSubTopic={handleToggleSubTopic}
            onSaveModuleNote={handleSaveModuleNote}
            onNavigateToLab={() => setActiveSection('laboratorio')}
          />
        )}

        {activeSection === 'laboratorio' && (
          <InteractiveLabView
            exercises={INTERACTIVE_EXERCISES}
            exerciseAttempts={currentAccount.progress.exerciseAttempts}
            onRecordAttempt={handleRecordExerciseAttempt}
          />
        )}

        {activeSection === 'traducciones' && (
          <TranslatedLibraryView modules={CURRICULUM_MODULES} />
        )}

        {activeSection === 'glosario' && <GlossaryView />}

        {activeSection === 'foro' && (
          <ForumView
            threads={forumThreads}
            currentUsername={
              isGuestSession ? 'estudiante_local' : currentAccount.username
            }
            userProfile={currentAccount.profile}
            onCreateThread={handleCreateForumThread}
            onAddReply={handleAddForumReply}
            onUpvoteThread={handleUpvoteThread}
          />
        )}

        {activeSection === 'perfil' && (
          <ProfileAndDataView
            currentAccount={currentAccount}
            isGuestSession={isGuestSession}
            registeredUsernames={Object.keys(accounts)}
            onRegisterOrLogin={handleRegisterOrLogin}
            onUpdateProfile={handleUpdateProfile}
            onUpdateReminders={handleUpdateReminders}
            onTriggerTestPushNotification={() =>
              triggerNotification(
                'Práctica Diaria · LexAna Forense',
                'Recordatorio activo: revisa hoy 1 protocolo de Cadena de Custodia o resuelve un caso clínico.'
              )
            }
            onResetProgressToZero={handleResetProgressToZero}
            onExportJson={handleExportJson}
            onImportJson={handleImportJson}
          />
        )}
      </main>

      {/* Clean Minimal Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-16">
        <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-teal-700 dark:text-teal-400" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              LexAna Forense · Enfermería Forense Autodidacta
            </span>
            <span aria-hidden="true">·</span>
            <span>Código abierto preparado para GitHub y Vercel</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setActiveSection('ruta')}
              className="hover:text-slate-900 dark:hover:text-white"
            >
              Temario Completo
            </button>
            <button
              type="button"
              onClick={() => setActiveSection('glosario')}
              className="hover:text-slate-900 dark:hover:text-white"
            >
              Glosario Forense
            </button>
            <button
              type="button"
              onClick={() => setActiveSection('laboratorio')}
              className="hover:text-slate-900 dark:hover:text-white"
            >
              18 Casos Clínicos
            </button>
            <button
              type="button"
              onClick={handleExportJson}
              className="hover:text-slate-900 dark:hover:text-white"
            >
              Exportar Datos (.JSON)
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
