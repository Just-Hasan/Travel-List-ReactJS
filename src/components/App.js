/////////////////////////////////////[Library]
import { useState } from "react";

/////////////////////////////////////[Local Component]
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

import "../index.css";

export default function App() {
  /////////////////////////////////////[State di bawah ini memiliki array kosong sebagai initial value nya]
  const [items, setItems] = useState([]);

  /*
  /////////////////////////////////////[LOGIKA FUNCTION handleAddItems]
  1. Function ini menerima 1 paramater
  2. Didalam function ini kita memanggil setter function dari state variable (items) yaitu
     setItems
  3. Di dalamnya kita melakukan functional update, paramater *items* didalam function update
     tersebut adalah value terkini / value sekarang yang belum terupdate.
  4. Functional update tersebut kemudia mengembalikan array baru yang berisi semua objec dari array items
     kemudian satu item baru (paramater handleAddItems)
  */
  function handleAddItems(item) {
    setItems((items) => {
      return [...items, item];
    });
  }

  /*
  /////////////////////////////////////[LOGIKA FUNCTION handleCheckItems]
  1. Function ini menerima 1 paramater (id dari setiap item)
  2. Didalam function ini kita memanggil setter function dari state variable (items) yaitu
     setItems
  3. Di dalamnya kita melakukan functional update, paramater *currentArray* didalam function update
     tersebut adalah value terkini / value sekarang yang belum terupdate.  
  4. Kemudian di currentArray, yang dimana adalah array yang berisi value terkini, kita menggunakan
     map method untuk melakukan pengecekan. Karena map berisi callback, disini kita memberi nama 'list'
     sebagai representasi dari semua object yang ada di dalam currentArray.
  5. Karena list sekarang adalah object, kita menggunakan list.id untuk mencari tau apakah id(paramater kita)
     ada di list, jika iya kembalikan objeck baru yang berisi semua property2 sebelumnya, tapi dengan property 
     packed sekarang berisi value kebalikan dari yang dimilikinya sebelumnya
  */
  function handleCheckItems(id) {
    setItems((currentArray) =>
      currentArray.map((list) =>
        list.id === id ? { ...list, packed: !list.packed } : list
      )
    );
  }

  /*
  /////////////////////////////////////[LOGIKA FUNCTION handleDeleteItems]
  1. Function ini menerima 1 paramater (id dari setiap item)
  2. Didalam function ini kita memanggil setter function dari state variable (items) yaitu
     setItems
  3. Di dalamnya kita melakukan functional update, paramater *curItem* didalam function update
     tersebut adalah value terkini / value sekarang yang belum terupdate.  
  4. Kemudian di curItem, yang dimana adalah array yang berisi value terkini, kita menggunakan
     filter method untuk melakukan pengecekan. Karena filter berisi callback, disini kita memberi nama 'item'
     sebagai representasi dari semua object yang ada di dalam curItem.
  5. Logika filterisasinya adalah, kembalikan semua object yang memiliki id TIDAK SAMA dengan 
     id yang kita masukan ke dalam paramater kita ke dalam array 
  */
  function handleDeleteItems(id) {
    setItems((curItem) => items.filter((item) => item.id !== id));
  }

  return (
    <section className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        setItems={setItems}
        onDeleteItems={handleDeleteItems}
        onClearItems={handleCheckItems}
      />
      <Stats items={items} />
    </section>
  );
}
