import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Header from "./components/Header";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Choose from "./Pages/Choose/Choose";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/choose/selected" />
          <Route path="/user/add-fav" />
          <Route path="/user/remove-fav" />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
