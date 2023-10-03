import * as itemService from "../../utilities/items-service";
import * as shoppingService from "../../utilities/shopping-service";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableRow } from "../ui/table";
import EditItemForm from "../EditItemForm/EditItemForm";

export default function ItemDetails({ setUserItem, goingToExpire }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedId = searchParams.get("selectedId");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  async function getOneItem(selectedId) {
    const item = await itemService.getOneItem(selectedId);
    setSelectedItem(item);
  }

  useEffect(() => {
    if (selectedId) {
      getOneItem(selectedId);
    } else {
      setSelectedItem({});
    }
  }, [selectedId]);

  async function _handleDelete(selectedId) {
    const newItemList = await itemService.deleteItem(selectedId);
    setUserItem(newItemList);
    navigate("/fridge");
  }

  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  function _handleSaved(item) {
    setSelectedItem(item);
    setUserItem((prevUserItem) => {
      // Replace old item with new item.
      const index = prevUserItem.findIndex((i) => i._id === item._id);
      if (index > -1) {
        return [
          ...prevUserItem.slice(0, index),
          item,
          ...prevUserItem.slice(index + 1),
        ];
      }
      return prevUserItem;
    });
    toggleEdit();
  }
  async function _handleItemTransfer(selectedItem) {
    const newShoppingItem = await shoppingService.createItem(selectedItem);
  }

  return (
    <>
      {isEditing ? (
        <EditItemForm selectedItem={selectedItem} onSaved={_handleSaved} />
      ) : (
        // is in own component ?
        <div className="m-5 p-10 bg-white/50 rounded-3xl ">
          <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {selectedItem.name}
          </h3>
          <Table>
            <TableBody>
              <TableRow>
                <TableHead className="text-black text-lg">Quantity</TableHead>
                <TableCell className="text-black text-lg">
                  {selectedItem.qty}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="text-black text-lg">
                  Expiring In:
                </TableHead>
                <TableCell className="text-black text-lg">
                  {goingToExpire(selectedItem.expDate)} Days
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="grid grid-cols-3 gap-5">
            <Button
              onClick={toggleEdit}
              className="cols-start-1 w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-4"
            >
              EDIT
            </Button>
            <Button
              onClick={() => _handleItemTransfer(selectedItem)}
              className="cols-start-2 w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-4"
            >
              TRANSFER
            </Button>
            <Button
              onClick={() => _handleDelete(selectedId)}
              className="cols-start-3 w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-4"
            >
              DELETE
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
