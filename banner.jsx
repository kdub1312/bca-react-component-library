import ReactButton from './button.js';

export default function ReactBanner({ message }) {
  return (
    <>
      <div className="banner">
        <p>{message}</p>
        <ReactButton customClass={'custom-class'} />
      </div>
    </>
  );
}