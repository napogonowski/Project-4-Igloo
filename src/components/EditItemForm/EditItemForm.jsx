import { useState, useEffect } from "react"
import { parseISO } from "date-fns";
import * as itemsService from "../../utilities/items-service"
import { DatePicker } from "../ui/date-picker";

export default function EditItemForm({toggleEdit, selectedItem}){
  const [editItem, setEditItem]= useState({
    _id: "", 
    name: "",
    qty: "",
    expDate: "",
    fridge: true,
  })

  useEffect(() => {
    // console.log("edit use effect log ", selectedItem)
    if (selectedItem) {
      setEditItem({
        _id: selectedItem._id, 
        name: selectedItem.name,
        qty: selectedItem.qty,
        expDate: selectedItem.expDate,
        fridge: selectedItem.fridge,
      })
    }
  }, [selectedItem]);

  async function _handleSubmit(e){
    e.preventDefault();
    try {
      console.log("Edit JSX sending : ", editItem )
      const updatedItem = await itemsService.editItem(editItem);
      console.log("Edit JSX recieving: ", updatedItem)
      toggleEdit();
    } catch (error) {
      console.log(error) 
    } 
  }
  function _handleChange(e){
    const {name, value } = e.target; 
    const newItemValue = {...editItem, [name]: value}
    setEditItem(newItemValue); 
  }
  function _handleDateChange(date) {
     // check for valid  date object
    if (date instanceof Date && !isNaN(date)){
      const isoDate = date.toISOString();
      setEditItem({...editItem, expDate:isoDate})
    } else {
      console.log("invalid date", date)
    }
  }

  function _handleChangeFrozen(e){
    const { name, checked } = e.target; 

    const newFrozenValue = {...editItem, [name]: checked}
    setEditItem(newFrozenValue); 
  }

  return(
    <>
    <form onSubmit={_handleSubmit}>
        <label>Name</label>
        <input  
        name="name"
        value={editItem.name} 
        onChange={_handleChange}
        type="text"
        />
        <label htmlFor="">Quantity</label>
        <input 
        name="qty"
        value={editItem.qty}
        onChange={_handleChange}
        type="number"
        />
        <label htmlFor="">Expiry Date</label>
        <DatePicker 
          date={editItem.expDate ? parseISO(editItem.expDate) : null}
          onChange={(date) => _handleDateChange(date)}
        />
        <label> Storage: </label>
        <select
        name="fridge"
        value={editItem.fridge} 
        onChange={_handleChangeFrozen}
        id="">
          <option value={true}>Fridge</option>
          <option value={false}>Freezer </option>
        </select>
        <button 
        onClick={_handleSubmit}
        type="submit">Submit</button>
      </form>
    </>
  )
}