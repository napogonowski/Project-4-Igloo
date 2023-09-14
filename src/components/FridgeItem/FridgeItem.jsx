import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function FridgeItems({ userItems, goingToExpire }) {
  return (
    <>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {userItems.map((item) => (
          <Card
            key={item._id}
            className=" rounded-3xl background-blur bg-white/50  border-8 border-cyan-400"
          >
            <CardHeader>
              <CardTitle className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-base font-bold">Quantity: </span>
                <span className="text-xl">{item.qty}</span>
              </p>
              <div
                className=" rounded-3xl "
                style={{
                  backgroundColor:
                    goingToExpire(item.expDate) > 3
                      ? "rgba(90, 222, 15, 0.8)"
                      : goingToExpire(item.expDate) > 0
                      ? "rgba(255, 195, 0, 0.81)"
                      : "rgba(255, 0, 0, 0.81)",
                }}
              >
                <p className="text-xl">
                  {new Date(item.expDate).toDateString()}
                </p>
              </div>
            </CardContent>
            <Button className="w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center mr-2 mb-5">
              <Link to={`?selectedId=${item._id}`}>View Details</Link>
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}
