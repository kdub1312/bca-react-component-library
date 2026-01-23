export default function ReactFooter({ customClass = [], items = [] }) {
  return (
    <footer className={`${customClass.join(' ')} bg-light text-center text-lg-start`}>
      <div className="text-center p-3">
        © 2026 BCA React Component Library
      </div>
      <ul className="utility-links d-flex flex-column justify-content-center">
        {items.map((item) => (
          <li  key={item.name}><a href={item.link}>{item.name}</a></li>
        ))}
      </ul>
    </footer>
  );
}