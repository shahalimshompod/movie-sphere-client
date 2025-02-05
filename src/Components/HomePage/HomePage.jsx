import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import FeaturedMovies from '../FeaturedMoviess/FeaturedMovies';
import MovieCard from '../MovieCard/MovieCard';
import ExtraFirstSection from '../ExtraSections/ExtraFirstSection';
import ExtraSecondSection from '../ExtraSections/ExtraSecondSection';
import JoinMovie from '../ExtraSections/JoinMovie';

const HomePage = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel>
            <FeaturedMovies></FeaturedMovies>
            <ExtraFirstSection></ExtraFirstSection>
            <ExtraSecondSection></ExtraSecondSection>
            <JoinMovie></JoinMovie>
        </div>
    );
};

export default HomePage;