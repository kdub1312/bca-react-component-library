import ReactChecklistItemAdd from "../forms/fields/add-checklist-item/add-checklist-item.js";

export default function ReactChecklistEdit({ items, checklist, children }) {

    return (
        <form action="/admin/update-checklist" method="POST">
        <fieldset id="add-checklist-fieldset" className="form-control">
        <legend htmlFor="items">Custom Checklist Items</legend><br />
        {/* if there is a checklist with current items, render those items as editable inputs, otherwise render nothing<br /> */}
        {items && items.length > 0 ? (
            items.map((item, index) => (
              <div>
                    <label>
                    <input type="checkbox" name="items" value={item}  key={index}/>{item}
                    </label>
                    <br />
              </div>
            ))
            
        ) : (
            <p>No items in this checklist yet.</p>
        )}
        
        </fieldset>
        <ReactChecklistItemAdd />
        <button className="btn btn-primary" type="submit">Update Checklist</button>
        </form>
    );
}  