import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
export default function EditShoppingItemForm({ selectedItem, toggleEdit }) {
  const navigate = useNavigate();
  const [editItem, setEditItem] = useState({
    _id: "",
    name: "",
    qty: "",
  });
  useEffect(() => {
    if (selectedItem) {
      setEditItem({
        _id: selectedItem._id,
        name: selectedItem.name,
        qty: selectedItem.qty,
      });
    }
  }, [selectedItem]);

  function _handleSave() {
    navigate("/shoppinglist");
    toggleEdit();
  }
  return (
    <>
      <form autoComplete="off" onClick={_handleSave}>
        <Card className="mx-auto flex w-full flex-col justify-center space-y-6 w-1/3 mt-10 mb-10 p-10 sm:w-[700px] sm:h-[300px]">
          <CardHeader>
            <CardTitle className="scroll-m-20 font-bold tracking-wide lg:text3xl ">
              Edit Item
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className=" mb-3 ml-3 text-left scroll-m-20 text-xl font-semibold tracking-tight">
                  Name:
                </Label>
                <Input type="text" name="name" value={editItem.name} required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mt-5 mb-3 ml-3 text-left scroll-m-20 text-xl font-semibold tracking-tight">
                  Quantity:
                </Label>
                <Input type="Number" name="qty" value={editItem.qty} />
              </div>
            </div>
          </CardContent>
          <Button
            className=" m-5 text-xl tracking-wider font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-4 hover:scale-110 hover:bg-orange-500 duration-300"
            type="submit"
          >
            SAVE
          </Button>
        </Card>
      </form>
    </>
  );
}
