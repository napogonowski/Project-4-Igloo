import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

import * as userService from "../../utilities/users-service"
export default function FridgeItems({userItem, setSelectedItem, selectedItem}){



  return (
    <>
      <div >
        {userItem.map(item =>(
          <Card key={item._id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Quantity: {item.qty}</p> 
              <p>{item.expDate}</p>
            </CardContent>
            <CardFooter>
              <Button>
                <Link to={`?selectedId=${item._id}`}>
                  View Details
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}