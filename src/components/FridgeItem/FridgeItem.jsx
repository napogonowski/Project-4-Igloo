import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import * as userService from "../../utilities/users-service";
export default function FridgeItems({ userItems }) {
  return (
    <>
      <div className=" mt-10">
        {userItems.map((item) => (
          <Card key={item._id} className="rounded-3xl border-4 border-cyan-400">
            <CardHeader>
              <CardTitle className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-base font-bold">Quantity: </span>
                <span className="text-xl">{item.qty}</span>
              </p>
              <p className="text-base font-bold">
                Expires on:
                <br />
                <span className="text-xl">
                  {new Date(item.expDate).toDateString()}
                </span>
              </p>
            </CardContent>
            <Button className="mb-5">
              <Link to={`?selectedId=${item._id}`}>View Details</Link>
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}
