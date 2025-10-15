# 🎨 React UI Components — Atomic Design Architecture

Este proyecto es una colección de **componentes reutilizables de interfaz de usuario** creados con **React + TypeScript + CSS Modules**, siguiendo la metodología **Atomic Design**.  
Su objetivo es construir una base sólida y escalable de componentes visuales (botones, inputs, campos de formulario, etc.) para utilizar en aplicaciones más grandes.

---

## 🧱 Arquitectura: Atomic Design

El proyecto se organiza siguiendo la metodología **[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)**, propuesta por Brad Frost.

### 🧬 Estructura jerárquica

1. **Atoms (Átomos)**  
   Son los elementos más pequeños e indivisibles de la UI.  
   Ejemplos: `Button`, `Input`, `Label`, `DatePicker`.

2. **Molecules (Moléculas)**  
   Combinan varios átomos para formar una unidad funcional.  
   Ejemplo: `FormField` (compuesto por `Label + Input + Error`).

3. **Organisms (Organismos)** *(por implementar)*  
   Unen moléculas y átomos para formar secciones completas o bloques de UI.  
   Ejemplo: un formulario completo, una tarjeta de producto, un encabezado, etc.

4. **Templates & Pages** *(etapa futura)*  
   Definen la estructura visual de una página usando organismos y moléculas.

---

## 🧭 Estructura del proyecto

```bash
src/
│
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   └── Input.module.css
│   │   ├── Label/
│   │   │   ├── Label.tsx
│   │   │   └── Label.module.css
│   │   ├── DatePicker/
│   │   │   ├── DatePicker.tsx
│   │   │   └── DatePicker.module.css
│   │   └── index.ts
│   │
│   ├── molecules/
│   │   ├── FormField/
│   │   │   ├── FormField.tsx
│   │   │   └── FormField.module.css
│   │   └── index.ts
│   │
│   └── organisms/
│       └── (por implementar)
│
├── styles/
│   └── tokens.css      
│
├── App.tsx
├── main.tsx
└── vite.config.ts
