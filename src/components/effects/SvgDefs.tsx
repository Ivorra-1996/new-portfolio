export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <radialGradient id="parchmentGrad" cx="50%" cy="42%" r="75%">
          <stop offset="0%" stopColor="#efe3c4" />
          <stop offset="60%" stopColor="#d9c79a" />
          <stop offset="100%" stopColor="#9c8558" />
        </radialGradient>
      </defs>
    </svg>
  );
}
