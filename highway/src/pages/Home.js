import React from "react";
import Slider from "../components/Slider/AdSlider";
import AppLayout from "../components/AppLayout";
import SearchForm from "../components/SearchForm";
import CardList from "../components/Card/CardList";

const Home = () => {
  return (
    <AppLayout>
      <Slider />
      <SearchForm />
      <CardList />
    </AppLayout>
  );
};

export default Home;
