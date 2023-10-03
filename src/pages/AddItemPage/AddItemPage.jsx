import * as itemsService from "../../utilities/items-service";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemForm from "../../components/ItemForm/ItemForm";
import { Button } from "../../components/ui/button";
import { AlignJustify } from "lucide-react";
import { Card, CardHeader, CardTitle } from "../../components/ui/card";
import AddItemSideBar from "../../components/SideBar/AddItemSideBar";

const initialItem = {
  name: "",
  qty: "",
  expDate: "",
  fridge: true,
};

export default function AddItemPage({ user, setUser }) {
  const [formData, setFormData] = useState([]);
  const [formFieldCount, setFormFieldCount] = useState(1);
  const navigate = useNavigate();

  async function _handleSubmit(e) {
    e.preventDefault();
    try {
      const newItem = await itemsService.createItem(formData);
      navigate("/fridge");
      console.log(newItem, formData);
    } catch (error) {
      console.log("Error creating Item (JSX FORM PAGE)", e);
    }
  }

  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button
        className="block lg:hidden bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded"
        onClick={() => setOpen(!isOpen)}
      >
        <AlignJustify />
      </Button>
      <div className="flex">
        <div
          className={`max-w-[500px] rounded-2xl fixed lg:static mt-0 lg:mt-1 transition-[margin-left] ease-in-out duration-500 ${
            isOpen ? "ml-0" : "ml-[-500px] lg:ml-0"
          }`}
        >
          <AddItemSideBar user={user} setUser={setUser} />
        </div>
        <main className=" content-center flex-1">
          <div className="flex flex-col items-center">
            <div className="flex justify-evenly w-full">
              <Button
                className="w-1/3 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-5"
                onClick={() => setFormFieldCount(formFieldCount + 1)}
              >
                +1 Item
              </Button>
              <Button
                className="w-1/3  border-4text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-5"
                onClick={() => setFormFieldCount(formFieldCount - 1)}
              >
                -1 Item
              </Button>
            </div>
            <form className="" autoComplete="off" onSubmit={_handleSubmit}>
              <Card className="border-4 flex w-full flex-col justify-center space-y-6 w-1/3 w-[550px] bg-white/50 col-span-2">
                <CardHeader>
                  <CardTitle className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight  first:mt-0">
                    Add New Item
                  </CardTitle>
                </CardHeader>
                <div className="">
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
                <div className="justify-center">
                  <Button
                    className=" w-1/2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-10"
                    type="submit"
                  >
                    SUBMIT
                  </Button>
                </div>
              </Card>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
