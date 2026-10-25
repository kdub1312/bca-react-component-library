import BCAChecklistItemAdd from "../forms/fields/add-checklist-item/add-checklist-item.js";
import BCARemoveEditChecklistItem, { BCAModifyEditChecklistItem } from "../checklist-item-edit/checklist-item-edit.js";

export default function ReactChecklistEdit({ items, checklist, onUpdated }) {
    const currentItems = items;
    // Changing the key remounts the form so hidden original values and added items reset.
    const [formKey, setFormKey] = React.useState(0);
    const [status, setStatus] = React.useState('');
    const [saving, setSaving] = React.useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        setSaving(true);
        setStatus('');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                body: new URLSearchParams(new FormData(form))
            });
            if (!response.ok) throw new Error('Update failed');

            const data = await response.json();
            onUpdated(data.items);
            setFormKey((k) => k + 1);
            setStatus('Checklist updated.');
        } catch (err) {
            setStatus('Could not update checklist. Please try again.');
        } finally {
            setSaving(false);
        }
    }

    return (
        <>
            <form key={formKey} action="/admin/update-checklist" method="POST" onSubmit={handleSubmit}>
            <fieldset id="add-checklist-fieldset" className="form-control">
            <legend htmlFor="items">Custom Checklist Items</legend><br />
            {/* if there is a checklist with current items, render those items as editable inputs, otherwise render nothing<br /> */}
            <input type="hidden" name="id" value={checklist.id}></input>
            <div id="bca-checklist-item-add-dropzone">
            {currentItems && currentItems.length > 0 ? (
                currentItems.filter(single => single && typeof single === 'object').map((single, index) => (
                    <BCARemoveEditChecklistItem key={`${index}-${single.item}`} single={single} index={index} />
                ))
            ) : (
                <p>No items in this checklist yet.</p>
            )}
            </div>
            
            </fieldset>
            <button className="btn btn-primary" type="submit" disabled={saving}>Update Checklist</button>
            <span role="status">{status}</span>
            </form>
            <BCAChecklistItemAdd />
        </>
    );
}  