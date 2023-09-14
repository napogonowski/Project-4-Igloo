import * as userService from "../../utilities/users-service";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Refrigerator, ArrowLeft } from "lucide-react";
export default function ShoppingSideBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <div className="background-blur bg-white/50 rounded-3xl p-10 m-5">
      <div className="space-y-4 py-4  ">
        <div className="px-3 py-2  ">
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-widest lg:text-5xl mb-10">
            IGLOO
          </h2>
          <h2 className="mb-10 px-4 text-2xl tracking-wide ">Shopping List</h2>
          <div className="space-y-1">
            <h2 className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0">
              Welcome {user.name}
            </h2>
          </div>
        </div>
        <div className="px-3 py-2 grid grid-cols-5 grid-rows-3">
          <div className="col-start-2 col-span-3">
            <div className="row-start-2">
              <h2 className="mb-10 px-4 text-2xl font-semibold tracking-tight ">
                Actions
              </h2>
            </div>
            <div className="space-y-1 ">
              <Link to="/fridge">
                <Button className="w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center mr-2 mb-5">
                  <Refrigerator />
                  &nbsp; Home
                </Button>
              </Link>
              <Button
                onClick={handleLogOut}
                className="w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center mr-2 mb-5"
              >
                <ArrowLeft /> &nbsp; Log out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
