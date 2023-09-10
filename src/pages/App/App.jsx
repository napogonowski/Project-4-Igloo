import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Fridge from '../Fridge/Fridge';
import AddItemPage from '../AddItemPage/AddItemPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/fridge" element={<Fridge user={user} />} />
              <Route path='/fridge/new' element={<AddItemPage  user={user}/>} />
              <Route path="/*" element={<Navigate to="/fridge" />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
