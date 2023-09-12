import FridgeItem from "../../components/FridgeItem/FridgeItem";
import SideBar from "../../components/SideBar/SideBar";
import * as userService from "../../utilities/users-service";
import * as itemService from "../../utilities/items-service";

import { useState, useEffect } from "react";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import "./Fridge.css";

export default function Fridge({ user, setUser }) {
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

  function goingToExpire(itemTime) {
    // convert to Item time to something useable
    const parsedItemTime = new Date(itemTime);
    const today = new Date();
    // convert into MS for comparrison
    const todayInMs = today.getTime();
    const itemTimeInMs = parsedItemTime.getTime();
    console.log("Item Object", parsedItemTime);
    console.log("Now ", today);

    // finding difference
    const msDifference = itemTimeInMs - todayInMs;

    // Day converter
    const dayConverter = 24 * 60 * 60 * 1000;

    //converting difference to day
    const daysLeft = Math.round(msDifference / dayConverter);
    console.log("day calcuation", daysLeft);
    return daysLeft;
  }

  return (
    <main className="Fridge">
      <aside>
        <SideBar user={user} setUser={setUser} />
      </aside>
      {/* <div className="flex flex-wrap bg-slate-700 auto-rows-auto "> */}
      <div className="row row-cols-auto justify-content-evenly ">
        <div className="col">
          <div>
            {userItems.length > 0 ? (
              <FridgeItem goingToExpire={goingToExpire} userItems={userItems} />
            ) : (
              <h3>No items Yet !</h3>
            )}
          </div>
        </div>
      </div>
      <ItemDetails
        goingToExpire={goingToExpire}
        userItem={userItems}
        setUserItem={setUserItems}
      />
    </main>
  );
}
