import React from "react";
import Slider from "../components/Slider/AdSlider";
import AppLayout from "../components/AppLayout";
import SearchForm from "../components/SearchForm";
import DepartmentList from "../components/DepartmentList";

const Home = () => {
  return (
    <AppLayout>
      <Slider />
      <SearchForm />
      <DepartmentList />
    </AppLayout>
  );
};

export default Home;
