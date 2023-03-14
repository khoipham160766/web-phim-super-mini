import React, { Fragment } from "react";
import Nominated from "../nominated/nominated";
import RecommendFilm from "../recommendFilm/recommendFilm";

const Home = () => {
    const config_screen_swiper = {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
    }
    return(
        <Fragment>
            <Nominated breakpoints_data={config_screen_swiper} title="Phim đề cử" mediaType="all"/>
            <RecommendFilm title="PHIM LẺ PHỔ BIẾN" type="top_rated" film="movie"/>
            <RecommendFilm title="PHIM BỘ PHỔ BIẾN" type="popular" film="tv"/>
            <RecommendFilm title="PHIM LẺ SẮP CHIẾU" type="upcoming" film="movie"/>
        </Fragment>
    )
}

export default Home