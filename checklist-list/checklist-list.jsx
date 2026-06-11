export default function ReactChecklistList({ items }) {
    return (
        <ul className="item list-group">
            {items
                .filter(single => single && typeof single === 'object')
                .map((single, index) => (
                    <li key={index} className="list-group-item">{single.item}</li>
                ))}
        </ul>
    );
}