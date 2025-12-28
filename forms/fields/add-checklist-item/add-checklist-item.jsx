const { useState } = React;
import ReactButton from '../../../button/button.js';
// import styles from './add-checklist-item.css.js';

export default function BCAChecklistItemAdd() {
  const [itemText, setItemText] = useState('');
  const [error, setError] = useState('');

  function onInput(e) {
    setItemText(e.target.value)

    //clear error when user types
    if (error) setError('');
  }

  function validateNewItem(text) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numbersRegex = /^\d+$/;
    const maxRegex = /^.{0,64}$/;

    if (emailRegex.test(text)) {
        //alert("Email addresses are not allowed as checklist items.");
        setError("Email addresses are not allowed as checklist items.");
        return true;
    } else if (numbersRegex.test(text)) {
      //alert("Item cannot be only numbers.");
      setError("Item cannot be only numbers.");
      return true;
    } else if (text.trim() === '') {
      //alert('Please enter a valid checklist item.');
      setError("Please enter a valid checklist item.");
      return true;
    } else if (!maxRegex.test(text)) {
      //alert('Cannot be more than 64 characters');
      setError("Cannot be more than 64 characters");
      return true;
    }
    
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateNewItem(itemText)) {
      return;
    }
    

    if (itemText.trim() !== '') {
      const checklistFieldset = document.getElementById('add-checklist-fieldset');
      const label = document.createElement('label');
      const input = document.createElement('input');

      input.type = 'checkbox';
      input.name = 'items';
      input.value = itemText.trim().toLowerCase().replace(/\s+/g, '-');

      label.appendChild(input);
      label.appendChild(document.createTextNode(itemText.trim()));

      checklistFieldset.appendChild(label);
      checklistFieldset.appendChild(document.createElement('br'));
      
      setItemText('');
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checklist-item-add">
      <input
        type="text"
        value={itemText}
        onChange={onInput}
        placeholder="New checklist item"
        aria-label="New checklist item"
        className={error ? 'error' : ''}
      />
      <ReactButton
        customClass={['add-item-button']}
        name="add-item"
        id="add-item-button"
      >
        Add Item
      </ReactButton>
      {error && <div>{error}</div>}
    </form>
  );
}   