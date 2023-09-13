import { useState, useEffect } from "react";
import * as shoppingService from "../../utilities/shopping-service";
import ShoppingListTable from "../../components/ShoppingListTable/ShoppingListTable";
import ShoppingSideBar from "../../components/SideBar/ShoppingSideBar";
import ShoppingItemForms from "../../components/ ShoppingItemForms/ShoppingItemForms";
import "./ShoppingListPage.css";

export default function ShoppingListPage({ user }) {
  const [shoppingItems, setShoppingItems] = useState([]);

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
          <ShoppingItemForms />
        </div>
        <div className="tabledContent col-start-3 col-span-4 row-start-2  row-span-2 bg-green-500">
          <ShoppingListTable shoppingItems={shoppingItems} />
        </div>
      </main>
    </>
  );
}
