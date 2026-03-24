// TODO: Convert the checklist to its own component and conditionally render either that component or the future editView component based on editing state.
import ReactButton from '../button/button.js';
import { handleDelete, handleActivate, handleEdit } from '/js/components/button-actions.js';
import ReactChecklistList from '../checklist-list/checklist-list.js';

export default function ReactChecklistRow({ items, checklist }) {
    const [isHidden, setIsHidden] = React.useState(false);
    const [isEditing, setIsEditing] = React.useState(false);

    const toggleHidden = (checklistId) => {
        setIsHidden(!isHidden);
        handleDelete(checklistId);
    };

    const toggleEditing = (checklistId) => {
        setIsEditing(!isEditing);
        // handleEdit();
    };

      return (
          <div key={checklist.id} className={`${isHidden ? 'hidden' : ''} checklist-row items`}>
              <h3>{checklist.title}</h3>
              <p>{checklist.description}</p>
              {/* loop through checklist items here */}
              {/* <ul className="item list-group">
                  
                  {items.map((item, index) => (
                      <li key={index} className="list-group-item">{item}</li>
                  ))}
              </ul> */}
                <ReactChecklistList items={items}>
                </ReactChecklistList>

              <div class="checklist-add-target"></div>
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
              <ReactButton 
                  customClass={['react-button btn btn-danger btn-outline-light']}
                  name="button"
                  id={`activate-btn-${checklist.id}`}
                  data-checklist-id={checklist.id}
                  onClick={() => toggleEditing(checklist.id)}>Edit
              </ReactButton>
          </div>
      );
}