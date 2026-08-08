export default function Button({ children, onClick, href, type = 'button' }) {
  const className = 'btn glow-on-hover';

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}