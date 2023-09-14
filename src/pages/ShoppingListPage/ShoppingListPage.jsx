import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import * as shoppingService from "../../utilities/shopping-service";
import ShoppingListTable from "../../components/ShoppingListTable/ShoppingListTable";
import ShoppingSideBar from "../../components/SideBar/ShoppingSideBar";
import ShoppingItemForms from "../../components/ ShoppingItemForms/ShoppingItemForms";
import "./ShoppingListPage.css";

export default function ShoppingListPage({ user }) {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [isEditing, setIsEditing] = useState(true);
  const [selectedItem, setSelectedItem] = useState({});
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("selectedId");

  async function getOneItem(selectedId) {
    try {
      const item = await shoppingService.getOneItem(selectedId);
      setSelectedItem(item);
    } catch (error) {}
  }
  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  function _handleExport(){
    alert(`Your Shopping List has been Exported to: \n ${user.email}` )
  }

  async function deleteAllItems(user){
    console.log(user)
    const aftermath = await shoppingService.deleteAllItems(user)

  }
  async function getUserShoppingItems({ user }) {
    try {
      const allItems = await shoppingService.getUserShoppingItems({ user });
      setShoppingItems(allItems);
    } catch (error) {
      console.log("SLP log", error);
    }
  }
  useEffect(() => {
    getUserShoppingItems({ user });
  }, []);

  return (
    <>
      <main className="shoppingList grid grid-cols-6  grid-rows-3	gap-4	">
        <aside className="bg-red-500 col-start-1  col-span-2 row-span-3 rounded-2xl">
          <ShoppingSideBar user={user} />
        </aside>
        <div className="tabledContent col-start-3 col-span-4 row-start-1  bg-blue-500">
          <ShoppingItemForms
            toggleEdit={toggleEdit}
            isEditing={isEditing}
            selectedItem={selectedItem}
          />
        </div>
        <div className="tabledContent col-start-3 col-span-4 row-start-2  row-span-2 bg-green-500">
          <Button onClick={_handleExport}>Export List </Button>
          <Button onClick={() => deleteAllItems(user)}>Clear ALL</Button>
          <ShoppingListTable
            selectedId={selectedId}
            shoppingItems={shoppingItems}
            setShoppingItems={setShoppingItems}
            toggleEdit={toggleEdit}
          />
        </div>
      </main>
    </>
  );
}
