import { useState } from "react";
import Item from "./Item";

/*
/////////////////////////////////////[FORM COMPONENT LOGIC]
1. Kita membuat 2 state, yaitu state untuk description dan state untuk angka
2. Kita membuat function handle submit, kita mengakses paramater e dan menggunakan method
   prevent default untuk menonakfitkan native behavior nya.
3. Jika state variable desciption kosong, maka return function nya
4. Variable newItem dibuat dan diisi dengan value berupa object, object itu kemudian berisi
   state variable description dan number, serta property baru berupa packed dan id.
5. Kita menggunakan function onAddItems (prop) dan memasukan newIterm tsb ke dalamnya sebagai
   paramater.
*/
export default function PackingList({
  items,
  setItems,
  onDeleteItems,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              itemsArray={items}
              onDeleteItems={onDeleteItems}
              onClearItems={onClearItems}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by desciption</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          onClick={() => {
            const confirm = window.confirm(
              "Are u sure u wanna delete everything?"
            );
            confirm ? setItems([]) : setItems(() => sortedItems);
          }}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
