import React from "react";
import Header from "../Header/Header";
import PropertyShowcase from "./PropertyShowcase/PropertyShowcase";
import ReviewContainer from "./Review/ReviewContainer/ReviewContainer";
import Introduction from "./Introduction/Introduction";
import Footer from "../Footer/Footer";
import BlogSection from "./BlogSection/BlogSection";
import Email from "./Email/Email";
import Title from "./Title/Title";

const Home = () => {
  return (
    <>
      <Header />

      <Introduction />

      <div className="light-bg-color">
        <Title secondaryWord="Our" titleWord="Services" />
        <PropertyShowcase />
      </div>

      <Title secondaryWord="Happy" titleWord="Customers" />
      <ReviewContainer />

      <div className="light-bg-color">
        <Title secondaryWord="Our" titleWord="Blogs" />
        <BlogSection />
      </div>

      <Title secondaryWord="submit" titleWord="query" />
      <Email />

      <Footer />
    </>
  );
};

export default Home;
