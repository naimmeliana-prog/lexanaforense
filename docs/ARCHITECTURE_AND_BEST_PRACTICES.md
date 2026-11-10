# Documentación Técnica de Arquitectura y Escalabilidad

## 1. Visión Arquitectónica

**LexMedica · Enfermería Forense Autodidacta** sigue una arquitectura **Local-First SPA (Single Page Application)** construida con **React 19**, **TypeScript 7** y **Tailwind CSS v4**, optimizada para despliegues estáticos y Edge en **Vercel** a partir de un repositorio de **GitHub**.

### Decisiones Clave de Diseño

1. **Sin Firebase ni Backend Intrusivo**:
   - Cumpliendo con el requisito de privacidad y simplicidad operativa, la autenticación local se basa exclusivamente en `usuario` y `contraseña` procesados mediante una función hash determinista con *salt* de dominio (`hashPasswordLocal`).
   - Los datos nunca abandonan el dispositivo del estudiante salvo cuando el propio usuario descarga su respaldo en formato `.json`.

2. **Sistema de Tema Dual (Claro / Oscuro Automático y Manual)**:
   - Implementado en `src/index.css` mediante `@custom-variant dark (&:where(.dark, .dark *));`.
   - `App.tsx` escucha en tiempo real `window.matchMedia('(prefers-color-scheme: dark)')` cuando el perfil está en modo `system`, o aplica la clase `.dark` en `document.documentElement` según la preferencia del usuario.

3. **Motor de Pruebas Unitarias Nativo**:
   - Utiliza el ejecutor `node:test` junto con `tsx` (`node --import tsx --test src/__tests__/forensicPlatform.test.ts`), eliminando sobrecarga de configuración y garantizando ejecuciones en menos de 1 segundo dentro de GitHub Actions.

---

## 2. Contrato del Esquema JSON de Portabilidad (`ExportedPlatformData`)

El archivo exportado por los usuarios cumple el siguiente contrato tipado:

```json
{
  "schemaVersion": "1.0.0",
  "exportedAt": "2026-11-09T17:00:00.000Z",
  "platform": "LexMedica Enfermería Forense",
  "userAccount": {
    "username": "enfermera_clara",
    "createdAt": "2026-11-09T16:55:00.000Z",
    "profile": {
      "displayName": "Clara · Enfermera Urgencias",
      "nursingSpecialty": "Urgencias y Emergencias",
      "regionalFocus": "Comparativa Global",
      "dailyGoalMinutes": 30,
      "avatarColor": "teal",
      "themePreference": "system",
      "showOriginalLanguageExcerpts": true
    },
    "progress": {
      "completedSubTopicIds": ["st-101-1", "st-101-2"],
      "completedModuleIds": [],
      "moduleNotes": {},
      "exerciseAttempts": {},
      "studyStreakDays": 1,
      "lastStudyDate": "2026-11-09"
    },
    "reminders": {
      "enabled": false,
      "dailyTime": "19:00",
      "daysOfWeek": [1, 2, 3, 4, 5],
      "lastNotifiedDate": null,
      "browserPermissionStatus": "default"
    }
  },
  "customForumThreads": []
}
```
