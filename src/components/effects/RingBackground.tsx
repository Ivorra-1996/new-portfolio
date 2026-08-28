export default function RingBackground() {
  return (
    <div className="ring-bg-wrap" aria-hidden="true">
      <div className="ring-bg">
        <svg viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ringBgGrad)" strokeWidth="24" />
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="#000000"
            strokeWidth="24"
            strokeDasharray="1.5 7"
            opacity="0.35"
          />
        </svg>
      </div>
    </div>
  );
}
