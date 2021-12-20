import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import { Navbar } from "./components/navbar/Navbar";
import RequestManhwa from "./pages/request-manhwa/RequestManhwa";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/requestmanhwa" element={<RequestManhwa />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
