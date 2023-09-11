import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"


export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
      <Card className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]" >
        <CardHeader>
          <CardTitle>Login </CardTitle>
          <CardDescription>Enter your log in details below</CardDescription>
        </CardHeader>
        <CardContent>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label>Name</Label>
                <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} required  />
              </div>
              <div className="flex flex-col space-y-2.5">
                <Label>Email</Label>
                <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} required  />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Password</Label>
                <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Confirm</Label>
                <Input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* <Button variant="outline">Clear</Button> */}
          <Button type="submit" disabled={disable}>SIGN UP</Button>
        </CardFooter>
      </Card> 
      </>
    );
  }
}
