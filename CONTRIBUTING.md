# Guía de Contribución y Mejores Prácticas · LexMedica Enfermería Forense

¡Gracias por contribuir a democratizar la formación en **Enfermería Forense** en España y América Latina! Esta guía detalla cómo colaborar añadiendo contenidos clínicos, traducciones de estándares internacionales o mejoras técnicas manteniendo la estabilidad y calidad del proyecto.

---

## 1. Cómo Contribuir Contenido Clínico y Forense

Puedes ampliar el repositorio educativo editando los archivos de datos tipados en `src/data/`:

1. **Nuevos Módulos o Unidades (`src/data/curriculumData.ts`)**:
   - Especifica siempre la jurisdicción de referencia (`RegionSource.SPAIN`, `RegionSource.LATAM`, `RegionSource.USA_IAFN`, `RegionSource.GLOBAL`).
   - Incluye la referencia normativa exacta (por ejemplo: artículo de la LECrim, Orden JUS/1291/2010, NOM-046 en México, Resolución COFEN 556/2017 en Brasil o guía SANE de la IAFN).
2. **Traducciones de Literatura Internacional**:
   - Conserva el fragmento original en `originalText` y proporciona en `translatedText` una traducción técnica precisa, añadiendo en `clinicalAdaptationSpain` cómo se aplica ese estándar en los hospitales públicos y los Institutos de Medicina Legal (IMLCF).
3. **Casos Clínicos Interactivos (`src/data/exercisesData.ts`)**:
   - Todo caso debe incluir una viñeta realista (`clinicalVignette`), 4 opciones plausibles, la opción correcta (`correctOptionId`) y una justificación detallada (`clinicalRationale` + `legalReference`).
   - **Privacidad de pacientes**: Nunca incluyas datos reales o identificables de pacientes ni de procedimientos judiciales en curso.

---

## 2. Flujo de Trabajo en GitHub (Pull Requests)

1. Haz un **Fork** del repositorio y crea una rama descriptiva:
   ```bash
   git checkout -b feat/modulo-asfixiologia-forense
   ```
2. Realiza tus cambios manteniendo el tipado estricto en TypeScript.
3. Ejecuta las comprobaciones de calidad antes de hacer commit:
   ```bash
   npm run lint
   npm test
   npm run build
   ```
4. Utiliza mensajes de commit semánticos (*Conventional Commits*):
   - `feat(curriculum): añadir módulo de entomología forense clínica`
   - `fix(lab): ajustar cálculo de intervalo post-mortem en hipotermia`
   - `docs(readme): actualizar guía de despliegue en Vercel`
   - `test(storage): añadir prueba unitaria para importación JSON`
5. Abre un **Pull Request** hacia la rama `main`. El flujo de **GitHub Actions** (`.github/workflows/ci-cd.yml`) ejecutará automáticamente el linter, las pruebas unitarias y la compilación de producción.

---

## 3. Mejores Prácticas de Código y Arquitectura

- **Separación de Responsabilidades**:
  - La lógica de negocio pura (hashes de usuario, cálculo de progreso, estimaciones clínicas y validación de esquemas JSON) reside en `src/services/storageService.ts` sin dependencias del DOM para permitir pruebas unitarias rápidas y deterministas.
  - Los componentes de interfaz en `src/components/` son funcionales, declarativos y reciben datos tipados mediante props claras.
- **Accesibilidad (WCAG AA) y Modo Oscuro**:
  - Todo elemento interactivo debe ser accesible por teclado y contar con etiquetas `aria-label` o `<label htmlFor="...">`.
  - Cada superficie, borde y texto debe contar con su par de color para modo claro y modo oscuro (`bg-white dark:bg-slate-900`, `text-slate-900 dark:text-slate-100`).
- **Cero Dependencias de Nube Propietaria**:
  - No introduzcas SDKs de rastreo, telemetría externa ni bases de datos que exijan correo electrónico a las estudiantes. Toda nueva funcionalidad de estado debe integrarse en el esquema de exportación/importación `.json` (`ExportedPlatformData`).
