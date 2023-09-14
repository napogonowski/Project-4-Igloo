import * as usersService from "../../utilities/users-service";
import * as itemsService from "../../utilities/items-service";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemForm from "../../components/ItemForm/ItemForm";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const initialItem = {
  name: "",
  qty: "",
  expDate: "",
  fridge: true,
};

export default function AddItemPage({ user }) {
  const [formData, setFormData] = useState([]);
  const [formFieldCount, setFormFieldCount] = useState(1);

  async function _handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("Item form JSX Page ", formData);
      const newItem = await itemsService.createItem(formData);
      console.log(newItem, formData);
    } catch (error) {
      console.log("Error creating Item (JSX FORM PAGE)", e);
    }
  }

  return (
    <>
      <div className=" grid grid-cols-3 grid-rows-5 mt-10">
        <div className="col-start-1  mr-[-20]">
          <Link to="/fridge">
            <Button className="m-5 text-xl font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-4 hover:scale-110 hover:bg-orange-500 duration-300 ">
              Home
            </Button>
          </Link>
          <br />
          <Button
            className=" m-5 text-xl font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-4 hover:scale-110 hover:bg-orange-500 duration-300 "
            onClick={() => setFormFieldCount(formFieldCount + 1)}
          >
            +1 Item
          </Button>
          <br />
          <Button
            className=" m-5  text-xl font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-4 hover:scale-110 hover:bg-orange-500 duration-300 "
            onClick={() => setFormFieldCount(formFieldCount - 1)}
          >
            -1 Item
          </Button>
        </div>
        <form
          className=" col-start-2 row-start-1"
          autoComplete="off"
          onSubmit={_handleSubmit}
        >
          <Card className="border-4	 mx-auto flex w-full flex-col justify-center space-y-6 w-1/3 sm:w-[550px]  shadow-blue-500/50 ">
            <CardHeader>
              <CardTitle className="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0">
                Add New Item
              </CardTitle>
            </CardHeader>
            <div className="col-start-2">
              {Array.from({ length: formFieldCount }).map((_, i) => (
                <ItemForm
                  key={i}
                  indexGlobal={i}
                  formData={formData[i] || initialItem}
                  onChange={(data) => {
                    setFormData((prevFormData) => {
                      return [
                        ...prevFormData.slice(0, i),
                        data,
                        ...prevFormData.slice(i + 1),
                      ];
                    });
                  }}
                />
              ))}
            </div>
          </Card>
          <Button
            className=" m-7 p-5  text-xl tracking-wider font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-4 hover:scale-110 hover:bg-orange-500 duration-300 "
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
