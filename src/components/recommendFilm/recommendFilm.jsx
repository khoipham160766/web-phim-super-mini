import React, { Fragment, useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import Film from "../film/Film"
import "./recommendFilm.css"
import { Link } from "react-router-dom"
import axios from "axios"

const RecommendFilm = ({title,type,film}) => {
    const key_api = "c2341684ea443882ca84f779ca73278a"
    const [listFilmOne, setListFilmOne] = useState([])
    const [listFilmTwo, setListFilmTwo] = useState([])
    const [listFilmFull, setListFilmFull] = useState([])
    const link = `/${film}`

    useEffect(()=>{
        const getListFilmFull = async() => {
            const response = await axios.get(`https://api.themoviedb.org/3/${film}/${type}?api_key=${key_api}&language=en-US&page=1`)
            setListFilmFull(response.data.results)
        }
        getListFilmFull()
    },[film, type])
    useEffect(()=>{
        setListFilmOne(listFilmFull.slice(1,5))
        setListFilmTwo(listFilmFull.slice(5,9))
    },[listFilmFull])
    console.log(listFilmOne)
    return(
        <Fragment>
            <div className="upcoming-cpn">
                {/* title */}
                <div className="row">
                    <div className="col-xl-10">
                        <h2 className="title-upcoming">{title}</h2>
                    </div>
                    <div className="col-xl-2">
                        <div className="more-film">
                            <Link to={link}>
                                <span>
                                    Xem Tất Cả
                                    <FontAwesomeIcon icon={faCaretRight}/>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className="row">
                    <div className="col-xl-6 col-md-12 first-film-upcoming">
                        {
                            (listFilmFull.length)?
                                <Film 
                                    mediaType={(film === "tv")?"TV Shows":"Movie"} 
                                    background={listFilmFull[0].backdrop_path} 
                                    filmname={(film === "tv")?`${listFilmFull[0].name}`:`${listFilmFull[0].title}`}
                                    type={film}
                                    id={listFilmFull[0].id}
                                />
                            :""
                        }
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="row">
                            {
                                (listFilmOne.length)?
                                listFilmOne.map((item, index)=>(
                                    <div className="col-xl-6 col-md-6" key={index}>
                                         <Film 
                                            mediaType={(film === "tv")?"TV Shows":"Movie"} 
                                            background={item.backdrop_path} 
                                            filmname={(film === "tv")?`${item.name}`:`${item.title}`}
                                            type={film}
                                            id={item.id}
                                        />
                                    </div>
                                ))
                                :"Không có phim"
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        (listFilmTwo.length)?
                        listFilmTwo.map((item, index)=>(
                            <div className="col-xl-3 col-md-6" key={index}>
                                    <Film 
                                    mediaType={(film === "tv")?"TV Shows":"Movie"} 
                                    background={item.backdrop_path} 
                                    filmname={(film === "tv")?`${item.name}`:`${item.title}`}
                                    type={film}
                                    id={item.id}
                                />
                            </div>
                        ))
                        :"Không có phim"
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default RecommendFilm