import React, { Fragment, useEffect, useState } from "react"
import { Navigation,A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "./nominated.css"
import Film from "../film/Film";
import axios from "axios";

const SimilarFilm = ({breakpoints_data,title, mediaType,id}) => {
    const key_api = "c2341684ea443882ca84f779ca73278a";
    const [listNominated, setListNominated] = useState([]);
    const [listNominatedFull, setListNominatedFull] = useState([]);

    useEffect(()=>{
        const getListNominatedFull = async() => {
            const response = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=${key_api}&language=en-US&page=1
            `)
            setListNominatedFull(response.data.results)
        }
        getListNominatedFull();
    },[mediaType,id])
    useEffect(()=>{
        setListNominated(listNominatedFull.slice(0,10))
    },[listNominatedFull])
    return(
        <Fragment>
            <div className="nominated-cpn">
                <h2 className="title-nominated">{title}</h2>
                <Swiper
                    modules={[Navigation, A11y, Autoplay]}
                    breakpoints={breakpoints_data}
                    autoplay={true}
                    navigation
                >
                    {
                        (listNominated.length)?
                        listNominated.map((item, index)=>(
                            <SwiperSlide key={index}>
                                <Film 
                                    mediaType={(mediaType === "tv")?`TV Shows`:(mediaType === "movie")?`Movie`:""} 
                                    background={item.backdrop_path} 
                                    filmname={(mediaType === "tv")?item.name:item.title}
                                    type={mediaType}
                                    id={item.id}
                                />
                            </SwiperSlide>
                        ))
                        : "Khum bít"
                    }
                </Swiper>
            </div>
        </Fragment>
    )
}

export default SimilarFilm