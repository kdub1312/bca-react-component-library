import ReactButton from '../button/button.js';

export default function ReactChecklistList({ customClass, checklists, children }) {
    return checklists.map((checklist) => {
        // Ensure items is an array
        const items = Array.isArray(checklist.items) 
            ? checklist.items 
            : (typeof checklist.items === 'string' ? JSON.parse(checklist.items) : []);
        
        return (
            <div key={checklist.id} className="checklist-row items">
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
                >Delete
                </ReactButton>
                <ReactButton 
                    customClass={['react-button test-class btn btn-danger']}
                    name="button"
                    id={`activate-btn-${checklist.id}`}
                    data-checklist-id={checklist.id}
                >Activate
                </ReactButton>
            </div>
        );
    });
}