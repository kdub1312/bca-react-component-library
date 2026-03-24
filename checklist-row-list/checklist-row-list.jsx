import ReactChecklistRow from '../checklist-row/checklist-row.js';

export default function ReactChecklistRowsList({ customClass, checklists, children }) {

    return checklists.map((checklist) => {
        // Ensure items is an array
        const items = Array.isArray(checklist.items) 
            ? checklist.items 
            : (typeof checklist.items === 'string' ? JSON.parse(checklist.items) : []);
        
        return (
                <ReactChecklistRow items={items} checklist={checklist} key={checklist.id} />
        );
    });
}