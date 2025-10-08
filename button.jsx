// import React from 'react'; // Not needed in React 17+import React from 'react';
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal
export default function ReactButton({ customClass = [], onSelect, children, ...props }) {
  // Ensure customClass is always an array
  const classNames = ['react-button', 'test-class', ...customClass].join(' ');

  return (
    <button className={classNames} onClick={onSelect} {...props}>{children}</button>
  );
}