export enum LearningLevelId {
  LEVEL_1 = 'nivel-1-fundamentos',
  LEVEL_2 = 'nivel-2-criminalistica',
  LEVEL_3 = 'nivel-3-sane-violencia',
  LEVEL_4 = 'nivel-4-patologia-peritaje',
}

export enum RegionSource {
  SPAIN = 'España (IMLCF / LECrim / Sanidad)',
  LATAM = 'Hispanoamérica (Red Iberoamericana / Estambul)',
  USA_IAFN = 'Norteamérica (IAFN / SANE Traducido)',
  GLOBAL = 'Internacional (OMS / Interpol DVI)',
}

export enum ThemePreference {
  SYSTEM = 'system',
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ClinicalTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface ProtocolStep {
  step: string;
  detail: string;
}

export interface DocumentSection {
  sectionTitle: string;
  body: string;
}

export interface TranslatedExcerpt {
  id: string;
  originalTitle: string;
  originalLanguage: 'Inglés (EE.UU. - IAFN/NIJ)' | 'Portugués (Brasil - COFEN)';
  sourceInstitution: string;
  originalText: string;
  translatedText: string;
  clinicalAdaptationSpain: string;
  extendedCommentary?: string;
}

export interface ModuleResource {
  id: string;
  title: string;
  type: 'Protocolo Oficial' | 'Guía Traducida' | 'Manual Clínico' | 'Jurisprudencia';
  origin: RegionSource;
  estimatedMinutes: number;
  summary: string;
  keyTakeaways: string[];
  fullDocumentSections: DocumentSection[];
}

export interface SubTopicItem {
  id: string;
  title: string;
  clinicalProtocolSummary: string;
  legalFrameworkNote: string;
  theoreticalContent: string[];
  stepByStepProtocol: ProtocolStep[];
  clinicalTables?: ClinicalTable[];
  practicalChecklist: string[];
}

export interface CurriculumModule {
  id: string;
  code: string;
  levelId: LearningLevelId;
  levelNumber: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  estimatedHours: number;
  originSources: RegionSource[];
  clinicalCompetencies: string[];
  subTopics: SubTopicItem[];
  resources: ModuleResource[];
  translatedExcerpts: TranslatedExcerpt[];
}

export interface InteractiveExercise {
  id: string;
  code: string;
  levelId: LearningLevelId;
  origin: RegionSource;
  category:
    | 'Cadena de Custodia'
    | 'Valoración SANE'
    | 'Tanatología'
    | 'Marco Legal'
    | 'Toxicología y Sumisión'
    | 'Traumatología Forense'
    | 'Peritaje Enfermero';
  difficulty: 'Base' | 'Intermedio' | 'Avanzado';
  clinicalVignette: string;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  clinicalRationale: string;
  legalReference: string;
}

export interface ForumReply {
  id: string;
  authorUsername: string;
  authorSpecialty: string;
  authorRegion: string;
  createdAt: string;
  content: string;
  upvotes: number;
}

export interface ForumThread {
  id: string;
  title: string;
  category:
    | 'Casos Clínicos'
    | 'Marco Legal España'
    | 'Literatura Traducida IAFN'
    | 'Cadena de Custodia'
    | 'Peritaje y Salidas';
  levelId: LearningLevelId;
  authorUsername: string;
  authorSpecialty: string;
  authorRegion: string;
  createdAt: string;
  content: string;
  tags: string[];
  upvotes: number;
  replies: ForumReply[];
}

export interface ReminderSettings {
  enabled: boolean;
  dailyTime: string; // HH:MM format e.g. "19:30"
  daysOfWeek: number[]; // 0-6
  lastNotifiedDate: string | null;
  browserPermissionStatus: 'default' | 'granted' | 'denied' | 'unsupported';
}

export interface UserProfileCustomization {
  displayName: string;
  nursingSpecialty:
    | 'Urgencias y Emergencias'
    | 'Cuidados Intensivos (UCI)'
    | 'Atención Primaria'
    | 'Salud Mental'
    | 'Obstétrico-Ginecológica (Matrona)'
    | 'Pediatría'
    | 'Enfermería General';
  regionalFocus:
    | 'España (IMLCF / SNS)'
    | 'Hispanoamérica'
    | 'Estándar Internacional IAFN'
    | 'Comparativa Global';
  dailyGoalMinutes: number;
  avatarColor: 'teal' | 'sky' | 'indigo' | 'emerald' | 'amber' | 'rose';
  themePreference: ThemePreference;
  showOriginalLanguageExcerpts: boolean;
}

export interface ExerciseAttemptRecord {
  exerciseId: string;
  selectedOptionId: string;
  isCorrect: boolean;
  attemptedAt: string;
}

export interface UserProgressData {
  completedSubTopicIds: string[];
  completedModuleIds: string[];
  moduleNotes: Record<string, string>;
  exerciseAttempts: Record<string, ExerciseAttemptRecord>;
  studyStreakDays: number;
  lastStudyDate: string | null;
}

export interface LocalUserAccount {
  username: string;
  passwordHash: string;
  createdAt: string;
  profile: UserProfileCustomization;
  progress: UserProgressData;
  reminders: ReminderSettings;
}

export interface ExportedPlatformData {
  schemaVersion: '1.0.0';
  exportedAt: string;
  platform: 'LexAna Forense' | 'LexMedica Enfermería Forense';
  userAccount: Omit<LocalUserAccount, 'passwordHash'> & { passwordHash?: string };
  customForumThreads: ForumThread[];
}
