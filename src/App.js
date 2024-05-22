import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import {Login, SignUp, Question, QuestionDetail, QuestionForm} from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Question />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/question/detail" element={<QuestionDetail />} />
        <Route path="/question/create" element={<QuestionForm />} />
      </Routes>
    </div>
  );
}

export default App;
