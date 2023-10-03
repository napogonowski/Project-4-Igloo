import FridgeItem from "../../components/FridgeItem/FridgeItem";
import SideBar from "../../components/SideBar/SideBar";
import * as itemService from "../../utilities/items-service";
import { AlignJustify } from "lucide-react";
import { useState, useEffect } from "react";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import { Button } from "../../components/ui/button";

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

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button
        className="block lg:hidden bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg"
        onClick={() => setOpen(!isOpen)}
      >
        <AlignJustify />
      </Button>
      <div className="flex">
        <div
          className={`max-w-[500px] rounded-2xl fixed lg:static mt-10 lg:mt-0 transition-[margin-left] ease-in-out duration-500 ${
            isOpen ? "ml-0" : "ml-[-500px] lg:ml-0"
          }`}
        >
          <SideBar user={user} setUser={setUser} />
        </div>
        <main className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
          <div className=" col-start-1 row-span-2 col-span-3">
            {userItems.length > 0 ? (
              <FridgeItem goingToExpire={goingToExpire} userItems={userItems} />
            ) : (
              <h3>No items Yet !</h3>
            )}
          </div>
          <div className="row-start-1 col-span-3 xl:col-start-4 xl:col-span-2">
            <ItemDetails
              goingToExpire={goingToExpire}
              userItem={userItems}
              setUserItem={setUserItems}
            />
          </div>
        </main>
      </div>
    </>
  );
}
