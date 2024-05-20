import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, SignUp } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<div>메인페이지</div>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
