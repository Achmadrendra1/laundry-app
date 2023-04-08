
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Users from "../pages/master/users";
import Barang from "../pages/master/barang";
import Layanan from "../pages/master/layanan";
import Bayar from "../pages/master/bayar";
import Login from "../pages/login";
import Kasir from "../pages/kasir";
import Pelanggan from "../pages/pelanggan";
import Pembayaran from "../pages/pembayaran";
import Transaksi from "../pages/transaksi";
import EmptyPage from "../pages/404";

export default function IndexRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/kasir" element={<Kasir />} />
                    <Route path="/pelanggan" element={<Pelanggan />} />
                    <Route path="/pembayaran" element={<Pembayaran />} />
                    <Route path="/transaksi" element={<Transaksi />} />


                    <Route path="/users" element={<Users />} />
                    <Route path="/jenisbarang" element={<Barang />} />
                    <Route path="/layanan" element={<Layanan />} />
                    <Route path="/jenisbayar" element={<Bayar />} />

                    <Route path="*" element={<EmptyPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}