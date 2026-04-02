// TODO: Convert the checklist to its own component and conditionally render either that component or the future editView component based on editing state.
import ReactButton from '../button/button.js';
import { handleDelete, handleActivate, handleEdit } from '/js/components/button-actions.js';
import ReactChecklistList from '../checklist-list/checklist-list.js';
import ReactChecklistEdit from '../checklist-edit/checklist-edit.js';
const { createRoot } = ReactDOM;
import BCAChecklistItemAdd from "../forms/fields/add-checklist-item/add-checklist-item.js";

export default function ReactChecklistRow({ items, checklist }) {
    const [isHidden, setIsHidden] = React.useState(false);
    const [isEditing, setIsEditing] = React.useState(false);

    function loadChecklistItemAdd() {
      if (!document.getElementById("bca-checklist-item-add")) {
        return;
      }
      const checklistItemAddRoot = createRoot(document.getElementById("bca-checklist-item-add"));
    
      checklistItemAddRoot.render(
        React.createElement(BCAChecklistItemAdd)
      );
    }

    const toggleHidden = (checklistId) => {
        setIsHidden(!isHidden);
        
        handleDelete(checklistId);
    };

    React.useEffect(() => {
        if (isEditing) {
            // This runs after isEditing is true AND the view has updated
            loadChecklistItemAdd();
        }
    }, [isEditing]);

    const toggleEditing = (checklistId) => {
        setIsEditing(!isEditing);
    };

      return (
          <div key={checklist.id} className={`${isHidden ? 'hidden' : ''} checklist-row items`}>
              <h3>{checklist.title}</h3>
              <p>{checklist.description}</p>
                {!isEditing ? (
                    <ReactChecklistList items={items} />
                ) : (
                    <>
                    <ReactChecklistEdit items={items} checklist={checklist} />
                    </>
                )}
              <div className="checklist-add-target"></div>
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