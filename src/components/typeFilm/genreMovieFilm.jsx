import React, { Fragment, useState } from "react"
import SearchFilm from "../searchFilm/searchFilm"
import Film from "../film/Film"
import ReactPaginate from "react-paginate"
import "./typeFilm.css"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


const Items = ({currentItems,id}) => {
  const [check,setCheck] = useState(false)
  useEffect(()=>{
    setCheck(false)
    currentItems &&
      currentItems.map((item) => (
        ((item.genre_ids).includes(parseInt(id)))?
        setCheck(true)
        :null
      ))
  },[id, currentItems])
  return (
    <Fragment>
      {
        (check)?
          currentItems &&
            currentItems.map((item, index) => (
              ((item.genre_ids).includes(parseInt(id)))?
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <Film 
                      mediaType="TV Shows"
                      background={item.backdrop_path} 
                      filmname={item.name}
                      type="movie"
                      id={item.id}
                  />
              </div>
              :null
            ))
        :<span className="no-found-genre-tv">Không có phim phù hợp</span>
      }
    </Fragment>
  );
}
const GenreMovieFilm = ({ itemsPerPage }) => {
  const key_api = "c2341684ea443882ca84f779ca73278a";
  const [itemOffset, setItemOffset] = useState(0);
  const [listFilmToType, setListFilmToType] = useState([])
  const endOffset = itemOffset + itemsPerPage;
  const [currentItems, setCurrentItmes] = useState([]);
  const [pageCount, setPageCount] = useState(1)
  const {id} = useParams();

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % listFilmToType.length;
    setItemOffset(newOffset);
  };
  useEffect(()=>{
    const getListFilmToType = async() => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key_api}&language=en-US&page=1`)
      setListFilmToType(response.data.results)
    }
    getListFilmToType()
    setCurrentItmes([])
    setPageCount(1)
    setItemOffset(0)
  },[])
  
  useEffect(()=>{
    setCurrentItmes(listFilmToType.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(listFilmToType.length / itemsPerPage))
  },[listFilmToType,endOffset,itemOffset, itemsPerPage])
  console.log(currentItems)
  return (
    <Fragment>
        <SearchFilm />
        <div className="container-film-cpn row">
            <Items currentItems={currentItems} id={id}/>
            <div className="pagination-cpn">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    </Fragment>
  );
}

export default GenreMovieFilm;