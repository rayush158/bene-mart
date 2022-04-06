import React from "react";
import {
  Header,
  NavbarItem,
  HeroSection,
  Categories,
  Products,
  Footer,
} from "../../Components";

const Home = () => {
  return (
    <div>
      <Header />
      <NavbarItem />
      <HeroSection />
      <Products />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
