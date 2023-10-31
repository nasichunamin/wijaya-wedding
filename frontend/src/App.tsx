import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Product from "./pages/Product";
import History from "./pages/Transaksi/History";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Profile from "./pages/Auth/Profile";
import CreateTransaksi from "./pages/Transaksi/CreateTransaksi";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster position="top-center" reverseOrder={true} />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/Kontak" element={<Contact />} />
                <Route path="/Paket" element={<Product />} />
                <Route path="/Riwayat-Transaksi" element={<History />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Pesan/:idPaket" element={<CreateTransaksi />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       <h1 className="text-3xl font-bold underline bg-red-100">Hello world!</h1>
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
