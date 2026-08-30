# José Ivorra — Portfolio

Portfolio personal como desarrollador frontend. HTML/CSS/TypeScript sin frameworks de UI (nada de React/Vue) — el código sigue siendo DOM plano, pero con `npm install`, TypeScript y hot-reload vía [Vite](https://vitejs.dev), para poder sumar librerías (por ejemplo `three`) más adelante sin fricción.

## Uso

```bash
npm install      # una sola vez
npm run dev      # servidor de desarrollo con hot-reload (o: npm start)
npm run build    # build de producción -> dist/
npm run preview  # sirve el build de producción localmente
npm run typecheck
```

## Estructura

```
index.html         # la página (una sola)
src/
  main.ts          # menú mobile, revelado al scroll, año del footer
  style.css        # sistema de diseño (tokens) + estilos
  vite-env.d.ts
```

Ver `CLAUDE.md` para el detalle de las decisiones de arquitectura y diseño.
