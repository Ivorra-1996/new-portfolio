import type { ProjectIcon } from '@/data/projects';

const PARCHMENT_PATH =
  'M8,10 L40,4 L78,9 L120,3 L160,8 L200,2 L214,14 L210,40 L216,66 L206,92 L212,116 L180,122 L150,116 L110,124 L70,118 L36,124 L10,116 L14,90 L4,64 L12,38 Z';

const INK = '#1c1410';
const ROTATIONS: Record<ProjectIcon, string> = {
  hand: 'rotate(-2deg)',
  checklist: 'rotate(1.5deg)',
  coins: 'rotate(-1deg)',
  towers: 'rotate(2deg)',
};

function Parchment() {
  return (
    <>
      <path d={PARCHMENT_PATH} fill="url(#parchmentGrad)" stroke="#6b5636" strokeWidth="1.5" />
    </>
  );
}

function HandIcon() {
  return (
    <>
      <Parchment />
      <ellipse cx="34" cy="26" rx="6" ry="4" fill="#5c4a2c" opacity="0.12" />
      <ellipse cx="186" cy="102" rx="8" ry="5" fill="#5c4a2c" opacity="0.12" />
      <circle cx="110" cy="68" r="48" fill="none" stroke={INK} strokeWidth="1.3" strokeDasharray="4 5" opacity="0.55" />
      <rect x="90" y="78" width="42" height="30" rx="13" fill="none" stroke={INK} strokeWidth="2.2" />
      <rect x="93" y="50" width="7" height="30" rx="3.5" fill="none" stroke={INK} strokeWidth="2" />
      <rect x="104" y="44" width="7" height="36" rx="3.5" fill="none" stroke={INK} strokeWidth="2" />
      <rect x="115" y="46" width="7" height="34" rx="3.5" fill="none" stroke={INK} strokeWidth="2" />
      <rect x="126" y="52" width="7" height="28" rx="3.5" fill="none" stroke={INK} strokeWidth="2" />
      <path d="M62,42 C57,50 57,57 62,57 C67,57 67,50 62,42 Z" fill={INK} opacity="0.75" />
      <path d="M160,38 C155,46 155,53 160,53 C165,53 165,46 160,38 Z" fill={INK} opacity="0.75" />
    </>
  );
}

function ChecklistIcon() {
  return (
    <>
      <Parchment />
      <ellipse cx="192" cy="24" rx="7" ry="4" fill="#5c4a2c" opacity="0.12" />
      <ellipse cx="30" cy="108" rx="6" ry="4" fill="#5c4a2c" opacity="0.12" />
      <rect x="68" y="28" width="84" height="72" rx="3" fill="none" stroke={INK} strokeWidth="2.2" />
      <path d="M72,49 L76,53 L82,45" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="88" y1="50" x2="140" y2="50" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M72,71 L76,75 L82,67" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="88" y1="72" x2="140" y2="72" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M72,93 L76,97 L82,89" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="88" y1="94" x2="140" y2="94" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="158" y1="22" x2="178" y2="62" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="163" y1="30" x2="171" y2="26" stroke={INK} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="168" y1="40" x2="176" y2="36" stroke={INK} strokeWidth="1.4" strokeLinecap="round" />
    </>
  );
}

function CoinsIcon() {
  return (
    <>
      <Parchment />
      <ellipse cx="42" cy="102" rx="7" ry="4" fill="#5c4a2c" opacity="0.12" />
      <ellipse cx="176" cy="30" rx="6" ry="4" fill="#5c4a2c" opacity="0.12" />
      <ellipse cx="110" cy="88" rx="34" ry="10" fill="none" stroke={INK} strokeWidth="2.2" />
      <ellipse cx="110" cy="74" rx="34" ry="10" fill="none" stroke={INK} strokeWidth="2.2" />
      <ellipse cx="110" cy="60" rx="34" ry="10" fill="none" stroke={INK} strokeWidth="2.2" />
      <line x1="110" y1="52" x2="110" y2="68" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <line x1="104" y1="55" x2="116" y2="55" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="104" y1="65" x2="116" y2="65" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="130" y1="46" x2="140" y2="40" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="134" y1="52" x2="146" y2="50" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
    </>
  );
}

function TowersIcon() {
  return (
    <>
      <Parchment />
      <ellipse cx="188" cy="98" rx="7" ry="4" fill="#5c4a2c" opacity="0.12" />
      <ellipse cx="28" cy="30" rx="6" ry="4" fill="#5c4a2c" opacity="0.12" />
      <line x1="46" y1="108" x2="174" y2="108" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
      <rect x="62" y="64" width="22" height="44" fill="none" stroke={INK} strokeWidth="2" />
      <rect x="90" y="40" width="28" height="68" fill="none" stroke={INK} strokeWidth="2.2" />
      <rect x="124" y="58" width="22" height="50" fill="none" stroke={INK} strokeWidth="2" />
      <path d="M62,64 L68,56 L74,64 L80,56 L84,64" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M90,40 L97,31 L104,40 L111,31 L118,40" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M124,58 L130,50 L136,58 L140,50 L146,58" fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="104" y1="31" x2="104" y2="14" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M104,14 L120,20 L104,26 Z" fill={INK} />
    </>
  );
}

const ICONS: Record<ProjectIcon, () => React.JSX.Element> = {
  hand: HandIcon,
  checklist: ChecklistIcon,
  coins: CoinsIcon,
  towers: TowersIcon,
};

export default function ProjectArt({ icon }: { icon: ProjectIcon }) {
  const Icon = ICONS[icon];
  return (
    <div className="project-art" style={{ transform: ROTATIONS[icon] }} aria-hidden="true">
      <svg viewBox="0 0 220 130">
        <Icon />
      </svg>
    </div>
  );
}
