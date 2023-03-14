import React, { Fragment } from "react"
import "./searchFilm.css"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const SearchFilm = () => {
    const key_api = "c2341684ea443882ca84f779ca73278a";
    const [genresMovie, setGenreMovie] = useState([])

    useEffect(()=>{
        const getGenreMovie = async() =>{
            const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key_api}&language=vi`)
            setGenreMovie(response.data.genres)
        }
        getGenreMovie();
    },[])
    return(
        <Fragment>
            <div className="sort-film-cpn">
                <div className="row">
                    <div className="col-6 col-md-3 col-lg-2">
                        <select id="type">
                            <option value="">Thể loại</option>
                            {
                                (genresMovie.length)?
                                genresMovie.map((item,index)=>(
                                    <option key={index}>{item.name}</option>
                                ))
                                :null
                            }
                        </select>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <select id="type">
                            <option value="">Quốc gia</option>
                            <option value="a">Phim Mỹ</option>
                            <option value="b">Phim Hàn Quốc</option>
                        </select>
                    </div>
                    <div className="col-6 col-md-3  col-lg-2">
                        <select id="type">
                            <option value="">Hình thức</option>
                            <option value="a">Phim bộ</option>
                            <option value="b">Phim lẻ</option>
                        </select>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <select id="type">
                            <option value="">Sắp xếp</option>
                            <option value="a">Từ A-Z</option>
                            <option value="b">Từ Z-A</option>
                        </select>
                    </div>
                    <div className="col-12 col-lg-2">
                       <div className="btn-confirm-search-detail">
                            <button>Tìm kiếm</button>
                       </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SearchFilm