import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditItemForm from "../EditItemForm/EditItemForm";
import * as itemService from "../../utilities/items-service"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

export default function ItemDetails({selectedItem, setSelectedItem, userItem, setUserItem}) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); 
  const selectedId = searchParams.get('selectedId');
  const [isEditing, setIsEditing] = useState(false); 
  
  async function getOneItem(selectedId){
    try{
      const item = await itemService.getOneItem(selectedId) 
      setSelectedItem(item)
    } catch(error){
      console.log("failed to get user Item", error )
    }
  } 
    useEffect(() => {
      getOneItem(selectedId);
    }, [selectedId]);

  async function _handleDelete(selectedId) {
    const newItemList = await itemService.deleteItem(selectedId);
    setUserItem(newItemList); 
    navigate("/fridge");
    setSelectedItem({});
  }

  function toggleEdit() {
    setIsEditing(!isEditing); 
  }

  return(
    <>
    {isEditing ? (
      <EditItemForm selectedItem={selectedItem} toggleEdit={toggleEdit}/> 
    ): (
      <div className="m-5 p-10">
      <h3>{selectedItem.name}</h3>
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
          <TableRow>
            <Button onClick={toggleEdit} className="m-5">edit</Button>
              <Button onClick={() => _handleDelete(selectedId)}>DELETE</Button>
          </TableRow>
        </TableBody>
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