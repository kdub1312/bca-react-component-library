export default function ReactChecklistList({ items }) {

    return <ul className="item list-group">
            {items.map((item, index) => (
                        <li key={index} className="list-group-item">{item}</li>
                    ))}
            </ul>
}