import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
export default function ShoppingAction() {
  return (
    <>
      <form autoComplete="off">
        <Card className="mx-auto flex w-full flex-col justify-center space-y-6 w-1/3 mt-10 mb-10 p-10 sm:w-[700px] sm:h-[300px]">
          <CardHeader>
            <CardTitle className="scroll-m-20 font-bold tracking-wide lg:text3xl ">
              New Item
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className=" mb-3 ml-3 text-left scroll-m-20 text-xl font-semibold tracking-tight">
                  Name:
                </Label>
                <Input
                  type="text"
                  name="email"
                  required
                  placeholder="example@email.com"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mt-5 mb-3 ml-3 text-left scroll-m-20 text-xl font-semibold tracking-tight">
                  Quantity:
                </Label>
                <Input type="password" name="password" required />
              </div>
            </div>
          </CardContent>
          <Button
            className=" m-5 text-xl tracking-wider font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-4 hover:scale-110 hover:bg-orange-500 duration-300"
            type="submit"
          >
            Add
          </Button>
        </Card>
      </form>
    </>
  );
}