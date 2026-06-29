import BCAChecklistItemAdd from "../forms/fields/add-checklist-item/add-checklist-item.js";
import BCARemoveEditChecklistItem from "../checklist-item-edit/checklist-item-edit.js";

export default function ReactChecklistEdit({ items, checklist, children }) {

    return (
        <>
            <form action="/admin/update-checklist" method="POST">
            <fieldset id="add-checklist-fieldset" className="form-control">
            <legend htmlFor="items">Custom Checklist Items</legend><br />
            {/* if there is a checklist with current items, render those items as editable inputs, otherwise render nothing<br /> */}
            <input type="hidden" name="id" value={checklist.id}></input>
            <div id="bca-checklist-item-add-dropzone">
            {items && items.length > 0 ? (
                items.filter(single => single && typeof single === 'object').map((single, index) => (
                <BCARemoveEditChecklistItem key={index} single={single} index={index} />
                ))      
            ) : (
                <p>No items in this checklist yet.</p>
            )}
            </div>
            
            </fieldset>
            <button className="btn btn-primary" type="submit">Update Checklist</button>
            </form>
            <BCAChecklistItemAdd />
        </>
    );
}  