import './App.css';
import { Provider } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Register from './Components/Register';
import store from './Redux/store';
import Login from './Components/Login';
import { ToastContainer } from 'react-toastify';
import { createContext, useState } from 'react';
import Details from './Components/Details';

import Navigation from './Components/Navigation';

export const contxt = createContext()
function App() {

  const [valid, setValid] = useState(false)
  const [user, setUser] = useState()


  return (
    <div>
      <ToastContainer />
      <Provider store={store}>
        <Navigation user={user} valid={valid} setValid={setValid} />
        <Routes>
          <Route path="/login" element={<Login setValid={setValid} setUser={setUser} />} />
          <Route path="/" element={<Register />} />
          <Route path="/details" element={<ProtectedRoute valid={valid}><Details user={user} /></ProtectedRoute>} />
          <Route path="*" element={<Register />} />
        </Routes>
      </Provider>
    </div>
  );
}

function ProtectedRoute({ children, valid }) {
  if (!valid) {
    return <Navigate replace to="/login" />
  } else {
    return children
  }
}

export default App;
