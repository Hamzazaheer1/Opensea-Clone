import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/shared/NavigationBar";
import Footer from "./components/shared/Footer/Footer";
import Trending_Top from "./components/shared/Trending_Top/Trending_Top";
import BuyPage from "./components/shared/BuyPage/BuyPage";
import AllNFTs from "./components/shared/AllNFTs/AllNFTs";
import Profile from "./components/shared/Profile/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Trending_Top />} />
        <Route path="/all-nfts" element={<AllNFTs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/buy-page" element={<BuyPage />} />
      </Routes>
      <Footer className="sticky-footer" />
    </div>
  );
}

export default App;
