import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import { Navbar } from "./components/navbar/Navbar";
import RequestManhwa from "./pages/request-manhwa/RequestManhwa";
import "./App.css";
import ManhwaDetails from "./pages/manhwa-details/ManhwaDetails";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import CreateList from "./pages/create-list/CreateList";
import AddListEntry from "./pages/add-list-entry/AddListEntry";

function App() {
    const user = useSelector((state) => state.user.value);

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/requestmanhwa" element={<RequestManhwa />} />
                    <Route path="/manhwa/:id" element={<ManhwaDetails />} />
                    <Route path="/createlist" element={<CreateList />} />
                    <Route path="/addlistentry" element={<AddListEntry />} />
                    {!user.isLoggedIn ? (
                        <Route path="/signup" element={<SignUp />} />
                    ) : (
                        ""
                    )}
                    {!user.isLoggedIn ? (
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
