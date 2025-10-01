// import React from 'react'; // Not needed in React 17+import React from 'react';
import ReactButton from "./button.js";

export default function ReactDialog({ children, ...props }) {

  return (
    <>
      <dialog {...props}>{children}</dialog>
      <ReactButton 
            customClass={['dialog-button']}
            name="button"
            id="open-dialog-button"
            onClick={() => document.getElementById("dialog").showModal()}
      >Open Dialog</ReactButton>
    </>
  );
}