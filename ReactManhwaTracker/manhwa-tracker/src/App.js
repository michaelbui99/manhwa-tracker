import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
