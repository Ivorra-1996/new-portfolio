'use client';

import { useEffect } from 'react';

export default function CursorEffects() {
  useEffect(() => {
    const ring = document.getElementById('ringCursor');

    // El seguimiento del Ojo lo maneja el propio shader (EvilEye), acá solo
    // movemos el Anillo-cursor.
    function onMove(e: MouseEvent) {
      if (ring) {
        ring.style.left = e.clientX + 'px';
        ring.style.top = e.clientY + 'px';
      }
    }

    document.addEventListener('mousemove', onMove);

    // Delegación en vez de listeners por elemento: así sigue funcionando
    // con tarjetas que React agrega/quita dinámicamente (ej. el filtro de proyectos).
    function onOver(e: MouseEvent) {
      if ((e.target as HTMLElement)?.closest?.('.interactive-hot')) {
        ring?.classList.add('is-hot');
      }
    }
    function onOut(e: MouseEvent) {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related?.closest?.('.interactive-hot')) {
        ring?.classList.remove('is-hot');
      }
    }
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <div id="ringCursor" className="ring-cursor" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element -- cursor fijo, necesita <img> plana, no el wrapper de next/image */}
      <img src="/anillo.png" alt="" width={30} height={26} draggable={false} />
    </div>
  );
}
