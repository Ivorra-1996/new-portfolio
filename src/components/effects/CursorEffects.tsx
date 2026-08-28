'use client';

import { useEffect } from 'react';

// El Anillo empieza a reaccionar cuanto más se acerca al Ojo del Header: a
// esta distancia arranca el temblor/parpadeo, y acá adentro se revela el
// mensaje.
const NEAR_DISTANCE = 300;
const CLOSE_DISTANCE = 85;

export default function CursorEffects() {
  useEffect(() => {
    const ring = document.getElementById('ringCursor');
    const prophecy = document.getElementById('ringProphecy');

    function onMove(e: MouseEvent) {
      if (ring) {
        ring.style.left = e.clientX + 'px';
        ring.style.top = e.clientY + 'px';
      }

      // El Ojo solo existe (y "vigila") en modo oscuro.
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      const eyeMark = document.querySelector('.nav-eye-mark');
      if (!isDark || !eyeMark) {
        ring?.style.setProperty('--proximity', '0');
        eyeMark?.setAttribute?.('style', '');
        prophecy?.classList.remove('is-visible');
        return;
      }

      const rect = eyeMark.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);

      const proximity = Math.max(0, Math.min(1, (NEAR_DISTANCE - dist) / (NEAR_DISTANCE - CLOSE_DISTANCE)));
      ring?.style.setProperty('--proximity', String(proximity));
      (eyeMark as HTMLElement).style.setProperty('--proximity', String(proximity));

      prophecy?.classList.toggle('is-visible', dist < CLOSE_DISTANCE);
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
    <>
      <div id="ringCursor" className="ring-cursor" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- cursor fijo, necesita <img> plana, no el wrapper de next/image */}
        <img src="/anillo.png" alt="" width={30} height={26} draggable={false} />
      </div>
      <div id="ringProphecy" className="ring-prophecy" aria-hidden="true">
        <div className="ring-prophecy-backdrop" />
        <div className="ring-prophecy-text">
          <p>Ha comenzado...</p>
          <p>El Este caerá.</p>
          <p>Y así se levantará el reino de Angmar.</p>
          <p>El tiempo de los Elfos ha terminado.</p>
          <p>La era de los Orcos ha llegado.</p>
        </div>
      </div>
    </>
  );
}
