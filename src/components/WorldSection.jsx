import './WorldSection.css';

export default function Section({ id, label, variant = 'default', children }) {
  return (
    <section
      id={id}
      className={`section section-${variant}`}
      aria-label={label}
    >
      <div className="localSection">
        {children}
      </div>
    </section>
  );
}