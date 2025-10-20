import ReactButton from '../button/button.js';
import ReactDialog from '../dialog/dialog.js';

export default function ReactBanner({ message }) {
  return (
    <>
      <div className="banner">
        <p>{message}</p>
        <ReactButton 
          customClass={['gradient-button', 'solid-border', 'test-button-2']}
          name="button"
          id="test-button-2"
        >Click NOW!!
        </ReactButton>
      </div>
      <ReactDialog className="react-dialog" id="dialog">
        <>
        <div className="close" onClick={() => document.getElementById("dialog").close()}>X</div>
        <h2>Dialog Headline here</h2>
        <p>This is a dialog inside the banner component.</p>
        </>
      </ReactDialog>
    </>
  );
}