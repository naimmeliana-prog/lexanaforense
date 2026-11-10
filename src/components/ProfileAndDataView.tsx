import React, { useRef, useState } from 'react';
import {
  Bell,
  Download,
  Lock,
  Monitor,
  Moon,
  RotateCcw,
  Sun,
  Upload,
  UserCheck,
} from 'lucide-react';
import {
  LocalUserAccount,
  ReminderSettings,
  ThemePreference,
  UserProfileCustomization,
} from '../types/forensic';

interface ProfileAndDataViewProps {
  currentAccount: LocalUserAccount;
  isGuestSession: boolean;
  registeredUsernames: string[];
  onRegisterOrLogin: (
    mode: 'login' | 'register',
    username: string,
    password: string
  ) => { success: boolean; message: string };
  onUpdateProfile: (profile: UserProfileCustomization) => void;
  onUpdateReminders: (reminders: ReminderSettings) => void;
  onTriggerTestPushNotification: () => void;
  onResetProgressToZero: () => void;
  onExportJson: () => void;
  onImportJson: (rawJson: string) => { success: boolean; message: string };
}

export const ProfileAndDataView: React.FC<ProfileAndDataViewProps> = ({
  currentAccount,
  isGuestSession,
  registeredUsernames,
  onRegisterOrLogin,
  onUpdateProfile,
  onUpdateReminders,
  onTriggerTestPushNotification,
  onResetProgressToZero,
  onExportJson,
  onImportJson,
}) => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authFeedback, setAuthFeedback] = useState<{
    type: 'ok' | 'err';
    text: string;
  } | null>(null);

  const [importFeedback, setImportFeedback] = useState<{
    type: 'ok' | 'err';
    text: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = onRegisterOrLogin(authMode, usernameInput, passwordInput);
    setAuthFeedback({
      type: res.success ? 'ok' : 'err',
      text: res.message,
    });
    if (res.success) {
      setUsernameInput('');
      setPasswordInput('');
    }
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const content = typeof reader.result === 'string' ? reader.result : '';
      const result = onImportJson(content);
      setImportFeedback({
        type: result.success ? 'ok' : 'err',
        text: result.message,
      });
    };
    reader.readAsText(file);
  };

  const toggleDayOfWeek = (dayIndex: number) => {
    const exists = currentAccount.reminders.daysOfWeek.includes(dayIndex);
    const nextDays = exists
      ? currentAccount.reminders.daysOfWeek.filter((d) => d !== dayIndex)
      : [...currentAccount.reminders.daysOfWeek, dayIndex].sort();
    onUpdateReminders({
      ...currentAccount.reminders,
      daysOfWeek: nextDays,
    });
  };

  const dayLabels = [
    { idx: 1, label: 'Lun' },
    { idx: 2, label: 'Mar' },
    { idx: 3, label: 'Mié' },
    { idx: 4, label: 'Jue' },
    { idx: 5, label: 'Vie' },
    { idx: 6, label: 'Sáb' },
    { idx: 0, label: 'Dom' },
  ];

  return (
    <div className="space-y-8">
      <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
        <p className="text-xs font-medium text-teal-700 dark:text-teal-400">
          Privacidad Total · Sin Correo Electrónico · Sin Usuarios Predefinidos
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">
          Registro Local, Personalización, Recordatorios Push y Datos JSON
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Column 1: Zero-PII Username + Password Registration & Profile Customization */}
        <div className="lg:col-span-6 space-y-6">
          {/* Privacy-First Auth Card */}
          <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Registro e Inicio de Sesión (Solo Usuario y Contraseña)
                </h3>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Estado:{' '}
                <strong className="text-teal-700 dark:text-teal-400">
                  {isGuestSession
                    ? 'Sesión sin registrar'
                    : `@${currentAccount.username}`}
                </strong>
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Crea tu cuenta personal introduciendo únicamente un <strong>usuario</strong> y una <strong>contraseña</strong>. No se solicita correo electrónico ni ningún dato personal, y el progreso comienza en <strong>0%</strong>.
            </p>

            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('register');
                  setAuthFeedback(null);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  authMode === 'register'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Registrar mi usuario
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setAuthFeedback(null);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  authMode === 'login'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                Iniciar sesión
              </button>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="auth-username"
                    className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Tu nombre de usuario
                  </label>
                  <input
                    id="auth-username"
                    type="text"
                    required
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="Introduce tu usuario"
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="auth-password"
                    className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Contraseña local
                  </label>
                  <input
                    id="auth-password"
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Mínimo 4 caracteres"
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              {authFeedback && (
                <div
                  className={`p-3 rounded-lg text-xs font-medium ${
                    authFeedback.type === 'ok'
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                      : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                  }`}
                >
                  {authFeedback.text}
                </div>
              )}

              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {registeredUsernames.length === 0
                    ? 'No hay usuarios registrados todavía en este navegador.'
                    : `Usuarios creados por ti: ${registeredUsernames.join(', ')}`}
                </span>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg whitespace-nowrap"
                >
                  {authMode === 'register' ? 'Registrar y Activar' : 'Entrar'}
                </button>
              </div>
            </form>
          </section>

          {/* Profile & Dark Mode Customization */}
          <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-5">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-teal-700 dark:text-teal-400" />
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Personalización del Perfil Enfermero y Apariencia
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label
                  htmlFor="profile-display-name"
                  className="block text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  Alias o Nombre Profesional
                </label>
                <input
                  id="profile-display-name"
                  type="text"
                  value={currentAccount.profile.displayName}
                  onChange={(e) =>
                    onUpdateProfile({
                      ...currentAccount.profile,
                      displayName: e.target.value,
                    })
                  }
                  placeholder="Tu nombre o alias"
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="profile-specialty"
                  className="block text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  Unidad / Ámbito Asistencial
                </label>
                <select
                  id="profile-specialty"
                  value={currentAccount.profile.nursingSpecialty}
                  onChange={(e) =>
                    onUpdateProfile({
                      ...currentAccount.profile,
                      nursingSpecialty: e.target
                        .value as UserProfileCustomization['nursingSpecialty'],
                    })
                  }
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                >
                  <option value="Urgencias y Emergencias">Urgencias y Emergencias</option>
                  <option value="Cuidados Intensivos (UCI)">Cuidados Intensivos (UCI)</option>
                  <option value="Atención Primaria">Atención Primaria</option>
                  <option value="Obstétrico-Ginecológica (Matrona)">
                    Obstétrico-Ginecológica (Matrona)
                  </option>
                  <option value="Pediatría">Pediatría</option>
                  <option value="Salud Mental">Salud Mental</option>
                  <option value="Enfermería General">Enfermería General</option>
                </select>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="profile-region"
                  className="block text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  Enfoque Normativo Prioritario
                </label>
                <select
                  id="profile-region"
                  value={currentAccount.profile.regionalFocus}
                  onChange={(e) =>
                    onUpdateProfile({
                      ...currentAccount.profile,
                      regionalFocus: e.target
                        .value as UserProfileCustomization['regionalFocus'],
                    })
                  }
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                >
                  <option value="Comparativa Global">
                    Comparativa Global (España + LatAm + EE.UU.)
                  </option>
                  <option value="España (IMLCF / SNS)">España (IMLCF / LECrim / SNS)</option>
                  <option value="Hispanoamérica">Hispanoamérica (Red Iberoamericana)</option>
                  <option value="Estándar Internacional IAFN">
                    Estándar Internacional IAFN / SANE
                  </option>
                </select>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="profile-goal"
                  className="block text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  Meta de estudio diario (minutos)
                </label>
                <input
                  id="profile-goal"
                  type="number"
                  min={10}
                  max={180}
                  step={5}
                  value={currentAccount.profile.dailyGoalMinutes}
                  onChange={(e) =>
                    onUpdateProfile({
                      ...currentAccount.profile,
                      dailyGoalMinutes: parseInt(e.target.value, 10) || 30,
                    })
                  }
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 tabular-nums"
                />
              </div>
            </div>

            {/* Theme Mode Selector (Auto / Light / Dark) */}
            <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                Modo de Apariencia (Soporte de Modo Oscuro Automático y Manual):
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  {
                    id: ThemePreference.SYSTEM,
                    label: 'Automático',
                    icon: Monitor,
                  },
                  { id: ThemePreference.LIGHT, label: 'Modo Claro', icon: Sun },
                  { id: ThemePreference.DARK, label: 'Modo Oscuro', icon: Moon },
                ].map((themeItem) => {
                  const Icon = themeItem.icon;
                  const active =
                    currentAccount.profile.themePreference === themeItem.id;
                  return (
                    <button
                      key={themeItem.id}
                      type="button"
                      onClick={() =>
                        onUpdateProfile({
                          ...currentAccount.profile,
                          themePreference: themeItem.id,
                        })
                      }
                      className={`py-2.5 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                        active
                          ? 'bg-teal-700 text-white border-teal-700'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{themeItem.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* Column 2: Push Notification Reminders & JSON Export/Import */}
        <div className="lg:col-span-6 space-y-6">
          {/* Push Notifications Card */}
          <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Notificaciones Push y Recordatorios Diarios
                </h3>
              </div>
              <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={currentAccount.reminders.enabled}
                  onChange={(e) =>
                    onUpdateReminders({
                      ...currentAccount.reminders,
                      enabled: e.target.checked,
                    })
                  }
                  className="accent-teal-700 w-4 h-4 rounded"
                />
                <span>{currentAccount.reminders.enabled ? 'Activos' : 'Pausados'}</span>
              </label>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Configura avisos diarios mediante la API Web Push / Notifications del navegador para mantener el hábito autodidacta de práctica de casos forenses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
              <div>
                <label
                  htmlFor="reminder-time"
                  className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Hora del recordatorio diario
                </label>
                <input
                  id="reminder-time"
                  type="time"
                  value={currentAccount.reminders.dailyTime}
                  onChange={(e) =>
                    onUpdateReminders({
                      ...currentAccount.reminders,
                      dailyTime: e.target.value,
                    })
                  }
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 tabular-nums"
                />
              </div>

              <button
                type="button"
                onClick={onTriggerTestPushNotification}
                className="py-2.5 px-4 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-colors whitespace-nowrap"
              >
                Probar Notificación Push Ahora
              </button>
            </div>

            <div className="space-y-1.5">
              <span className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                Días de estudio programados:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {dayLabels.map((d) => {
                  const selected = currentAccount.reminders.daysOfWeek.includes(
                    d.idx
                  );
                  return (
                    <button
                      key={d.idx}
                      type="button"
                      onClick={() => toggleDayOfWeek(d.idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                        selected
                          ? 'bg-teal-700 text-white border-teal-700'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {d.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Local JSON Data Export, Import & Zero Reset */}
          <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-teal-700 dark:text-teal-400" />
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Exportación JSON y Reinicio de Progreso a Cero
              </h3>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Guarda todo tu expediente autodidacta (unidades completadas, apuntes de módulos, historial de los 18 casos clínicos y publicaciones del foro) en un archivo <code>.json</code> o pon todos los contadores a cero.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onExportJson}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Exportar Progreso (.JSON)</span>
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="application/json,.json"
                onChange={handleFileImport}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Upload className="w-4 h-4" />
                <span>Importar Respaldo (.JSON)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onResetProgressToZero();
                  setImportFeedback({
                    type: 'ok',
                    text: 'Todos los contadores de progreso, casos y racha se han puesto a 0.',
                  });
                }}
                className="px-4 py-2.5 text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-950/70 border border-rose-200 dark:border-rose-800 rounded-lg flex items-center gap-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Poner Progreso a Cero (0%)</span>
              </button>
            </div>

            {importFeedback && (
              <div
                className={`p-3 rounded-lg text-xs font-medium ${
                  importFeedback.type === 'ok'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                }`}
              >
                {importFeedback.text}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
