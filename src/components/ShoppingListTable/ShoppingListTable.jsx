import * as shoppingService from "../../utilities/shopping-service";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Hash, Trash2, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
export default function ShoppingListTable({ shoppingItems, setShoppingItems }) {
  async function _handleDelete(selectedId) {
    console.log("page function", selectedId);
    const newItemList = await shoppingService.deleteItem(selectedId);
    setShoppingItems(newItemList);
  }

  return (
    <>
      <div className="background-blur bg-white/50 p-10  text-left">
        <Table>
          <TableHeader className="">
            <TableRow className="bg-cyan-500 text-white rounded-3xl">
              <TableHead className="text-white text-base tracking-wide ">
                <Hash />
              </TableHead>
              <TableHead className="text-white text-base tracking-wide">
                Name
              </TableHead>
              <TableHead className="text-white text-base tracking-wide ">
                Quantity
              </TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shoppingItems.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell className="text-base font-bold">
                  {index + 1}
                </TableCell>
                <TableCell className="text-base font-bold">
                  {item.name}
                </TableCell>
                <TableCell className="text-base font-semibold">
                  {item.qty}
                </TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center mr-2 mb-5">
                        <MoreHorizontal />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-50 item-center">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <h4 className="text-lg font-bold m-2 underline leading-none">
                            Actions
                          </h4>
                        </div>
                        <div className="grid gap-2">
                          <div className="grid grid-cols-1 items-center gap-4">
                            <Link to={`?selectedId=${item._id}`}>
                              <Button className="w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center mr-2 mb-5">
                                EDIT
                              </Button>
                            </Link>
                          </div>
                          <div className="grid grid-cols-1 items-center gap-4">
                            <Button
                              onClick={() => _handleDelete(item._id)}
                              className="w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center mr-2 mb-5"
                            >
                              <Trash2 />
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
