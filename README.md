# Constructora - Análisis de Archivos

Aplicación web para el análisis de archivos de construcción, construida con Next.js y Tailwind CSS.

## Características

- Interfaz minimalista y moderna
- Subida múltiple de archivos
- Barra de progreso animada
- Diseño responsive
- Transiciones suaves

## Requisitos

- Node.js 18.0.0 o superior
- npm 9.0.0 o superior

## Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Tecnologías Utilizadas

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- React Icons

## Estructura del Proyecto

```
src/
  ├── app/
  │   ├── page.tsx           # Página principal
  │   ├── analisis/
  │   │   └── page.tsx      # Página de análisis
  │   ├── resultado/
  │   │   └── page.tsx      # Página de resultados
  │   ├── layout.tsx        # Layout principal
  │   └── globals.css       # Estilos globales
  └── components/           # Componentes reutilizables
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia la aplicación en modo producción
- `npm run lint` - Ejecuta el linter

## Licencia

MIT 