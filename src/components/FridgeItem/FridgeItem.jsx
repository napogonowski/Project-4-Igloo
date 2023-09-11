import { useState } from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service"
export default function FridgeItems({userItem, setSelectedItem, selectedItem}){



  return (
    <>
      <div >
        {userItem.map(item =>(
          <div key={item._id}>
            <p>{item.name}</p>
            <p>{item.qty}</p> 
            <p>{item.expDate}</p>
            <Link to={`?selectedId=${item._id}`}>
              View Details
            </Link>
            {/* button w/ onlick */}
          </div>
        ))}
      </div>
    </>
  );
}