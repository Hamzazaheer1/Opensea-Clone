import * as React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/shared/NavigationBar";
import Footer from "./components/shared/Footer/Footer";
import Trending_Top from "./components/shared/Trending_Top/Trending_Top";
import BuyPage from "./components/shared/BuyPage/BuyPage";
import AllNFTs from "./components/shared/AllNFTs/AllNFTs";
import Profile from "./components/shared/Profile/Profile";
import CreateCatelog from "./components/shared/CreateCatelog/CreateCatelog";
import Ranking from "./components/shared/Ranking/Ranking";
import "./App.css";
import Activity from "./components/shared/Activity/Activity";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Trending_Top />} />
        <Route path="/all-nfts" element={<AllNFTs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/buy-page" element={<BuyPage />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/create-catelog" element={<CreateCatelog />} />
      </Routes>
      <Footer className="sticky-footer" />
    </div>
  );
}

export default App;
