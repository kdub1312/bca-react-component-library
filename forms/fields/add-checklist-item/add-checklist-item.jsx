const { useState, useEffect } = React;
import ReactButton from '../../../button/button.js';

export default function BCAChecklistItemAdd({ onAddItem }) {
  const [itemText, setItemText] = useState('');

  function onAddItem() {

  }
  const handleAddClick = (e) => {
    //alert(itemText.trim());
    e.preventDefault();
    if (itemText.trim() !== '') {
      const checklistFieldset = document.getElementById('add-checklist-fieldset');
      //create a new label 
      const label = document.createElement('label');
      //create a new input of type checkbox and name=items and value=itemText.trim().toLowerCase()
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.name = 'items';
      input.value = itemText.trim().toLowerCase().replace(/\s+/g, '-');
      //append the input as a child to the label
      label.appendChild(input);
      //set the text content of the label to itemText.trim()
      label.appendChild(document.createTextNode(itemText.trim()));
      //append the label to the checklist container with id="add-checklist-fieldset"
      checklistFieldset.appendChild(label);
      checklistFieldset.appendChild(document.createElement('br'));
      //add the value of itemText.trim() as the text content of the label
      console.log(itemText.trim());
      onAddItem(itemText.trim());
      setItemText('');
    }
  };

  return (
    <div className="checklist-item-add">
      <input
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        placeholder="New checklist item"
        aria-label="New checklist item"
      />
      <ReactButton
        customClass={['add-item-button']}
        name="add-item"
        id="add-item-button"
        onClick={handleAddClick}
      >
        Add Item
      </ReactButton>
    </div>
  );
}   