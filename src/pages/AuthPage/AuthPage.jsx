import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className=" flex items-center flex-col mt-10">
      <div className=" align-center">
        <Tabs defaultValue="logIn" className="w-[500px] items-center">
          <TabsList className="grid  grid-cols-2 mb-10">
            <TabsTrigger value="logIn">Log In</TabsTrigger>
            <TabsTrigger value="signUp">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="logIn">
            <LoginForm setUser={setUser} />
          </TabsContent>
          <TabsContent value="signUp">
            <SignUpForm setUser={setUser} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
