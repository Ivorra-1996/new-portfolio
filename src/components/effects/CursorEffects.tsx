'use client';

import { useEffect } from 'react';

export default function CursorEffects() {
  useEffect(() => {
    const ring = document.getElementById('ringCursor');
    const pupil = document.getElementById('eyePupil');
    const eyeWrap = document.querySelector('.nav-eye-mark');

    function onMove(e: MouseEvent) {
      if (ring) {
        ring.style.left = e.clientX + 'px';
        ring.style.top = e.clientY + 'px';
      }
      if (pupil && eyeWrap) {
        const rect = eyeWrap.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const angle = Math.atan2(dx, -dy) * (180 / Math.PI);
        const clamped = Math.max(-18, Math.min(18, angle / 4));
        (pupil as HTMLElement).style.transform = `translate(-50%,-50%) rotate(${clamped}deg)`;
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
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="11" stroke="currentColor" strokeWidth="2.4" />
      </svg>
      <svg className="rune" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10 L7 4 L10 12 L13 5 L17 10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
