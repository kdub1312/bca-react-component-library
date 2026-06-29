function BCARemoveEditChecklistItem({ single, index }) {
    const [isVisible, setIsVisible] = React.useState(true);

    // Don't render anything if the state is false
    if (!isVisible) return null;

    return (
        <div key={index}>
            <button onClick={() => setIsVisible(false)} className="btn btn-danger">Delete</button>
            <label>
            <input type="checkbox" name="items" value={single.item} checked/>{single.item}
            </label>
            <br />
        </div>
    );
}

export default BCARemoveEditChecklistItem;