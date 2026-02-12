import ReactButton from '../button/button.js';

export default function ReactChecklistList({ customClass, checklists, children }) {
    return checklists.map((checklist) => (
        <div key={checklist.id} className="checklist-row">
            <h3>{checklist.title}</h3>
            <p>{checklist.description}</p>
            <ReactButton 
                customClass={['list-button']}
                name="button"
                id={`delete-btn-${checklist.id}`}
                data-checklist-id={checklist.id}
            >Delete
            </ReactButton>
            <ReactButton 
                customClass={['list-button']}
                name="button"
                id={`activate-btn-${checklist.id}`}
                data-checklist-id={checklist.id}
            >Activate
            </ReactButton>
        </div>
    ));
}