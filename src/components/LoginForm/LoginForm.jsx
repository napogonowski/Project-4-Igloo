import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Card className=" w-full flex flex-col justify-center space-y-6 sm:w-[500px] sm:h-[550px] background-blur bg-white/50  ">
          <CardHeader>
            <CardTitle className="scroll-m-20 text-4xl font-bold tracking-wide lg:text-6xl mb-5">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" items-center gap-4 mb-4 p-2 ">
              <div className="flex flex-col space-y-1.5 ">
                <Label className=" ml-3 text-left scroll-m-20 text-2xl font-semibold tracking-tight">
                  Email:
                </Label>
                <Input
                  className="text-lg "
                  type="text"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mt-5 mb-3 ml-3 text-left scroll-m-20 text-2xl font-semibold tracking-tight">
                  Password:
                </Label>
                <Input
                  className="text-lg"
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </CardContent>
          <Button
            className="w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center mr-2 mb-5"
            type="submit"
          >
            LOG IN
          </Button>
        </Card>
      </form>
    </>
  );
}
