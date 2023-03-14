import { Fragment } from "react"

const ActorCard = ({profile_path, name, character}) => {
    const no_image = "https://res.cloudinary.com/dsmxbt954/image/upload/v1678768727/logo-x-snail/no-image_ycoyag.png"
    return(
        <Fragment>
            <div className="actor-card-cpn">
                <div className="image-actor">
                    <img src={(profile_path)?`https://image.tmdb.org/t/p/w500/${profile_path}`:`${no_image}`} alt=""/>
                </div>
                <div className="name-actor">
                    <p className="name">{name}</p>
                    <p className="character">{character}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default ActorCard