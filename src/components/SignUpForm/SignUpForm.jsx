import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
        <form className="" autoComplete="off" onSubmit={this.handleSubmit}>
          <Card className=" w-[500px] flex flex-col justify-center space-y-6 background-blur bg-white/50">
            <CardHeader>
              <CardTitle className="text-4xl font-bold tracking-wide lg:text-6xl">
                Sign Up
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="">
                <div className="flex flex-col space-y-1.5">
                  <Label className=" mb-3 ml-3 text-left  text-lg font-semibold tracking-tight">
                    Name
                  </Label>
                  <Input
                    className="text-lg"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2.5">
                  <Label className="mt-5 mb-3 ml-3 text-left scroll-m-20 text-lg font-semibold tracking-tight">
                    Email
                  </Label>
                  <Input
                    className="text-lg"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label className="mt-5 mb-3 ml-3 text-left scroll-m-20 text-lg font-semibold tracking-tight">
                    Password
                  </Label>
                  <Input
                    className="text-lg"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label className="mt-5 mb-3 ml-3 text-left scroll-m-20 text-lg font-semibold tracking-tight">
                    Confirm
                  </Label>
                  <Input
                    className="text-lg"
                    type="password"
                    name="confirm"
                    value={this.state.confirm}
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
            </CardContent>
            <Button
              className="w-full text-white text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-center mr-2"
              type="submit"
              disabled={disable}
            >
              SIGN UP
            </Button>
          </Card>
        </form>
      </>
    );
  }
}
