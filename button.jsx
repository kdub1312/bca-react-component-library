export default function ReactButton({ customClass = [], onSelect, children, ...props }) {
  //use React.useState instead of import { useState } from 'react';
  //since we are loading the React from CDN in index.html
  const [isClicked, setIsClicked] = React.useState(false);


  function handleClick(cb) {
    setIsClicked(!isClicked);
    if (onSelect) {
      onSelect();
    }
  }



  // Ensure customClass is always an array
  const classNames = ['react-button', 'test-class', ...customClass].join(' ');

  return (
    <button className={classNames} onClick={handleClick} {...props}>{children}</button>
  );
}