import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import { Navbar } from "./components/navbar/Navbar";
import RequestManhwa from "./pages/request-manhwa/RequestManhwa";
import "./App.css";
import ManhwaDetails from "./pages/manhwa-details/ManhwaDetails";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";

function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        const token = sessionStorage.getItem("token");

        if (token) {
            setIsLoggedIn(true);
        }
        console.log(isLoggedIn);
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar></Navbar>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/requestmanhwa" element={<RequestManhwa />} />
                    <Route path="/manhwa/:id" element={<ManhwaDetails />} />
                    {!isLoggedIn ? (
                        <Route path="/signup" element={<SignUp />} />
                    ) : (
                        ""
                    )}
                    {!isLoggedIn ? (
                        <Route path="/login" element={<Login />} />
                    ) : (
                        ""
                    )}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
