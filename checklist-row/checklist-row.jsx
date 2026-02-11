import ReactButton from '../button/button.js';

export default function ReactChecklistRow({ item, index, onToggle }) {
  function handleChange() {
    if (onToggle) {
      onToggle(index);
    }
  }

  return (
    <tr className="checklist-row">
      <td>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={handleChange}
        />
      </td>
      <td>{item.description}</td>
    </tr>
  );
}