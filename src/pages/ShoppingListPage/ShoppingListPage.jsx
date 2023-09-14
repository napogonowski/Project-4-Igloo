import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import * as shoppingService from "../../utilities/shopping-service";
import ShoppingListTable from "../../components/ShoppingListTable/ShoppingListTable";
import ShoppingSideBar from "../../components/SideBar/ShoppingSideBar";
import ShoppingItemForms from "../../components/ ShoppingItemForms/ShoppingItemForms";
import "./ShoppingListPage.css";

export default function ShoppingListPage({ user, setUser }) {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("selectedId");

  async function getOneItem(selectedId) {
    try {
      const item = await shoppingService.getOneItem(selectedId);
      setSelectedItem(item);
    } catch (error) {}
  }

  function _handleExport() {
    alert(`Your Shopping List has been Exported to: \n ${user.email}`);
  }

  async function deleteAllItems(user) {
    console.log(user);
    const aftermath = await shoppingService.deleteAllItems(user);
    setShoppingItems([]);
  }
  async function getUserShoppingItems({ user }) {
    try {
      const allItems = await shoppingService.getUserShoppingItems({ user });
      setShoppingItems(allItems);
    } catch (error) {
      console.log("SLP log", error);
    }
  }
  function _handleAdd(item) {
    setShoppingItems([...shoppingItems, item]);
  }

  function _handleSaved(item) {
    setSelectedItem(item);
    setShoppingItems((prevUserItem) => {
      const index = prevUserItem.findIndex((i) => i._id === item._id);
      if (index > -1) {
        return [
          ...prevUserItem.slice(0, index),
          item,
          ...prevUserItem.slice(index + 1),
        ];
      }
      return prevUserItem;
    });
  }

  useEffect(() => {
    getUserShoppingItems({ user });
  }, []);

  useEffect(() => {
    getOneItem(selectedId);
  }, [selectedId]);

  return (
    <>
      <main className="shoppingList grid grid-cols-6  grid-rows-3	gap-4	">
        <aside className="bg-red-500 col-start-1  col-span-2 row-span-3 rounded-2xl">
          <ShoppingSideBar user={user} setUser={setUser} />
        </aside>
        <div className="tabledContent col-start-3 col-span-4 row-start-1  bg-blue-500">
          <ShoppingItemForms
            onAdd={_handleAdd}
            onSaved={_handleSaved}
            isEditing={!!selectedId}
            selectedItem={selectedItem}
          />
        </div>
        <div className="tabledContent col-start-3 col-span-4 row-start-2  row-span-2 bg-green-500">
          <Button
            onClick={_handleExport}
            className="w-1/3 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-5"
          >
            Export List{" "}
          </Button>
          <Button
            onClick={() => deleteAllItems(user)}
            className="w-1/3 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-5"
          >
            Clear ALL
          </Button>
          <ShoppingListTable
            selectedId={selectedId}
            shoppingItems={shoppingItems}
            setShoppingItems={setShoppingItems}
            // toggleEdit={toggleEdit}
          />
        </div>
      </main>
    </>
  );
}
