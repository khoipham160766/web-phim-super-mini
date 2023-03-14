import React, { Fragment, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faXmark } from "@fortawesome/free-solid-svg-icons"
import Nominated from "../nominated/nominated"
import SimilarFilm from "../nominated/similarFilm"
import ListActor from "../listActor/listActor"
import "./detailFilm.css"
import axios from "axios"
import { useParams } from "react-router-dom"
import YoutubeTrailer from "../youtube/youtubeTrailer"

const DetailFilm = ({type}) => {
    const key_api = "c2341684ea443882ca84f779ca73278a"
    const link_backdrop_path = "https://image.tmdb.org/t/p/w500"
    const {id} = useParams()
    const [detail, setDetail] = useState([])
    const [sorry, setSorry] = useState(false)
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
    
    const handleWatchFilm = () => {
        setSorry(!sorry)
    }

    useEffect(()=>{
        const getDetail = async() =>{
            const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${key_api}&language=vi`)
            setDetail(response.data)
        }
        getDetail()
    },[type,id])
    return(
        <Fragment>
            <div className="detail-film-cpn">
                {
                    (sorry)?
                    <div className="sorry">
                        <div className="sorry-exit">
                            <FontAwesomeIcon icon={faXmark} onClick={handleWatchFilm}/>
                        </div>
                        <div className="content-sorry">
                            <span>MÌNH RẤT TIẾC VÌ CHỈ XEM ĐƯỢC TRAILER THÔI Ạ</span>
                            <img src="../../images/sorry.png" alt=""/>
                        </div>
                    </div>
                    :null
                }
                <div className="header-detail-film">
                    <img src={(detail.backdrop_path?`${link_backdrop_path}${detail.backdrop_path}`:"")} alt="" className="background-film"/>
                    <div className="poster-film row">
                        <div className="col-4 col-sm-3 col-md-2 col-xl-3 col-xxl-2">
                            <img src={(detail.poster_path?`${link_backdrop_path}${detail.poster_path}`:"")} alt=""/>
                        </div>
                        <div className="action-film col-8 col-sm-9 col-md-10 col-xl-9 col-xxl-10">
                            <h4>{(detail.id)?((type === "tv")?detail.name:detail.original_title):""}</h4>
                            <button className="watching" onClick={handleWatchFilm}>
                                <FontAwesomeIcon icon={faPlay}/>
                                Xem phim
                            </button>
                        </div>
                    </div>
                </div>
                <div className="trailer-youtube">
                    <label>TRAILER</label>
                    <YoutubeTrailer key_api={key_api} id={id} type={type}/>
                </div>
                <div className="information-film">
                    <div className="info">
                        <ul>
                            <li>
                                <label>Đang phát:</label>
                                <span className="red"> HD Vietsub</span>
                            </li>
                            <li>
                                <label>Ngày khởi chiếu:</label>
                                <span> 
                                    {
                                        (detail.id)?
                                            ((type==="tv")?
                                            ` ${detail.first_air_date}`:
                                            ` ${detail.release_date}`)
                                        :""
                                    }
                                </span>
                            </li>
                            <li>
                                <label>Thời lượng:</label>
                                <span> 
                                    {
                                        (detail.id)?
                                            ((type==="tv")?
                                            ` ${detail.episode_run_time[0]} phút/tập`:
                                            ` ${detail.runtime} phút`)
                                        :""
                                    }
                                </span>
                            </li>
                            <li>
                                <label>Thể loại:</label>
                                <span> 
                                    {
                                        (detail.id)?
                                            detail.genres.map((item, index)=>(
                                                <span className="list-info" key={index}> {item.name}</span>
                                            ))
                                        :""
                                    }
                                </span>
                            </li>
                            <li>
                                <label>Quốc gia sản xuất:</label>
                                <span>
                                    {
                                        (detail.id)?
                                        detail.production_countries.map((item, index)=>(
                                            <span className="list-info" key={index}> {item.name}</span>
                                        ))
                                        :""
                                    }
                                </span>
                            </li>
                            <li>
                                <label>Công ty sản xuất:</label>
                                <span>
                                    {
                                        (detail.id)?
                                        detail.production_companies.map((item, index)=>(
                                            <span className="list-info" key={index}> {item.name}</span>
                                        ))
                                        :""
                                    }
                                </span>
                            </li>
                            <li>
                                <label>Điểm trung bình:</label>
                                <span>
                                    {
                                        (detail.id)?
                                        ` ${(detail.vote_average).toFixed(1)}/10`
                                        :""
                                    }
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="content-film">
                        <span>Nội dung phim</span>
                        <p>
                            {
                                (detail.id)?
                                ` ${detail.overview}`
                                :""
                            }
                        </p>
                    </div>
                    <div className="content-film actor">
                        <ListActor id={id} type={type}/>
                    </div>
                </div>
                 <Nominated breakpoints_data={config_screen_swiper} title="Phim đề cử" mediaType={type}/> 
                 <SimilarFilm breakpoints_data={config_screen_swiper} title="Phim cùng loại" mediaType={type} id={id}/> 
            </div>
        </Fragment>
    )
}

export default DetailFilm