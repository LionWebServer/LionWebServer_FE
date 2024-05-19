import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, SignUp } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>메인페이지</div>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
