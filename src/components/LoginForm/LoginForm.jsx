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
        <Card className="mx-auto flex w-full flex-col justify-center space-y-6 w-1/3 sm:w-[500px] sm:h-[550px]">
          <CardHeader>
            <CardTitle className="scroll-m-20 text-4xl font-bold tracking-wide lg:text-6xl mb-5">
              Login{" "}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=" items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className=" mb-3 ml-3 text-left scroll-m-20 text-xl font-semibold tracking-tight">
                  Email:
                </Label>
                <Input
                  type="text"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mt-5 mb-3 ml-3 text-left scroll-m-20 text-xl font-semibold tracking-tight">
                  Password:
                </Label>
                <Input
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
            className=" m-5 text-xl tracking-wider font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-4 hover:scale-110 hover:bg-orange-500 duration-300"
            type="submit"
          >
            Log In
          </Button>
        </Card>
      </form>
    </>
  );
}
