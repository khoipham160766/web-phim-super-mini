import React, { Fragment, useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import axios from "axios"

const NavMenuMB = ({btnMenu,handleBtnMenu}) => {
    const key_api = "c2341684ea443882ca84f779ca73278a";
    const [subMenuCountry, setSubMenuCountry] = useState(false)
    const [subMenuMovie, setSubMenuMovie] = useState(false)
    const [subMenuTv, setSubMenuTv] = useState(false)
    const [listGenreMovie, setListGenreMovie] = useState([])
    const [listGenreTv, setListGenreTv] = useState([])

    const handleSubMenuCountry = () =>{
        setSubMenuCountry(!subMenuCountry)
    }
    const handleSubMenuMovie = () =>{
        setSubMenuMovie(!subMenuMovie)
    }
    const handleSubMenuTv = () =>{
        setSubMenuTv(!subMenuTv)
    }

    useEffect(()=>{
        const getListGenreMovie = async() =>{
            const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key_api}&language=vi`)
            setListGenreMovie(response.data.genres)
        }
        const getListGenreTV = async() =>{
            const response = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${key_api}&language=vi`)
            setListGenreTv(response.data.genres)
        }
        getListGenreMovie();
        getListGenreTV();
    },[])
    return(
        <Fragment>
            <div className={"nav-menu nav-menu-mb " + (btnMenu?'on-nav-menu':'')}>
                <ul>
                    <li onClick={handleBtnMenu}>
                        <Link to="/home">TRANG CHỦ</Link>
                    </li>
                    <li>
                        <Link to="/movie" onClick={handleBtnMenu}>PHIM LẺ</Link>
                        <FontAwesomeIcon icon={faAngleDown} onClick={handleSubMenuMovie}/>
                        <div className={"sub-menu-mb " + (subMenuMovie?'on-sub-menu-mb':'')}>
                            <ul>
                                    {
                                        listGenreMovie.map((item) => (
                                            <li key={item.id}><Link to={`/movie/${item.id}`} onClick={handleBtnMenu}>{item.name}</Link></li>
                                        ))
                                    }
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/tv" onClick={handleBtnMenu}>PHIM BỘ</Link>
                        <FontAwesomeIcon icon={faAngleDown}  onClick={handleSubMenuTv}/>
                        <div className={"sub-menu-mb " + (subMenuTv?'on-sub-menu-mb':'')}>
                            <ul>
                                    {
                                        listGenreTv.map((item) => (
                                            <li key={item.id}><Link to={`/tv/${item.id}`} onClick={handleBtnMenu}>{item.name}</Link></li>
                                        ))
                                    }
                            </ul>
                        </div>
                    </li>
                    <li onClick={handleBtnMenu}>
                        QUỐC GIA
                        <FontAwesomeIcon icon={faAngleDown} onClick={handleSubMenuCountry}/>
                        <div className={"sub-menu-mb " + (subMenuCountry?'on-sub-menu-mb':'')}>
                            <ul>
                                <li onClick={handleBtnMenu}><Link>Phim Mỹ</Link></li>
                                <li onClick={handleBtnMenu}><Link>Phim Hàn Quốc</Link></li>
                                <li onClick={handleBtnMenu}><Link>Phim Trung Quốc</Link></li>
                                <li onClick={handleBtnMenu}><Link>Phim Ấn Độ</Link></li>
                                <li onClick={handleBtnMenu}><Link>Phim Thái Lan</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default NavMenuMB