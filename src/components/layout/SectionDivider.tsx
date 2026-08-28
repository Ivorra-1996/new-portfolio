export default function SectionDivider() {
  return (
    <div className="section-divider" role="separator" aria-hidden="true">
      <span className="section-divider-blade" />
      <span className="section-divider-blade section-divider-blade--r" />
    </div>
  );
}
