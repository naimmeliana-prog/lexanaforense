import {
  CurriculumModule,
  ExportedPlatformData,
  ForumThread,
  LearningLevelId,
  LocalUserAccount,
  ReminderSettings,
  ThemePreference,
  UserProfileCustomization,
  UserProgressData,
} from '../types/forensic';

/**
 * Deterministic lightweight hash function for local privacy-first username/password auth.
 * Avoids storing cleartext passwords while working synchronously in browser and Node tests.
 */
export function hashPasswordLocal(username: string, rawPassword: string): string {
  const normalizedUser = username.trim().toLowerCase();
  const salted = `lexmedica_forense_v1::${normalizedUser}::${rawPassword}`;
  let h1 = 0xdeadbeef ^ salted.length;
  let h2 = 0x41c6ce57 ^ salted.length;

  for (let i = 0; i < salted.length; i++) {
    const ch = salted.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  const hex1 = (h1 >>> 0).toString(16).padStart(8, '0');
  const hex2 = (h2 >>> 0).toString(16).padStart(8, '0');
  return `lmf_${hex1}${hex2}`;
}

export function validateCredentialsInput(
  username: string,
  password: string
): { valid: boolean; error?: string } {
  const cleanUser = username.trim();
  if (cleanUser.length < 3) {
    return {
      valid: false,
      error: 'El nombre de usuario debe tener al menos 3 caracteres.',
    };
  }
  if (!/^[a-zA-Z0-9_.-]+$/.test(cleanUser)) {
    return {
      valid: false,
      error: 'El usuario solo puede contener letras, números, guiones o puntos (sin espacios).',
    };
  }
  if (password.length < 4) {
    return {
      valid: false,
      error: 'La contraseña debe tener al menos 4 caracteres.',
    };
  }
  return { valid: true };
}

export function createDefaultProfile(username: string): UserProfileCustomization {
  return {
    displayName: username,
    nursingSpecialty: 'Urgencias y Emergencias',
    regionalFocus: 'Comparativa Global',
    dailyGoalMinutes: 30,
    avatarColor: 'teal',
    themePreference: ThemePreference.SYSTEM,
    showOriginalLanguageExcerpts: true,
  };
}

export function createDefaultProgress(): UserProgressData {
  return {
    completedSubTopicIds: [],
    completedModuleIds: [],
    moduleNotes: {},
    exerciseAttempts: {},
    studyStreakDays: 0,
    lastStudyDate: null,
  };
}

export function createDefaultReminders(): ReminderSettings {
  return {
    enabled: false,
    dailyTime: '19:00',
    daysOfWeek: [1, 2, 3, 4, 5],
    lastNotifiedDate: null,
    browserPermissionStatus: 'default',
  };
}

export function createNewUserAccount(username: string, rawPassword: string): LocalUserAccount {
  const cleanUsername = username.trim();
  return {
    username: cleanUsername,
    passwordHash: hashPasswordLocal(cleanUsername, rawPassword),
    createdAt: new Date().toISOString(),
    profile: createDefaultProfile(cleanUsername),
    progress: createDefaultProgress(),
    reminders: createDefaultReminders(),
  };
}

export interface CurriculumProgressSummary {
  totalSubTopics: number;
  completedSubTopics: number;
  overallPercentage: number;
  completedModulesCount: number;
  totalModulesCount: number;
  completedHours: number;
  totalHours: number;
  byLevel: Record<
    LearningLevelId,
    {
      totalSubTopics: number;
      completedSubTopics: number;
      percentage: number;
    }
  >;
}

export function calculateCurriculumProgress(
  modules: CurriculumModule[],
  progress: UserProgressData
): CurriculumProgressSummary {
  const completedSet = new Set(progress.completedSubTopicIds);
  let totalSubTopics = 0;
  let completedSubTopics = 0;
  let completedModulesCount = 0;
  let completedHours = 0;
  let totalHours = 0;

  const byLevel: CurriculumProgressSummary['byLevel'] = {
    [LearningLevelId.LEVEL_1]: { totalSubTopics: 0, completedSubTopics: 0, percentage: 0 },
    [LearningLevelId.LEVEL_2]: { totalSubTopics: 0, completedSubTopics: 0, percentage: 0 },
    [LearningLevelId.LEVEL_3]: { totalSubTopics: 0, completedSubTopics: 0, percentage: 0 },
    [LearningLevelId.LEVEL_4]: { totalSubTopics: 0, completedSubTopics: 0, percentage: 0 },
  };

  for (const mod of modules) {
    totalHours += mod.estimatedHours;
    const modTotal = mod.subTopics.length;
    let modDone = 0;

    for (const st of mod.subTopics) {
      totalSubTopics += 1;
      byLevel[mod.levelId].totalSubTopics += 1;
      if (completedSet.has(st.id)) {
        completedSubTopics += 1;
        modDone += 1;
        byLevel[mod.levelId].completedSubTopics += 1;
      }
    }

    if (modTotal > 0 && modDone === modTotal) {
      completedModulesCount += 1;
      completedHours += mod.estimatedHours;
    } else if (modTotal > 0 && modDone > 0) {
      completedHours += Math.round((modDone / modTotal) * mod.estimatedHours * 10) / 10;
    }
  }

  for (const levelKey of Object.keys(byLevel) as LearningLevelId[]) {
    const entry = byLevel[levelKey];
    entry.percentage =
      entry.totalSubTopics > 0
        ? Math.round((entry.completedSubTopics / entry.totalSubTopics) * 100)
        : 0;
  }

  const overallPercentage =
    totalSubTopics > 0 ? Math.round((completedSubTopics / totalSubTopics) * 100) : 0;

  return {
    totalSubTopics,
    completedSubTopics,
    overallPercentage,
    completedModulesCount,
    totalModulesCount: modules.length,
    completedHours: Math.round(completedHours * 10) / 10,
    totalHours,
    byLevel,
  };
}

export function toggleSubTopicCompletion(
  progress: UserProgressData,
  subTopicId: string,
  modules: CurriculumModule[]
): UserProgressData {
  const exists = progress.completedSubTopicIds.includes(subTopicId);
  const nextSubTopicIds = exists
    ? progress.completedSubTopicIds.filter((id) => id !== subTopicId)
    : [...progress.completedSubTopicIds, subTopicId];

  const completedSet = new Set(nextSubTopicIds);
  const nextCompletedModuleIds = modules
    .filter((m) => m.subTopics.length > 0 && m.subTopics.every((st) => completedSet.has(st.id)))
    .map((m) => m.id);

  const today = new Date().toISOString().split('T')[0];
  let nextStreak = progress.studyStreakDays;
  if (progress.lastStudyDate !== today) {
    nextStreak = Math.max(1, progress.studyStreakDays + 1);
  }

  return {
    ...progress,
    completedSubTopicIds: nextSubTopicIds,
    completedModuleIds: nextCompletedModuleIds,
    studyStreakDays: nextStreak,
    lastStudyDate: today,
  };
}

export function buildExportPayload(
  account: LocalUserAccount,
  forumThreads: ForumThread[]
): ExportedPlatformData {
  return {
    schemaVersion: '1.0.0',
    exportedAt: new Date().toISOString(),
    platform: 'LexAna Forense',
    userAccount: {
      username: account.username,
      createdAt: account.createdAt,
      profile: account.profile,
      progress: account.progress,
      reminders: account.reminders,
    },
    customForumThreads: forumThreads,
  };
}

export function validateAndParseImportJson(
  rawJson: string
): { valid: boolean; data?: ExportedPlatformData; error?: string } {
  try {
    const parsed = JSON.parse(rawJson);
    if (!parsed || typeof parsed !== 'object') {
      return { valid: false, error: 'El archivo JSON no contiene un objeto válido.' };
    }
    if (
      parsed.platform !== 'LexAna Forense' &&
      parsed.platform !== 'LexMedica Enfermería Forense'
    ) {
      return {
        valid: false,
        error: 'El archivo no corresponde a una exportación válida de LexAna Forense.',
      };
    }
    if (!parsed.userAccount || typeof parsed.userAccount.username !== 'string') {
      return { valid: false, error: 'Faltan datos de perfil de usuario en el archivo JSON.' };
    }
    if (
      !parsed.userAccount.progress ||
      !Array.isArray(parsed.userAccount.progress.completedSubTopicIds)
    ) {
      return { valid: false, error: 'La estructura de progreso de estudio es inválida.' };
    }
    return { valid: true, data: parsed as ExportedPlatformData };
  } catch {
    return {
      valid: false,
      error: 'Error de sintaxis JSON: asegúrate de seleccionar un archivo .json íntegro.',
    };
  }
}

/**
 * Pure helper for Henssge / Post-Mortem Interval (PMI) clinical estimation used in interactive sandbox.
 * Returns estimated hours since death based on rectal temperature, ambient temperature, and body weight.
 */
export function estimatePostMortemIntervalHours(params: {
  rectalTempCelsius: number;
  ambientTempCelsius: number;
  bodyWeightKg: number;
  clothingFactor: number; // 1.0 naked, 1.2 light clothing, 1.4 heavy clothing
}): {
  estimatedHoursMin: number;
  estimatedHoursMax: number;
  estimatedHoursMean: number;
  thanatologicalPhase: string;
} {
  const normalTemp = 37.2;
  const tempDrop = Math.max(0, normalTemp - params.rectalTempCelsius);
  const ambientGradient = Math.max(0.1, params.rectalTempCelsius - params.ambientTempCelsius);

  // Corrective factor for body mass and clothing insulation (adapted clinical Henssge approximation)
  const weightFactor = Math.max(0.7, Math.min(1.6, params.bodyWeightKg / 70));
  const coolingRatePerHour = Math.max(
    0.25,
    (0.85 / (weightFactor * params.clothingFactor)) * Math.min(1.5, ambientGradient / 12 + 0.45)
  );

  const rawHours = tempDrop / coolingRatePerHour;
  const estimatedHoursMean = Math.round(Math.max(0.5, Math.min(72, rawHours)) * 10) / 10;
  const uncertainty = estimatedHoursMean < 12 ? 1.5 : 2.8;
  const estimatedHoursMin = Math.max(0, Math.round((estimatedHoursMean - uncertainty) * 10) / 10);
  const estimatedHoursMax = Math.round((estimatedHoursMean + uncertainty) * 10) / 10;

  let thanatologicalPhase = 'Enfriamiento inicial y livideces móviles (0–4 h)';
  if (estimatedHoursMean >= 4 && estimatedHoursMean < 12) {
    thanatologicalPhase = 'Instauración de rigidez cadavérica y livideces en fijación (4–12 h)';
  } else if (estimatedHoursMean >= 12 && estimatedHoursMean < 24) {
    thanatologicalPhase = 'Rigidez máxima e inmovilidad de livideces (12–24 h)';
  } else if (estimatedHoursMean >= 24) {
    thanatologicalPhase = 'Fase de resolución de rigidez e inicio de fenómenos transformativos (>24 h)';
  }

  return {
    estimatedHoursMin,
    estimatedHoursMax,
    estimatedHoursMean,
    thanatologicalPhase,
  };
}
