import * as shoppingService from "../../utilities/shopping-service";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
export default function ShoppingListTable({
  shoppingItems,
  setShoppingItems,
  // toggleEdit,
  // selectedId,
}) {
  const navigate = useNavigate();

  async function _handleDelete(selectedId) {
    console.log("page function", selectedId);
    const newItemList = await shoppingService.deleteItem(selectedId);
    setShoppingItems(newItemList);
  }
  // function _handleLink(item){
  //   navigate(`/shoppinglist?{item}`)
  //   toggleEdit();
  // }

  return (
    <>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item Number</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shoppingItems.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.qty}</TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">...</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-50">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <h4 className="font-medium leading-none">Actions</h4>
                        </div>
                        <div className="grid gap-2">
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Link to={`?selectedId=${item._id}`}>
                              <Button>EDIT</Button>
                            </Link>
                          </div>
                          <div className="grid grid-cols-3 items-center gap-4">
                            <Button onClick={() => _handleDelete(item._id)}>
                              X
                            </Button>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
