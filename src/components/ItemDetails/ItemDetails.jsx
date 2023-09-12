import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditItemForm from "../EditItemForm/EditItemForm";
import * as itemService from "../../utilities/items-service";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function ItemDetails({ userItem, setUserItem }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedId = searchParams.get("selectedId");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  async function getOneItem(selectedId) {
    try {
      const item = await itemService.getOneItem(selectedId);
      setSelectedItem(item);
    } catch (error) {
      console.log("failed to get user Item", error);
    }
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

  function handleSaved(item) {
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

  return (
    <>
      {isEditing ? (
        <EditItemForm selectedItem={selectedItem} onSaved={handleSaved} />
      ) : (
        <div className="m-5 p-10">
          <h3 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {selectedItem.name}
          </h3>
          <Table>
            <TableBody>
              <TableRow>
                <TableHead>Quantity</TableHead>
                <TableCell>{selectedItem.qty}</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Expiry Date:</TableHead>
                <TableCell>{selectedItem.expDate}</TableCell>
              </TableRow>
              <TableRow></TableRow>
            </TableBody>
            <Button onClick={toggleEdit} className="m-5">
              edit
            </Button>
            <Button onClick={() => _handleDelete(selectedId)}>DELETE</Button>
          </Table>
        </div>
        // <Card>
        //   <CardTitle>Placeholder Form</CardTitle>
        //   <form action="">
        //     <Label>Name</Label>
        //     <Input></Input>
        //     <Label>Quantity</Label>
        //     <Input></Input>
        //     <CardFooter>
        //       <Button onClick={toggleEdit} >Save</Button>
        //       {/* on click should reset isediting to false  */}
        //     </CardFooter>
        //   </form>
        // </Card>
      )}
    </>
  );
}
