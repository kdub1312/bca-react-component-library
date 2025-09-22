// import React from 'react'; // Not needed in React 17+import React from 'react';
export default function ReactButton({ customClass }) {
  return (
    <>
      <button className={`react-button ${customClass}`}>click here</button>
    </>
  );
}