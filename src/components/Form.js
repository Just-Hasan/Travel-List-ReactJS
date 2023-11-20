import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, number, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setNumber(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your😍trip</h3>
      {/* /////////////////////////////////////[SELECT ELEMENT LOGIC]
            1. Kita menambahkan attribute "value" dan menjadikan nilai dari number
               supaya kita bisa mendapatkan value dari quantity itu nanti.
            2. Dalam event function onChange kita mengakses paramater e, yang dimana
               adalah singkatan untuk event (detail dari elemen terkait) dan menggunakan
               setter function setNumber untuk mengubah nilai dari attribute value tsb.
               berdasarkan apa yang kita ketik
            3. Kita dapat memilih dari 1 - 20 value dari select element, karena itu adalah
               jumlah yang kita buat dengan Array constructor method from.
            4. event onChange  dalam element select akan terpicu setiap kali kita
               memilih pilihan / option baru.
            5. Maka, karena logika yang ada di onChange setNumber, kita akan mengubah value
               dari state variable "number" menjadi value dari option yang kita pilih
            
            Kesimpulan : Kode di bawah membuat value dari element select berubah berdasarkan 
            option yang kita pilih dari option - option yang kita buat menggunakan contructor array
        */}

      <select value={number} onChange={(e) => setNumber(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>

      {/* /////////////////////////////////////[Controlled Element Technique]
            1. Teknik ini membuat ReactJS mengendalikan value dari input field kita
            2. Di contoh kali ini, karna mengiginkan perubahan, maka kita memerlukan state
            3. kita buat state variable dengan nama "description" & setter function yang
               bernama "setDescription".
            4. Karena di awal kita ingin input field nya kosong, jadi initial value nya adalah
               string kosong "". Setelah menentukan initial value, kita pakai state variabel tersebut
               sebagai value dari input field.
            5. kemudian kita juga perlu event function onChange, yang akan mentrigger event setiap kali ada perubahan
            6. Untuk menghubungkan apa yang kita ketik di input field dengan value input field itu sendiri
               kita pakai setterFunction di event function onChange.
        */}
      <input
        type="text"
        placeholder="Item"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
