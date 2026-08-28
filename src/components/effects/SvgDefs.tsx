export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <radialGradient id="parchmentGrad" cx="50%" cy="42%" r="75%">
          <stop offset="0%" stopColor="#efe3c4" />
          <stop offset="60%" stopColor="#d9c79a" />
          <stop offset="100%" stopColor="#9c8558" />
        </radialGradient>
        <linearGradient id="ringBgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d9c79a" />
          <stop offset="50%" stopColor="#8a7247" />
          <stop offset="100%" stopColor="#4a3d24" />
        </linearGradient>
      </defs>
    </svg>
  );
}
