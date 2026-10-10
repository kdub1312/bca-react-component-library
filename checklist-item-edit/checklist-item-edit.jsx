function BCARemoveEditChecklistItem({ single, index }) {
    const [isVisible, setIsVisible] = React.useState(true);

    // Don't render anything if the state is false
    if (!isVisible) return null;

    return (
        <div key={index}>
            <button type="button" onClick={() => setIsVisible(false)} className="btn btn-danger">Delete</button>
            <input type="hidden" name="originalItems" value={single.item} />
            <BCAModifyEditChecklistItem single={single} index={index} />
            <br />
        </div>
    );
}

function BCAModifyEditChecklistItem({ single, index }) {
    return (
        <label key={index}>
            <input type="text" name="editedItems" defaultValue={single.item} />
        </label>
    );
}

export { BCAModifyEditChecklistItem };
export default BCARemoveEditChecklistItem;