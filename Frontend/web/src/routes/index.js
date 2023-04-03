
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Users from "../pages/users";
import Paket from "../pages/paket";

export default function IndexRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/paket" element={<Paket />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}