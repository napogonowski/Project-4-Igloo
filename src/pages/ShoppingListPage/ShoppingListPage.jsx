import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { AlignJustify } from "lucide-react";
import * as shoppingService from "../../utilities/shopping-service";
import ShoppingListTable from "../../components/ShoppingListTable/ShoppingListTable";
import ShoppingSideBar from "../../components/SideBar/ShoppingSideBar";
import ShoppingItemForms from "../../components/ ShoppingItemForms/ShoppingItemForms";

export default function ShoppingListPage({ user, setUser }) {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("selectedId");

  async function getOneItem(selectedId) {
    const item = await shoppingService.getOneItem(selectedId);
    setSelectedItem(item);
  }

  function _handleExport() {
    alert(`Your Shopping List has been sent to: \n ${user.email}`);
  }

  async function deleteAllItems(user) {
    const aftermath = await shoppingService.deleteAllItems(user);
    setShoppingItems([]);
  }
  async function getUserShoppingItems({ user }) {
    const allItems = await shoppingService.getUserShoppingItems({ user });
    setShoppingItems(allItems);
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

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button
        className="block lg:hidden bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center"
        onClick={() => setOpen(!isOpen)}
      >
        <AlignJustify />
      </Button>

      <div className="flex">
        <div
          className={`max-w-[500px] flex-1 rounded-2xl fixed lg:static mt-10 lg:mt-0 transition-[margin-left] ease-in-out duration-500 ${
            isOpen ? "ml-0" : "ml-[-500px] lg:ml-0"
          }`}
        >
          <ShoppingSideBar user={user} setUser={setUser} />
        </div>
        <main className="grid lg:grid-rows-2 lg:grid-cols-2 gap-4	content-center flex-1">
          <div className="lg:row-start-1 lg:col-start-1 lg:col-end-2">
            <ShoppingItemForms
              onAdd={_handleAdd}
              onSaved={_handleSaved}
              isEditing={!!selectedId}
              selectedItem={selectedItem}
            />
          </div>
          <div className="lg:row-start-2 lg:col-span-2 row-span-2">
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
            />
          </div>
        </main>
      </div>
    </>
  );
}
