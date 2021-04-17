import React from "react";
import Header from "../Header/Header";
import PropertyShowcase from "./PropertyShowcase/PropertyShowcase";
import ReviewContainer from "./Review/ReviewContainer/ReviewContainer";
import Introduction from "./Introduction/Introduction";
import Example from "./SliderExample";
import Footer from "../Footer/Footer";
import BlogSection from "./BlogSection/BlogSection";
import Email from "./Email/Email";
import Title from "./Title/Title";

const Home = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Title secondaryWord="Our" titleWord="Hotels" />
      <PropertyShowcase />
      <Title secondaryWord="Happy" titleWord="Customers" />
      <ReviewContainer />
      {/* <Example/> */}
      <Title secondaryWord="Know more from our" titleWord="Blogs" />
      <BlogSection />
      <Title secondaryWord="submit" titleWord="query" />
      <Email />
      <Footer />
    </>
  );
};

export default Home;
