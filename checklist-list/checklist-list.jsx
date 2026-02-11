export default function ReactChecklistList({ customClass, checklists, children }) {
    return checklists.map((checklist) => (
        <div key={checklist.id} className="checklist-row">
            <h3>{checklist.title}</h3>
            <p>{checklist.description}</p>
        </div>
    ));
}