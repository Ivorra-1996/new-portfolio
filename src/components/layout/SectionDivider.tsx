export default function SectionDivider() {
  return (
    <div className="section-divider" role="separator" aria-hidden="true">
      <span className="section-divider-blade" />
      <span className="section-divider-starwrap" role="img" aria-label="Casco oscuro">
        <span className="section-divider-star section-divider-star--back" />
        <span className="section-divider-star" />
        <span className="section-divider-gem" />
      </span>
      <span className="section-divider-blade section-divider-blade--r" />
    </div>
  );
}
