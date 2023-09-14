import * as userService from "../../utilities/users-service";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
export default function SideBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <div className="background-blur bg-white/50 rounded-3xl p-10 m-5">
      <div className="space-y-4 py-4 ">
        <div className="px-3 py-2 ">
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10">
            IGLOO
          </h2>
          <div className="space-y-1">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Welcome {user.name}
            </h2>
          </div>
        </div>
        <div className="px-3 py-2 grid grid-cols-3">
          <div className="col-start-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Actions
            </h2>
            <div className="space-y-1">
              <Link to="/fridge/new">
                <Button className="w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center mr-2 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  Add Item
                </Button>
              </Link>
            </div>
            <Link to="/shoppinglist">
              {/* <Button className="w-full justify-start"> */}
              <Button className="w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center mr-2 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="m16 6 4 14" />
                  <path d="M12 6v14" />
                  <path d="M8 8v12" />
                  <path d="M4 4v16" />
                </svg>
                Shopping List
              </Button>
            </Link>
            <Button
              onClick={handleLogOut}
              variant="ghost"
              className="w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center mr-2 mb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m16 6 4 14" />
                <path d="M12 6v14" />
                <path d="M8 8v12" />
                <path d="M4 4v16" />
              </svg>
              Log out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
