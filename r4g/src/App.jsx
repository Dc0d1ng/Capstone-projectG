import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/add-fav" />
          <Route path="/remove-fav" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
