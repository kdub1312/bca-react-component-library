export default function ReactFooter({ customClass = [] }) {
  return (
    <footer className={`${customClass.join(' ')} bg-light text-center text-lg-start`}>
      <div className="text-center p-3">
        © 2026 BCA React Component Library
      </div>
    </footer>
  );
}