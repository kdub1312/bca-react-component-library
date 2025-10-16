// import React from 'react'; // Not needed in React 17+import React from 'react';
import ReactButton from "../button/button.jsx";

export default function ReactDialog({ children, ...props }) {

  function handleSelect() {
    document.getElementById("dialog").showModal();
    console.log("Dialog opened");
  }
  return (
    <>
      <dialog {...props}>{children}</dialog>
      <ReactButton 
            customClass={['dialog-button']}
            onSelect={handleSelect}
            name="button"
            id="open-dialog-button"
      >Open the Dialog</ReactButton>
    </>
  );
}