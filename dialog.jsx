// import React from 'react'; // Not needed in React 17+import React from 'react';
export default function ReactDialog({ children, ...props }) {

  return (
    <dialog {...props}>{children}</dialog>
  );
}