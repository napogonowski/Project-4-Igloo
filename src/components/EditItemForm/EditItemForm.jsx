import { useState, useEffect } from "react";
import { parseISO } from "date-fns";
import * as itemsService from "../../utilities/items-service";
import { DatePicker } from "../ui/date-picker";
import { Button } from "../../components/ui/button";

export default function EditItemForm({ selectedItem, onSaved }) {
  const [editItem, setEditItem] = useState({
    _id: "",
    name: "",
    qty: "",
    expDate: "",
    fridge: true,
  });

  useEffect(() => {
    if (selectedItem) {
      setEditItem({
        _id: selectedItem._id,
        name: selectedItem.name,
        qty: selectedItem.qty,
        expDate: selectedItem.expDate,
        fridge: selectedItem.fridge,
      });
    }
  }, [selectedItem]);

  async function _handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("Edit JSX sending : ", editItem);
      const updatedItem = await itemsService.editItem(editItem);
      onSaved(updatedItem);
      console.log("Edit JSX recieving: ", updatedItem);
    } catch (error) {
      console.log(error);
    }
  }
  function _handleChange(e) {
    const { name, value } = e.target;
    const newItemValue = { ...editItem, [name]: value };
    setEditItem(newItemValue);
  }
  function _handleDateChange(date) {
    // check for valid  date object
    if (date instanceof Date && !isNaN(date)) {
      const isoDate = date.toISOString();
      setEditItem({ ...editItem, expDate: isoDate });
    } else {
      console.log("invalid date", date);
    }
  }

  function _handleChangeFrozen(e) {
    const { name, checked } = e.target;

    const newFrozenValue = { ...editItem, [name]: checked };
    setEditItem(newFrozenValue);
  }

  return (
    <>
      <div className=" m-10 p-5 grid rounded-3xl background-blur bg-white/50 justify-center">
        <form onSubmit={_handleSubmit}>
          <label className="scroll-m-20 mt-5 text-xl font-semibold tracking-wide">
            Name:{" "}
          </label>
          <input
            className="m-2 text-lg p-2 h-1/3 rounded-md"
            name="name"
            value={editItem.name}
            onChange={_handleChange}
            type="text"
          />
          <label className="scroll-m-20 mt-5 text-xl font-semibold tracking-wide">
            Quantity:{" "}
          </label>
          <input
            className="m-2  text-lg p-4 h-1 rounded-md"
            name="qty"
            value={editItem.qty}
            onChange={_handleChange}
            type="number"
          />
          <label className="scroll-m-20  mt-5 text-xl font-semibold tracking-wide">
            Expiry Date:{" "}
          </label>
          <DatePicker
            className=""
            date={editItem.expDate ? parseISO(editItem.expDate) : null}
            onChange={(date) => _handleDateChange(date)}
          />
          <label className="scroll-m-20  mt-5 text-xl font-semibold tracking-wide">
            {" "}
            Storage:{" "}
          </label>
          <select
            className="m-2 h-1/3 rounded-md "
            name="fridge"
            value={editItem.fridge}
            onChange={_handleChangeFrozen}
            id=""
          >
            <option value={true}>Fridge</option>
            <option value={false}>Freezer </option>
          </select>
          <Button
            onClick={_handleSubmit}
            type="submit"
            className="w-full col-span-2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center "
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
