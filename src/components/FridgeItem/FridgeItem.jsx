import { useState } from "react";
import * as userService from "../../utilities/users-service"
export default function FridgeItems({userItem}){

  return (
    <>
      <div >
        {userItem.map(item =>(
          <div key={item._id}>
            <p>{item.name}</p>
            <p>{item.qty}</p> d
            <p>{item.expDate}</p>
          </div>
        ))}
      </div>
    </>
  );
}