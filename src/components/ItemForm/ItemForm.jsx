import { useState } from "react";
import * as itemsService from "../../utilities/items-service";
import { parseISO } from "date-fns";
import { DatePicker } from "../ui/date-picker";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function ItemForm({}) {
  const [formData, setFormData] = useState({
    name: "",
    qty: "",
    expDate: "",
    fridge: true,
  });

  async function _handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("Item form JSX Page ", formData);
      const newItem = await itemsService.createItem(formData);
    } catch (error) {
      console.log("Error creating Item (JSX FORM PAGE)", e);
    }
  }

  function _handleChange(e) {
    const { name, value } = e.target;

    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  }
  function _handleDateChange(date) {
    // check for valid  date object
    if (date instanceof Date && !isNaN(date)) {
      const isoDate = date.toISOString();
      setFormData({ ...formData, expDate: isoDate });
    } else {
      console.log("invalid date", date);
    }
  }

  function _handleChangeFrozen(e) {
    const { name, checked } = e.target;
    const newFormData = { ...formData, [name]: checked };
    setFormData(newFormData);
  }

  return (
    <>
      <form autoComplete="off" onSubmit={_handleSubmit}>
        <Card className="border-4	 mx-auto flex w-full flex-col justify-center space-y-6 w-1/3 sm:w-[550px] sm:h-[650px] shadow-blue-500/50 ">
          <CardHeader>
            <CardTitle className="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0">
              Add New Item
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className=" mb-2 ml-3 text-left scroll-m-20 text-xl font-semibold tracking-tight">
                  Name:
                </Label>
                <Input
                  className="p-5"
                  name="name"
                  value={formData.name}
                  onChange={_handleChange}
                  type="text"
                />
              </div>
              <div>
                <div className="flex flex-col space-y-1.5">
                  <Label className="mt-3 mb-2 ml-3 text-left scroll-m-20 text-xl font-semibold tracking-tight">
                    Quantity
                  </Label>
                  <Input
                    className="p-5"
                    name="qty"
                    value={formData.qty}
                    onChange={_handleChange}
                    type="number"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mt-3 mb-2 ml-3 text-left scroll-m-20 text-xl font-semibold tracking-tight">
                  Expiry Date:{" "}
                </Label>
                <DatePicker
                  className="p-5 mb-3"
                  date={formData.expDate ? parseISO(formData.expDate) : null}
                  onChange={(date) => _handleDateChange(date)}
                />
              </div>
              <div className="flex flex-col space-y-1.5 mt-5">
                <Select
                  value={formData.fridge}
                  onChange={_handleChange}
                  className="p-5"
                  name="fridge"
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Fridge or Freezer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={true}>Fridge</SelectItem>
                      <SelectItem value={false}>Freezer</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <Button
            className=" m-5  text-xl tracking-wider font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-4 hover:scale-110 hover:bg-orange-500 duration-300 "
            type="submit"
          >
            Submit
          </Button>
        </Card>
      </form>
    </>
  );
}
