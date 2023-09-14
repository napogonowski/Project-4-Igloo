import FridgeItem from "../../components/FridgeItem/FridgeItem";
import SideBar from "../../components/SideBar/SideBar";
import * as itemService from "../../utilities/items-service";

import { useState, useEffect } from "react";
import ItemDetails from "../../components/ItemDetails/ItemDetails";

export default function Fridge({ user, setUser }) {
  const [userItems, setUserItems] = useState([]);

  async function getUserItems({ user }) {
    const items = await itemService.getUserItems(user);
    setUserItems(items);
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

    // finding difference
    const msDifference = itemTimeInMs - todayInMs;

    // Day converter
    const dayConverter = 24 * 60 * 60 * 1000;

    //converting difference to day
    const daysLeft = Math.round(msDifference / dayConverter);
    return daysLeft;
  }

  return (
    <main className="grid grid-cols-7 grid-rows-2 gap-4">
      <div className="col-start-1 col-span-2 rounded-2xl">
        <SideBar user={user} setUser={setUser} />
      </div>
      <div className=" col-start-3  row-span-2 col-span-3">
        {userItems.length > 0 ? (
          <FridgeItem goingToExpire={goingToExpire} userItems={userItems} />
        ) : (
          <h3>No items Yet !</h3>
        )}
      </div>
      <div className="col-start-6 col-span-2 grid">
        <ItemDetails
          goingToExpire={goingToExpire}
          userItem={userItems}
          setUserItem={setUserItems}
        />
      </div>
    </main>
  );
}
