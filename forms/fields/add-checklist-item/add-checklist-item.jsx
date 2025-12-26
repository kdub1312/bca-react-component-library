const { useState } = React;
import ReactButton from '../../../button/button.js';

export default function BCAChecklistItemAdd() {
  const [itemText, setItemText] = useState('');

  function onInput(e) {
    setItemText(e.target.value)
  }

  function checkIfEmailAddress(text) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkIfEmailAddress(itemText)) {
      alert("Email addresses are not allowed as checklist items.");
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
    } else if (itemText.trim() === '') {
      alert('Please enter a valid checklist item.');
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
        required
      />
      <ReactButton
        customClass={['add-item-button']}
        name="add-item"
        id="add-item-button"
      >
        Add Item
      </ReactButton>
    </form>
  );
}   