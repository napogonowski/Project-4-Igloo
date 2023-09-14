import * as shoppingService from "../../utilities/shopping-service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
export default function EditShoppingItemForm({ selectedItem }) {
  const navigate = useNavigate();
  const [editItem, setEditItem] = useState({
    _id: "",
    name: "",
    qty: "",
  });

  console.log({ selectedItem });

  useEffect(() => {
    console.log("selecteditem effect", { selectedItem });
    if (selectedItem) {
      setEditItem({
        _id: selectedItem._id,
        name: selectedItem.name,
        qty: selectedItem.qty,
      });
    }
  }, [selectedItem]);

  async function _handleSubmit(e) {
    e.preventDefault();
    try {
      const updatedItem = await shoppingService.updateItem(editItem);
      // onSaved(updatedItem);
    } catch (error) {}
    navigate("/shoppinglist");
  }

  function _handleChange(e) {
    const { name, value } = e.target;
    const newEditItem = { ...editItem, [name]: value };
    setEditItem(newEditItem);
  }
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-start-3 ">
          <form autoComplete="off" onSubmit={_handleSubmit}>
            <Card className=" background-blur bg-white/50 rounded-3xl p-10 m-5 w-[500px]">
              <CardHeader>
                <CardTitle className="scroll-m-20  text-4xl font-semibold tracking-wide transition-colors first:mt-0">
                  Edit Item
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className=" items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label className="text-xl text-left font-black font-medium m-3 ">
                      Name:
                    </Label>
                    <Input
                      className="text-lg font-black font-medium p-5"
                      type="text"
                      name="name"
                      value={editItem.name}
                      onChange={_handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="text-xl text-left font-black font-medium m-3  ">
                      Quantity:
                    </Label>
                    <Input
                      className="text-lg font-black font-medium p-5"
                      type="Number"
                      name="qty"
                      value={editItem.qty}
                      onChange={_handleChange}
                      required
                    />
                  </div>
                </div>
              </CardContent>
              <Button
                className="w-1/2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-3"
                type="submit"
              >
                SAVE
              </Button>
            </Card>
          </form>
        </div>
      </div>
    </>
  );
}
