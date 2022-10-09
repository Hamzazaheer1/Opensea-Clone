import React, { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/shared/NavigationBar";
import Footer from "./components/shared/Footer/Footer";
import TrendingTop from "./components/shared/Trending_Top/Trending_Top";
import BuyPage from "./components/shared/BuyPage/BuyPage";
import AllNFTs from "./components/shared/AllNFTs/AllNFTs";
import Profile from "./components/shared/Profile/Profile";
import CreateCatelog from "./components/shared/CreateCatelog/CreateCatelog";
import Ranking from "./components/shared/Ranking/Ranking";
import Activity from "./components/shared/Activity/Activity";
import ConntectWallet from "./components/shared/ConnectWallet/ConntectWallet";
import Settings from "./components/shared/Settings/Settings";
import { AuthContext } from "./components/Utils/context/auth-context";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<TrendingTop />} />
        <Route path="/all-nfts" element={<AllNFTs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/buy-page/:id" element={<BuyPage />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/create-catelog" element={<CreateCatelog />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<ConntectWallet />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" element={<TrendingTop />} />
        <Route path="/all-nfts" element={<AllNFTs />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/*" element={<ConntectWallet />} />
      </React.Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
      }}
    >
      <div className="App">
        <NavigationBar />
        <Routes>{routes}</Routes>
        <Footer className="sticky-footer" />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
