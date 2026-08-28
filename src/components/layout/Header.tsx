'use client';

import ThemeToggle from './ThemeToggle';
import EvilEye from '@/components/effects/EvilEye';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="nav">
      <div className="nav-inner">
        <nav className="nav-links nav-links-left">
          <a href="#artefactos" className="interactive-hot">
            Los Artefactos
          </a>
        </nav>
        <a href="#hero" className="nav-eye-mark interactive-hot" aria-label="Inicio">
          {theme === 'dark' ? (
            <EvilEye
              eyeColor="#FF6F37"
              intensity={1.1}
              pupilSize={0.6}
              irisWidth={0.25}
              glowIntensity={0.15}
              scale={0.8}
              noiseScale={1}
              pupilFollow={1}
              flameSpeed={1}
              backgroundColor="#120F17"
            />
          ) : (
            <>
            </>
          )}
        </a>
        <div className="nav-links nav-links-right">
          <nav className="nav-links">
            <a href="#cuervo" className="interactive-hot">
              Cuervo Mensajero
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
