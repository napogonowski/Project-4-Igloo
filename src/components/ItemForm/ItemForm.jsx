import { parseISO } from "date-fns";
import { DatePicker } from "../ui/date-picker";
import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function ItemForm({ formData, onChange, indexGlobal }) {
  function _handleChange(e) {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  }

  function _handleDateChange(date) {
    onChange({ ...formData, expDate: date.toISOString() });
  }

  function _handleChangeFrozen(value) {
    onChange({ ...formData, fridge: value === "fridge" });
  }

  return (
    <>
      <CardContent>
        <div className=" items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label className=" mb-2 ml-3 text-left scroll-m-20 text-xl font-semibold tracking-tight">
              Name:
            </Label>
            <Input
              className="p-5"
              name="name"
              value={formData.name}
              onChange={(e) => {
                _handleChange(e, indexGlobal);
              }}
              type="text"
            />
          </div>
          <div>
            <div className="flex flex-col space-y-1.5">
              <Label className="mt-3 mb-2 ml-3 text-left scroll-m-20 text-xl font-semibold tracking-tight">
                Quantity
              </Label>
              <Input
                className="p-5"
                name="qty"
                value={formData.qty}
                onChange={(e) => _handleChange(e, indexGlobal)}
                type="number"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label className="mt-3 mb-2 ml-3 text-left scroll-m-20 text-xl font-semibold tracking-tight">
              Expiry Date:{" "}
            </Label>
            <DatePicker
              className="p-5 mb-3"
              date={formData.expDate ? parseISO(formData.expDate) : null}
              onChange={(date) => _handleDateChange(date, indexGlobal)}
            />
          </div>
          <div className="flex flex-col space-y-1.5 mt-5">
            <Select
              value={formData.fridge ? "fridge" : "freezer"}
              onValueChange={(e) => _handleChangeFrozen(e, indexGlobal)}
              className="p-5"
              name="fridge"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Fridge or Freezer" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="fridge">Fridge</SelectItem>
                  <SelectItem value="freezer">Freezer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </>
  );
}
