import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Choose from "./Pages/Choose/Choose";
import Cards from "./Pages/Cards/Cards";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/choose/selected" element={<Cards />} />
          <Route path="/user/add-fav" />
          <Route path="/user/remove-fav" />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
