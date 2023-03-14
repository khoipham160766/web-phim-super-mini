import React, { Fragment, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const NavMenuNOR = () => {
    const key_api = "c2341684ea443882ca84f779ca73278a";
    const [listGenreMovie, setListGenreMovie] = useState([])
    const [listGenreTv, setListGenreTv] = useState([])

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
            <div className="nav-menu-nor">
                <ul>
                    <li>
                        <Link to="/home">TRANG CHỦ</Link>
                    </li>
                    <li>
                        <Link to="/movie">PHIM LẺ</Link>
                        <div className="sub-menu-nor">
                            <ul>
                                {
                                    listGenreMovie.map((item) => (
                                        <li key={item.id}><Link to={`/movie/${item.id}`}>{item.name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/tv">PHIM BỘ</Link>
                        <div className="sub-menu-nor">
                            <ul>
                                {
                                    listGenreTv.map((item) => (
                                        <li key={item.id}><Link to={`/tv/${item.id}`}>{item.name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link>QUỐC GIA</Link>
                        <div className="sub-menu-nor">
                            <ul>
                                <li><Link>Phim Mỹ</Link></li>
                                <li><Link>Phim Hàn Quốc</Link></li>
                                <li><Link>Phim Trung Quốc</Link></li>
                                <li><Link>Phim Ấn Độ</Link></li>
                                <li><Link>Phim Thái Lan</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default NavMenuNOR