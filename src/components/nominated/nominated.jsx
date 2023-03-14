import React, { Fragment, useEffect, useState } from "react"
import { Navigation,A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "./nominated.css"
import Film from "../film/Film";
import axios from "axios";

const Nominated = ({breakpoints_data,title, mediaType}) => {
    const key_api = "c2341684ea443882ca84f779ca73278a";
    const [listNominated, setListNominated] = useState([]);
    const [listNominatedFull, setListNominatedFull] = useState([]);

    useEffect(()=>{
        const getListNominatedFull = async() => {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${key_api}`)
            setListNominatedFull(response.data.results)
        }
        getListNominatedFull();
    },[mediaType])
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
                                    mediaType={(item.media_type === "tv")?`TV Shows`:(item.media_type === "movie")?`Movie`:""} 
                                    background={item.backdrop_path} 
                                    filmname={(item.media_type === "tv")?item.name:item.title}
                                    type={item.media_type}
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

export default Nominated