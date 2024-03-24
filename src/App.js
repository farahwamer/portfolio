import { React, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Animation from "./pages/Animation/Animation";
import "./App.css";
import Projects from "./pages/projects/Projects";

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="App">
      <Navbar page={page} setPage={setPage} />
      {page === "Home" ? <Home /> : null}
      {page === "Projects" ? <Projects /> : null}
      <Animation />
    </div>
  );
}

export default App;
