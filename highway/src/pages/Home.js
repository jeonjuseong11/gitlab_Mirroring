import React from "react";
import Slider from "../components/Slider/AdSlider";
import AppLayout from "../components/AppLayout";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <AppLayout>
      <Slider />
      <SearchForm />
    </AppLayout>
  );
};

export default Home;
