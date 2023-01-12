import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
      </Routes>
    </>
  );
}

export default App;
