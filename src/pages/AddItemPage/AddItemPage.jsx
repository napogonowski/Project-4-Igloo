import * as usersService from "../../utilities/users-service";
import * as itemsService from "../../utilities/items-service";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  async function _handleSubmit(e) {
    e.preventDefault();
    try {
      console.log("Item form JSX Page ", formData);
      const newItem = await itemsService.createItem(formData);
      navigate("/fridge");
      console.log(newItem, formData);
    } catch (error) {
      console.log("Error creating Item (JSX FORM PAGE)", e);
    }
  }

  return (
    <>
      <div className=" grid grid-cols-3 grid-rows-5 mt-10">
        <div className="col-start-1  mr-[-20]">
          <div className="mt-10">
            <Link to="/fridge">
              <Button className="w-1/2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-5">
                Home
              </Button>
            </Link>
            <br />
            <Button
              className="w-1/2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-5"
              onClick={() => setFormFieldCount(formFieldCount + 1)}
            >
              +1 Item
            </Button>
            <br />
            <Button
              className="w-1/2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-5"
              onClick={() => setFormFieldCount(formFieldCount - 1)}
            >
              -1 Item
            </Button>
          </div>
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
            className="w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-10"
            type="submit"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </>
  );
}
