import React, { Fragment, useState } from "react"
import SearchFilm from "../searchFilm/searchFilm"
import Film from "../film/Film"
import ReactPaginate from "react-paginate"
import "./typeFilm.css"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"


const Items = ({currentItems}) => {
  return (
    <Fragment>
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index} className="col-xl-3 col-lg-4 col-md-6">
             <Film 
                  mediaType={(item.media_type === "tv")?"TV Shows":"Movie"} 
                  background={(item.backdrop_path)?item.backdrop_path:item.poster_path} 
                  filmname={(item.media_type === "tv")?`${item.name}`:`${item.title}`}
                  type="movie"
                  id={item.id}
              />
          </div>
        ))}
    </Fragment>
  );
}
const KeywordFilm = ({ itemsPerPage }) => {
  const key_api = "c2341684ea443882ca84f779ca73278a";
  const {keyword} = useParams()
  const [itemOffset, setItemOffset] = useState(0);
  const [listFilmToType, setListFilmToType] = useState([])
  const endOffset = itemOffset + itemsPerPage;
  const [currentItems, setCurrentItmes] = useState([]);
  const [pageCount, setPageCount] = useState(1)
  //const [items, setItems] = useState(0);
  //const currentItems = listFilmToType.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(listFilmToType.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % listFilmToType.length;
    setItemOffset(newOffset);
  };
  // effect 1
  useEffect(()=>{
    const getListFilmToType = async() => {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key_api}&language=en-US&page=1&include_adult=false&query=${keyword}`)
      setListFilmToType(response.data.results)
    }
    getListFilmToType()
    setCurrentItmes([])
    setPageCount(1)
    setItemOffset(0)
  },[keyword])
  // effect 2
  useEffect(()=>{
    setCurrentItmes(listFilmToType.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(listFilmToType.length / itemsPerPage))
  },[listFilmToType,endOffset,itemOffset, itemsPerPage])

  // test console
  console.log(currentItems)
  return (
    <Fragment>
        <SearchFilm />
        <div className="container-film-cpn row">
            <Items currentItems={currentItems} />
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

export default KeywordFilm;