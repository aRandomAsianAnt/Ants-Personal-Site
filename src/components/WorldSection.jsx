import './WorldSection.css';

export default function WorldSection({
  id,
  label,
  variant = 'default',
  fullBleed = false,
  heading,
  body,
  image,
  imageAlt = '',
  children,
}) {
  const content = children ?? (
    <div className="sectionPlaceholder">
      <div className="sectionPlaceholderText">
        {heading && <h2 className="sectionTitle">{heading}</h2>}
        {body && <p className="sectionBody">{body}</p>}
      </div>
      {image && (
        <img src={image} alt={imageAlt} className="sectionPlaceholderImage" />
      )}
    </div>
  );

  return (
    <section id={id} className={`worldSection worldSection--${variant}`} aria-label={label}>
      {fullBleed ? content : <div className="localSection">{content}</div>}
    </section>
  );
}