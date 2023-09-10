import { useState } from "react"
import * as itemsService from "../../utilities/items-service"
import moment from "react-moment"; 
import { DatePicker } from "../ui/date-picker";

export default function ItemForm({}){
  const [formData, setFormData]= useState({
    name: "",
    qty: "",
    expDate: "",
    fridge: true,
    // category: "", 
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
    // console.log({ e })
    // const newDate = moment(date).format("YYYY-MM-DD");
    setFormData({...formData, expDate:date})
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
        {/* <input 
        name="expDate"
        value={formData.expDate.toISOString()}
        onChange={_handleChange}
        type="date" /> */}

        <DatePicker 
          date={formData.expDate}
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
        <input type="checkbox" name="frozen" checked={formData.frozen} onChange={_handleChangeFrozen} />
        {/* <label htmlFor="">Food Category</label>
        <select 
        name="category"
        value={formData.category}
        onChange={_handleChange}
        >
          <option value="fruit">fruit</option>
          <option value="Veg">Veg</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Eggs">Eggs</option>
        </select> */}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}