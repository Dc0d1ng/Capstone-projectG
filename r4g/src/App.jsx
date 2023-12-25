import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/choose" />
          <Route path="/choose/selected" />
          <Route path="/user/add-fav" />
          <Route path="/user/remove-fav" />
          <Route
            path="*"
            // element={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
