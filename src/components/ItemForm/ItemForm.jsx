import { useState } from "react"
import * as itemsService from "../../utilities/items-service"
import { parseISO } from "date-fns";
import { DatePicker } from "../ui/date-picker";

export default function ItemForm({}){
  const [formData, setFormData]= useState({
    name: "",
    qty: "",
    expDate: "",
    fridge: true, 
  })

  async function _handleSubmit(e){
    e.preventDefault();
    try {
      console.log("Item form JSX Page ", formData)
      const newItem = await itemsService.createItem(formData)

    } catch (error) {
      console.log("Error creating Item (JSX FORM PAGE)", e) 
    } 
  }

  function _handleChange(e){
    const {name, value } = e.target; 

    const newFormData = {...formData, [name]: value}
    setFormData(newFormData); 
  }
  function _handleDateChange(date) {
    // check for valid  date object
    if (date instanceof Date && !isNaN(date)){
      const isoDate = date.toISOString();
      setFormData({...formData, expDate:isoDate})
    } else {
      console.log("invalid date", date)
    } 
  }

  function _handleChangeFrozen(e){
    const { name, checked } = e.target; 

    const newFormData = {...formData, [name]: checked}
    setFormData(newFormData); 
  }


  return(
    <>
    <form onSubmit={_handleSubmit}>
        <label >Name</label>
        <input  
        name="name"
        value={formData.name} 
        onChange={_handleChange}
        type="text"
        />
        <label htmlFor="">Quantity</label>
        <input 
        name="qty"
        value={formData.qty}
        onChange={_handleChange}
        type="number"
        />
        <label htmlFor="">Expiry Date</label>
      

        <DatePicker 
          date={formData.expDate ? parseISO(formData.expDate): null}
          onChange={(date) => _handleDateChange(date)}
        />

        <label> Storage: </label>
        <select
        name="fridge"
        value={formData.fridge} 
        onChange={_handleChange}
        id="">
          <option value="true">Fridge</option>
          <option value="">Freezer </option>
        </select>
      
        <button type="submit">Submit</button>
      </form>
    </>
  )
}