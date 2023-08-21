import './App.css'
import Wrapper from "./components/Wrapper.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
function App() {

  return (
    <>
      <Wrapper>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/register'} element={<Register />} />
            </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  )
}

export default App
