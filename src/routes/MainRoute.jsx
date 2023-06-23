import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Reviews from "../pages/Reviews";
import Contacts from "../pages/Contacts";
import AddListing from "../pages/AddListing";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout/MainLayout";

const MainRoute = () => {
  return (
    <div>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/add-listing" element={<AddListing />} />
          <Route component={<NotFound />} />
        </Routes>
      </MainLayout>
    </div>
  );
};

export default MainRoute;
