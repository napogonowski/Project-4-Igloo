import { useState } from "react";
import * as shoppingService from "../../utilities/shopping-service";
import AddShoppingItemForm from "../AddShoppingItemForm/AddShoppingItemForm";
import EditShoppingItemForm from "../EditShoppingItemForm/EditShoppingItemForm";
export default function ShoppingItemForms({
  isEditing,
  selectedItem,
  onSaved,
  onAdd,
}) {
  const [formData, setFormData] = useState({
    name: "",
    qty: "",
  });

  function _handleChange(e) {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  }
  async function _handleSubmit(e) {
    e.preventDefault();
    try {
      const newItem = await shoppingService.createItem(formData);
      onAdd(newItem);
      setFormData({
        name: "",
        qty: "",
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>
        <div>
          {isEditing ? (
            <EditShoppingItemForm
              selectedItem={selectedItem}
              onSaved={onSaved}
            />
          ) : (
            <AddShoppingItemForm
              formData={formData}
              _handleChange={_handleChange}
              _handleSubmit={_handleSubmit}
            />
          )}
        </div>
      </div>
    </>
  );
}
