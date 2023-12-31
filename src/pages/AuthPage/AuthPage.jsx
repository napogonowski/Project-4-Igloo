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
    <main className=" grid grid-cols-1 2xl:grid-cols-6 flex ">
      <div className="row-start-1 2xl:col-start-2 col-span-2 justify-center mt-20 ">
        <h1 className="text-9xl font-extrabold tracking-widest ml-20 text-white mt-20">
          IGLOO
        </h1>
      </div>

      <div className="2xl:col-start-4 cols-span-2 justify-self-center	">
        <Tabs
          defaultValue="logIn"
          className="w-[450px] items-center mt-10 ml-14"
        >
          <TabsList className="grid mx-20 grid-cols-2 mb-5 mr-10">
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
