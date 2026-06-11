# Reac Studio

Landing page de Reac Studio construida con Next.js App Router, React 19 y Tailwind CSS.

## Desarrollo local

En Windows PowerShell puede estar bloqueado `npm.ps1` por Execution Policy. Si pasa eso, usá `npm.cmd`:

```powershell
cd D:\Reac
npm.cmd run dev
```

```powershell
npm.cmd run dev -- --port 3001
```

## Scripts

```powershell
npm.cmd run lint
npm.cmd run build
```

## Arquitectura usada en estre proyecto:

- `app/layout.tsx`: metadata global, idioma y estructura HTML.
- `app/page.tsx`: página principal renderizada desde servidor.
- `components/ui/lamp.tsx`: hero visual sin dependencia de JavaScript del navegador.
- `components/ui/gooey-text-morphing.tsx`: animación de servicios, Client Component.
- `components/ui/perspective-marquee.tsx`: marquee animado, Client Component.
