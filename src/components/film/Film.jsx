import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import "./film.css"

const Film = ({mediaType,background,filmname,type,id}) => {
    const link_image = "https://image.tmdb.org/t/p/w500"
    const handleScrollTop = () => {
        window.scrollTo(0,0)
    }
    return(
        <Fragment>
            <div className="slider-film" onClick={handleScrollTop}>
                <Link to={`/${type}/detail/${id}`}>
                    <div className="span">
                        <p>{(mediaType)?mediaType:""}</p>
                    </div>
                    <img src={(background)?`${link_image}${background}`:"https://res.cloudinary.com/dsmxbt954/image/upload/v1678768727/logo-x-snail/no-image_ycoyag.png"} alt=""/>
                    <div className="name-film">
                        <p>{(filmname)?filmname:""}</p>
                    </div>
                    <div className="icon-btn-play">
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                </Link>   
            </div>
        </Fragment>
    )
}

export default Film