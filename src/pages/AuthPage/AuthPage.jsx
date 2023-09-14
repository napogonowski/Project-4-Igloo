import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export default function AuthPage({ setUser }) {
  return (
    <main className=" grid grid-cols-6 grid-rows-2 flex ">
      <div className="col-start-2 cols-span-2 content-center mt-20 ">
        <h1 className="scroll-m-20 text-9xl font-extrabold tracking-widest text-white mt-20">
          IGLOO
        </h1>
      </div>

      <div className=" col-start-4 cols-span-2 align-center">
        <Tabs
          defaultValue="logIn"
          className="w-[450px] items-center mt-10 ml-14"
        >
          <TabsList className="grid  mx-20 grid-cols-2 mb-5 mr-10">
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
