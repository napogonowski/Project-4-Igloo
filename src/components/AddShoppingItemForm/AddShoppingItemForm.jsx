import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function AddShoppingItemForm({
  formData,
  _handleChange,
  _handleSubmit,
}) {
  return (
    <>
      <form autoComplete="off" onSubmit={_handleSubmit}>
        <Card className=" border-4 bg-white/50 rounded-3xl p-5 m-5 lg:w-[500px] w-[350px]">
          <CardHeader>
            <CardTitle className="scroll-m-20 text-4xl font-semibold tracking-wide transition-colors first:mt-0">
              New Item
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" items-center ">
              <div className="flex flex-col">
                <Label className="text-xl text-left font-black font-medium m-3 ">
                  Name:
                </Label>
                <Input
                  className="text-lg font-black font-medium p-5"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={_handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <Label className="text-xl text-left font-black font-medium m-3 ">
                  Quantity:
                </Label>
                <Input
                  className="text-lg font-black font-medium p-5"
                  type="Number"
                  name="qty"
                  value={formData.qty}
                  onChange={_handleChange}
                />
              </div>
            </div>
          </CardContent>
          <Button
            className="w-1/2 text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center m-3"
            type="submit"
          >
            Add Item
          </Button>
        </Card>
      </form>
    </>
  );
}
