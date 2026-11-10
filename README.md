# LexAna Forense · Plataforma Autodidacta de Enfermería Forense

Plataforma web abierta, progresiva, gratuita y autodidacta diseñada para profesionales y estudiantes de enfermería en **España** y **América Latina** que desean especializarse en **Enfermería Forense y Ciencias Forenses Clínicas** sin pagar por títulos propios no reconocidos oficialmente por el Ministerio de Sanidad o Educación.

El proyecto prescinde completamente de servicios propietarios como Firebase y está diseñado para alojarse en **GitHub** y desplegarse directamente en **Vercel**, garantizando privacidad absoluta (registro local solo con usuario y contraseña sin correo electrónico) y portabilidad completa de datos en formato `.json`.

---

## Características Principales

1. **Ruta de Aprendizaje por 4 Niveles Progresivos (Sin Certificados Comerciales)**
   - **Nivel 1 · Fundamentos Médico-Legales y Marco Normativo**: Ley de Enjuiciamiento Criminal (Arts. 259, 262, 340 LECrim), Código Penal, redacción del parte judicial de lesiones, secreto profesional frente al deber de denuncia y tanatología clínica.
   - **Nivel 2 · Criminalística Clínica y Cadena de Custodia**: Orden JUS/1291/2010 del Instituto Nacional de Toxicología y Ciencias Forenses (INTCF), secado y embalaje en papel transpirable, fotografía forense con testigo métrico ABFO y protocolo de urgencia ante **Sumisión Química (DFSA)**.
   - **Nivel 3 · Especialización SANE, Violencia Sexual y Maltrato**: Currículo norteamericano *Sexual Assault Nurse Examiner* (SANE-A y SANE-P de la IAFN) traducido al español y armonizado con los protocolos de los Institutos de Medicina Legal (IMLCF) y la LOPIVI.
   - **Nivel 4 · Patología Forense Avanzada, Catástrofes y Peritaje Enfermero**: Balística de heridas (anillo de Fisch, tatuaje verdadero), protocolo Interpol DVI (RD 32/2009) e informes periciales enfermeros conforme a la Norma UNE 197001 y Art. 335 de la LEC.
2. **Laboratorio Clínico-Forense Interactivo**
   - **Banco de Casos Clínicos**: Ejercicios interactivos con viñeta asistencial, retroalimentación clínica inmediata y fundamentación legal.
   - **Simulador de Cronotanatodiagnóstico (Nomograma de Henssge)**: Cálculo interactivo del Intervalo Post-Mortem (IPM) con curva de disipación térmica en tiempo real.
   - **Auditor de Cadena de Custodia y Envases**: Verificación paso a paso del protocolo de muestras biológicas y toxicológicas.
3. **Biblioteca de Literatura Internacional Traducida**
   - Comparativa bilingüe (Inglés EE.UU. IAFN/NIJ y Portugués Brasil COFEN 556/2017) con su adaptación directa a la práctica clínica del Sistema Nacional de Salud en España e Hispanoamérica.
4. **Foro Colaborativo de Estudiantes y Profesionales**
   - Resolución de dudas por categorías, etiquetas, buscador y sistema de votos de utilidad.
5. **Privacidad Total, Notificaciones Push, Modo Oscuro y Exportación JSON**
   - **Registro sin datos personales**: Solo requiere `usuario` y `contraseña` local (con hash determinista `lmf_`), sin correo electrónico ni verificación externa.
   - **Modo Oscuro Automático y Manual**: Sincronizado con `prefers-color-scheme: dark` del sistema operativo o seleccionable manualmente.
   - **Recordatorios Diarios Push**: Integración con la API Web Notifications para avisos diarios de estudio.
   - **Portabilidad JSON**: Exportación y restauración íntegra del progreso, notas personales y foro en archivos `.json`.

---

## Estructura Modular del Proyecto

```text
├── .github/
│   └── workflows/
│       └── ci-cd.yml                  # Pipeline CI/CD (TypeScript + Tests + Build + Vercel)
├── docs/
│   └── ARCHITECTURE_AND_BEST_PRACTICES.md
├── public/
│   └── favicon.svg                    # Favicon vectorial sin fondo a sangre completa
├── src/
│   ├── __tests__/
│   │   └── forensicPlatform.test.ts   # Pruebas unitarias automatizadas (node:test)
│   ├── assets/
│   │   └── images/                    # Recursos visuales clínicos de alta resolución
│   ├── components/
│   │   ├── CurriculumView.tsx         # Explorador de niveles, módulos y cuaderno de notas
│   │   ├── ForumView.tsx              # Foro colaborativo entre enfermeras
│   │   ├── InteractiveLabView.tsx     # Casos clínicos, simulador Henssge y Cadena de Custodia
│   │   ├── Navbar.tsx                 # Navegación principal accesible
│   │   ├── ProfileAndDataView.tsx     # Autenticación sin email, modo oscuro, push y JSON
│   │   └── TranslatedLibraryView.tsx  # Repositorio traducido IAFN / COFEN
│   ├── data/
│   │   ├── curriculumData.ts          # Contenidos formativos España, LatAm y EE.UU.
│   │   ├── exercisesData.ts           # Base de datos de casos clínicos y cadena de custodia
│   │   └── forumSeedData.ts           # Hilos iniciales de la comunidad
│   ├── services/
│   │   └── storageService.ts          # Lógica pura de hash, progreso, IPM y validación JSON
│   ├── types/
│   │   └── forensic.ts                # Contratos e interfaces TypeScript estrictas
│   ├── App.tsx                        # Orquestador de estado, tema y notificaciones
│   ├── index.css                      # Configuración Tailwind CSS v4 y variante dark
│   └── main.tsx                       # Punto de entrada React 19
├── CONTRIBUTING.md                    # Guía de contribución y estándares clínicos/código
├── index.html                         # Metadatos SEO, OpenGraph y tipografías
├── package.json                       # Scripts y dependencias
├── tsconfig.json                      # Configuración del compilador TypeScript
└── vercel.json                        # Configuración de enrutamiento y cabeceras para Vercel
```

---

## Instalación y Configuración Local

### Requisitos previos

- **Node.js** `>= 20.x` (recomendado `22 LTS`)
- **npm** `>= 10.x`

### Pasos de instalación

1. **Clonar el repositorio desde GitHub:**
   ```bash
   git clone https://github.com/tu-usuario/lexmedica-enfermeria-forense.git
   cd lexmedica-enfermeria-forense
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo (Puerto 3000):**
   ```bash
   npm run dev
   ```

4. **Ejecutar validación de tipos y pruebas unitarias:**
   ```bash
   npm run lint
   npm test
   ```

5. **Generar compilación de producción:**
   ```bash
   npm run build
   ```

---

## Despliegue en GitHub y Vercel (Sin Firebase)

1. Sube este repositorio a **GitHub**.
2. Entra en [Vercel](https://vercel.com/) y selecciona **Add New Project** importando tu repositorio de GitHub.
3. Vercel detectará automáticamente `vercel.json` y el framework **Vite** (`buildCommand: npm run build`, `outputDirectory: dist`).
4. Opcionalmente, para activar el despliegue desde GitHub Actions (`.github/workflows/ci-cd.yml`), añade en **Settings > Secrets and variables > Actions** de tu repositorio:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

---

## Documentación Adicional

- Consulta [`CONTRIBUTING.md`](./CONTRIBUTING.md) para añadir nuevos módulos clínicos, traducciones de guías IAFN o casos prácticos.
- Consulta [`docs/ARCHITECTURE_AND_BEST_PRACTICES.md`](./docs/ARCHITECTURE_AND_BEST_PRACTICES.md) para conocer los principios de arquitectura, escalabilidad y estándares de código.
