import { MdDelete } from "react-icons/md";

export default function Item({ item, onDeleteItems, onClearItems }) {
  return (
    <li className="list-item">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onClearItems(item.id)}
      ></input>

      <span
        style={
          item.packed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {item.number} {item.description}
      </span>
      <div className="buttons">
        <button>
          <MdDelete
            className="delete-button"
            onClick={() => onDeleteItems(item.id)}
          />
        </button>
      </div>
    </li>
  );
}
