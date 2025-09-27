import ReactButton from './button.js';

export default function ReactBanner({ message }) {
  return (
    <>
      <div className="banner">
        <p>{message}</p>
        <ReactButton 
          customClass={['gradient-button', 'solid-border', 'test-button-2']}
          togglePopover={true}
          name="button"
          id="test-button-2"
        >Click NOW!!
        </ReactButton>
      </div>
    </>
  );
}