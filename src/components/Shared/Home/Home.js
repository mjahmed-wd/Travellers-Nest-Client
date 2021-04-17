import React from 'react';
import Header from '../Header/Header';
import PropertyShowcase from './PropertyShowcase/PropertyShowcase';
import ReviewContainer from './Review/ReviewContainer/ReviewContainer';
import Introduction from './Introduction/Introduction';
import Example from './SliderExample';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Header/>
            <Introduction/>
            <PropertyShowcase/>
            <h2>Header</h2>
            <ReviewContainer/>
            {/* <Example/> */}
            <Footer/>
        </>
    );
};

export default Home;