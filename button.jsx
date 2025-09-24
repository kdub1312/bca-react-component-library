// import React from 'react'; // Not needed in React 17+import React from 'react';
export default function ReactButton({ customClass = [], name = "button" }) {
  // Ensure customClass is always an array
  const classNames = ['react-button', ...customClass].join(' ');

  return (
    <button className={classNames} name={name}>click here</button>
  );
}