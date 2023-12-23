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
          <Route path="/add-fav" />
          <Route path="/remove-fav" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
