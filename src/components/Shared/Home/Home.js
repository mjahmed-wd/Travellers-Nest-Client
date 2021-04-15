import React from 'react';
import Header from '../Header/Header';
import PropertyShowcase from './PropertyShowcase/PropertyShowcase';
import ReviewContainer from './Review/ReviewContainer/ReviewContainer';
import Search from './Search/Search';

const Home = () => {
    return (
        <>
            <Header/>
            <Search/>
            <PropertyShowcase/>
            <h2>Header</h2>
            <ReviewContainer/>
        </>
    );
};

export default Home;