import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

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


export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
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
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>

    <Card className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]" >
  <CardHeader>
    <CardTitle>Login </CardTitle>
    <CardDescription>Enter your log in details below</CardDescription>
  </CardHeader>
  <CardContent>
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label>Email</Label>
          <Input type="text" name="email" value={credentials.email} onChange={handleChange} required placeholder="example@email.com" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label>Password</Label>
          <Input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Clear</Button>
    <Button type="submit">Log In</Button>
  </CardFooter>
</Card>

    </>
    
  );


  
}

