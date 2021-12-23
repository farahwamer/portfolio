import { React, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="App">
      <Navbar page={page} setPage={setPage} />
      <Home />
    </div>
  );
}

export default App;
