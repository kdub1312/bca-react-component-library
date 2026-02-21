import ReactButton from '../button/button.js';
import { handleDelete, handleActivate } from '/js/components/button-actions.js';

export default function ReactChecklistRow({ items, checklist }) {
    const [isHidden, setIsHidden] = React.useState(false);

    const toggleHidden = (checklistId) => {
        setIsHidden(!isHidden);
        handleDelete(checklistId);
    };

      return (
          <div key={checklist.id} className={`${isHidden ? 'hidden' : ''} checklist-row items`}>
              <h3>{checklist.title}</h3>
              <p>{checklist.description}</p>
              {/* loop through checklist items here */}
              <ul className="item list-group">
                  
                  {items.map((item, index) => (
                      <li key={index} className="list-group-item">{item}</li>
                  ))}
              </ul>
              <ReactButton 
                  customClass={['react-button test-class btn btn-danger']}
                  name="button"
                  id={`delete-btn-${checklist.id}`}
                  data-checklist-id={checklist.id}
                  onClick={() => toggleHidden(checklist.id)}
              >Delete
              </ReactButton>
              <ReactButton 
                  customClass={['react-button test-class btn btn-danger']}
                  name="button"
                  id={`activate-btn-${checklist.id}`}
                  data-checklist-id={checklist.id}
                  onClick={() => handleActivate(checklist.id)}>Activate
              </ReactButton>
          </div>
      );
}