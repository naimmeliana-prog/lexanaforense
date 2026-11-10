import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildExportPayload,
  calculateCurriculumProgress,
  createNewUserAccount,
  estimatePostMortemIntervalHours,
  hashPasswordLocal,
  toggleSubTopicCompletion,
  validateAndParseImportJson,
  validateCredentialsInput,
} from '../services/storageService';
import { CURRICULUM_MODULES } from '../data/curriculumData';
import { INTERACTIVE_EXERCISES } from '../data/exercisesData';
import { INITIAL_FORUM_THREADS } from '../data/forumSeedData';
import { FORENSIC_GLOSSARY } from '../data/glossaryData';
import { LIBRARY_TECHNICAL_DOCUMENTS } from '../data/libraryData';
import { WEEKLY_FORENSIC_UPDATES } from '../data/weeklyUpdatesData';
import { LearningLevelId } from '../types/forensic';

describe('LexAna Forense — Pruebas Unitarias de Estabilidad', () => {
  it('inicia sin usuarios inventados en el foro y con todos los contadores de progreso a cero', () => {
    assert.equal(
      INITIAL_FORUM_THREADS.length,
      0,
      'El foro debe iniciar vacío sin usuarios ni hilos inventados'
    );

    const account = createNewUserAccount('mi_usuario', 'clave1234');
    assert.equal(account.progress.completedSubTopicIds.length, 0);
    assert.equal(account.progress.completedModuleIds.length, 0);
    assert.equal(Object.keys(account.progress.exerciseAttempts).length, 0);
    assert.equal(account.progress.studyStreakDays, 0);
    assert.equal(account.progress.lastStudyDate, null);

    const initialSummary = calculateCurriculumProgress(
      CURRICULUM_MODULES,
      account.progress
    );
    assert.equal(initialSummary.completedSubTopics, 0);
    assert.equal(initialSummary.overallPercentage, 0);
    assert.equal(initialSummary.completedHours, 0);
  });

  it('valida credenciales de usuario y contraseña sin requerir correo electrónico', () => {
    const valid = validateCredentialsInput('enfermera_1', 'claveSegura123');
    assert.equal(valid.valid, true);

    const shortUser = validateCredentialsInput('ab', '1234');
    assert.equal(shortUser.valid, false);

    const invalidChars = validateCredentialsInput('usuario con espacios', '1234');
    assert.equal(invalidChars.valid, false);

    const shortPass = validateCredentialsInput('enfermera_1', '123');
    assert.equal(shortPass.valid, false);
  });

  it('genera hashes deterministas de contraseña local sin almacenar texto plano', () => {
    const h1 = hashPasswordLocal('Usuario_Prueba', 'miSecreto2026');
    const h2 = hashPasswordLocal('usuario_prueba', 'miSecreto2026');
    const hDiff = hashPasswordLocal('usuario_prueba', 'otraClave');

    assert.equal(h1, h2, 'El nombre de usuario debe normalizarse en minúsculas');
    assert.notEqual(h1, hDiff, 'Contraseñas distintas deben producir hashes distintos');
    assert.ok(h1.startsWith('lmf_'));
  });

  it('calcula correctamente el progreso curricular por niveles y actualiza unidades completadas', () => {
    const account = createNewUserAccount('test_nurse', 'pass1234');
    const firstSubTopicId = CURRICULUM_MODULES[0].subTopics[0].id;

    const updatedProgress = toggleSubTopicCompletion(
      account.progress,
      firstSubTopicId,
      CURRICULUM_MODULES
    );

    const nextSummary = calculateCurriculumProgress(
      CURRICULUM_MODULES,
      updatedProgress
    );
    assert.equal(nextSummary.completedSubTopics, 1);
    assert.equal(
      nextSummary.byLevel[LearningLevelId.LEVEL_1].completedSubTopics,
      1
    );
    assert.equal(updatedProgress.studyStreakDays, 1);

    // Toggling again unchecks the subtopic
    const revertedProgress = toggleSubTopicCompletion(
      updatedProgress,
      firstSubTopicId,
      CURRICULUM_MODULES
    );
    assert.equal(revertedProgress.completedSubTopicIds.length, 0);
  });

  it('exporta e importa correctamente los datos locales en formato JSON con identificador LexAna Forense', () => {
    const account = createNewUserAccount('usuario_json', 'forense99');
    account.progress.completedSubTopicIds = ['st-101-1', 'st-201-1'];

    const payload = buildExportPayload(account, INITIAL_FORUM_THREADS);
    assert.equal(payload.platform, 'LexAna Forense');
    const serialized = JSON.stringify(payload);

    const parsedResult = validateAndParseImportJson(serialized);
    assert.equal(parsedResult.valid, true);
    assert.equal(parsedResult.data?.userAccount.username, 'usuario_json');
    assert.deepEqual(parsedResult.data?.userAccount.progress.completedSubTopicIds, [
      'st-101-1',
      'st-201-1',
    ]);

    const invalidResult = validateAndParseImportJson('{"platform": "OtraApp"}');
    assert.equal(invalidResult.valid, false);
  });

  it('estima el intervalo post-mortem (IPM) mediante el modelo de enfriamiento de Henssge', () => {
    const recent = estimatePostMortemIntervalHours({
      rectalTempCelsius: 35.5,
      ambientTempCelsius: 20,
      bodyWeightKg: 70,
      clothingFactor: 1.0,
    });
    const advanced = estimatePostMortemIntervalHours({
      rectalTempCelsius: 25.0,
      ambientTempCelsius: 18,
      bodyWeightKg: 70,
      clothingFactor: 1.2,
    });

    assert.ok(recent.estimatedHoursMean < advanced.estimatedHoursMean);
    assert.ok(advanced.estimatedHoursMin < advanced.estimatedHoursMax);
  });

  it('verifica que existen los 8 módulos completos, 18 casos prácticos, Biblioteca IAFN (libraryData.ts) y Glosario Forense', () => {
    assert.equal(CURRICULUM_MODULES.length, 8);
    assert.equal(INTERACTIVE_EXERCISES.length, 18);
    assert.ok(LIBRARY_TECHNICAL_DOCUMENTS.length >= 5);
    assert.ok(FORENSIC_GLOSSARY.length >= 20);
    assert.ok(WEEKLY_FORENSIC_UPDATES.length >= 2);

    for (const doc of LIBRARY_TECHNICAL_DOCUMENTS) {
      assert.ok(
        doc.structuredSummaries.length >= 2,
        `El documento ${doc.code} debe incluir resúmenes técnicos estructurados`
      );
      assert.ok(
        doc.fullStudyChapters.length >= 1,
        `El documento ${doc.code} debe incluir capítulos de estudio profundo`
      );
    }

    const requiredTerms = ['Cadena de custodia', 'Tanatología', 'Victimología'];
    for (const reqTerm of requiredTerms) {
      const found = FORENSIC_GLOSSARY.some((g) => g.term === reqTerm);
      assert.equal(found, true, `El glosario debe incluir el término "${reqTerm}"`);
    }

    for (const ex of INTERACTIVE_EXERCISES) {
      const hasCorrectOption = ex.options.some(
        (o) => o.id === ex.correctOptionId
      );
      assert.equal(
        hasCorrectOption,
        true,
        `El ejercicio ${ex.code} debe tener una opción correcta válida`
      );
    }
  });
});
