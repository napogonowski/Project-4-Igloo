import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import Fridge from "../Fridge/Fridge";
import AddItemPage from "../AddItemPage/AddItemPage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <Routes>
            {/* Route components in here */}
            <Route path="/fridge" element={<Fridge user={user} setUser={setUser} />} />
            <Route path="/fridge/new" element={<AddItemPage user={user} />} />
            <Route path="/*" element={<Navigate to="/fridge" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
