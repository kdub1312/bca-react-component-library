// import React from 'react'; // Not needed in React 17+import React from 'react';
import ReactButton from "../button/button.js";

export default function ReactDialog({ children, ...props }) {

  function handleSelect() {
    document.getElementById("dialog").showModal();
    console.log("Dialog opened");
  }
  return (
    <>
      <dialog {...props}>{children}</dialog>
      <ReactButton 
            customClass={['gradient-button', 'dialog-button']}
            onSelect={handleSelect}
            name="button"
            id="open-dialog-button"
      >Open THIS Dialog</ReactButton>
    </>
  );
}