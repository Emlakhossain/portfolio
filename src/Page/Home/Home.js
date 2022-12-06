import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Features from '../Features/Features';
import MyPortfolio from '../Portfolio/MyPortfolio';
import Resume from '../Resume/Resume';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Features></Features>
            <MyPortfolio></MyPortfolio>
            <Resume></Resume>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;