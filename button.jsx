// import React from 'react'; // Not needed in React 17+import React from 'react';
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal
export default function ReactButton({ customClass = [], children, ...props }) {
  // Ensure customClass is always an array
  const classNames = ['react-button', ...customClass].join(' ');

  return (
    <button className={classNames} {...props}>{children}</button>
  );
}