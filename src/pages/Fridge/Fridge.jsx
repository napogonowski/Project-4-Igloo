import FridgeItem from "../../components/FridgeItem/FridgeItem";
import { useState, useEffect } from "react";
import * as userService from '../../utilities/users-service';
import * as itemService from '../../utilities/items-service';
import ActionBar from "../../components/ActionBar/ActionBar";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import "./Fridge.css"

export default function Fridge({user}) {
  const [userItem, setUserItem] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});

  async function getUserItems({user}) {
    try{
      const item = await itemService.getUserItems(user); 
      setUserItem(item);
    } catch (error) {
      console.log("Failed to get user item: ", error)
    }
  }
  useEffect(() =>{
    getUserItems({user});
  }, []);

  return (
    <main className="Fridge">
      <aside>
        <ActionBar />
      </aside>
      <div className="flex flex-wrap">
      {userItem.length >0 ?
        <div>
         <FridgeItem userItem={userItem} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
         </div>
        :
        <h3>No items Yet !</h3>
      }

      </div>
      <ItemDetails userItem={userItem} setUserItem={setUserItem} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
    </main>
  );
}