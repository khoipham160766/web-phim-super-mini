import React, { Fragment, useEffect, useState } from "react"
import { Navigation,A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "./listActor.css"
import axios from "axios";
import ActorCard from "./actorCard";

const ListActor = ({id,type}) => {
    const config_screen_swiper = {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
    }
    const key_api = "c2341684ea443882ca84f779ca73278a";
    const [listActor, setListActor] = useState([])

    useEffect(()=>{
        const getListActor = async() =>{
            const response = await axios.get(`http://api.themoviedb.org/3/${type}/${id}/credits?api_key=${key_api}`,{
                param:{
                    _limit: 20
                }
            })
            setListActor(response.data.cast)
        }
        getListActor()
    },[id,type])
    return(
        <Fragment>
            <div className="list-actor-cpn">
                <h2 className="title-list-actor">Diễn viên</h2>
                <Swiper
                    modules={[Navigation, A11y, Autoplay]}
                    breakpoints={config_screen_swiper}
                    navigation
                >
                    {
                        (listActor.length)?
                        listActor.map((item,index)=>(
                            <SwiperSlide key={index}>
                                <ActorCard 
                                    profile_path={item.profile_path}
                                    name={item.name}
                                    character={item.character}
                                />
                            </SwiperSlide>
                        ))
                        :"Không có diễn viên"
                    }
                </Swiper>
            </div>
        </Fragment>
    )
}

export default ListActor