import FridgeItem from "../../components/FridgeItem/FridgeItem";
import { useState, useEffect } from "react";
import * as userService from "../../utilities/users-service";
import * as itemService from "../../utilities/items-service";
import ActionBar from "../../components/ActionBar/ActionBar";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import "./Fridge.css";

export default function Fridge({ user }) {
  const [userItems, setUserItems] = useState([]);

  async function getUserItems({ user }) {
    try {
      const items = await itemService.getUserItems(user);
      setUserItems(items);
    } catch (error) {
      console.log("Failed to get user item: ", error);
    }
  }
  useEffect(() => {
    getUserItems({ user });
  }, []);

  return (
    <main className="Fridge">
      <aside>
        <ActionBar className="rounded-3xl " />
      </aside>
      <div className="flex flex-wrap bg-slate-700">
        {userItems.length > 0 ? (
          <FridgeItem userItems={userItems} />
        ) : (
          <h3>No items Yet !</h3>
        )}
      </div>
      <ItemDetails userItem={userItems} setUserItem={setUserItems} />
    </main>
  );
}
