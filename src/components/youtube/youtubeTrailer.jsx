import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import YouTube from "react-youtube";
import "./youtubeTrailer.css"

const YoutubeTrailer = ({key_api,id,type}) => {
    const [trailer, setTrailer] = useState([])
    const [checkTrailer, setCheckTrailer] = useState(false)

    useEffect(()=>{
        const getTrailer = async() => {
            //const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key_api}&append_to_response=videos`)
            const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${key_api}&language=en-US`)
            setTrailer(response.data.results)
        }
        getTrailer()
    },[key_api,id,type])

    useEffect(()=>{
        const handleCheckTrailer = () => {
            trailer.map((item)=>(
                (item.name === "Official Trailer" || item.name === "Trailer")?
                setCheckTrailer(true)
                :null
            ))
        }
        handleCheckTrailer()
    },[trailer])
    console.log(trailer)
    return(
        <Fragment>
            {
                (trailer.length)?
                trailer.map((item,index)=>(
                    (item.name === "Official Trailer" || item.name === "Trailer")?
                        <YouTube
                            key={index}
                            videoId={item.key}
                            className="iframe-youtube"
                        />
                    :null
                ))
                :""
            }
            {
                (!checkTrailer)?
                <span className="not-found-trailer">Không tìm thấy trailer nào hết chơn (T.T)</span>
                :null
            }
        </Fragment>
    )
}

export default YoutubeTrailer