import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import {
  Login,
  SignUp,
  Logout,
  Question,
  QuestionDetail,
  QuestionForm,
} from "./pages";
import GlobalLayout from "./components/GlobalLayout";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalLayout>
        <Routes>
          <Route path="/" element={<Question />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/question/detail/:id" element={<QuestionDetail />} />
          <Route path="/question/create" element={<QuestionForm />} />
        </Routes>
      </GlobalLayout>
    </div>
  );
}

export default App;
