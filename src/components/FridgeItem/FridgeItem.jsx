import { useState } from "react";
import * as userService from "../../utilities/users-service"
export default function FridgeItems({user}){

  const [userItem, setUserItem] = useState([]);

  async function getUserItems({user}) {
    try{
      const item = await userService.getUserItems(); 
      setUserItem(item);
    } catch (error) {
      console.log("Failed to get user item: ", error)
    }
  }
  
  return (
    <>
      <div >
        {userItem.map(item =>(
          <div key={item._id}>
            <p>{item.name}</p>
            <p>{item.qty}</p>
            <p>{item.expDate}</p>
          </div>
        ))}
      </div>
    </>
  );
}