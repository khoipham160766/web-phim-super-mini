import { Fragment } from "react"

const ActorCard = ({profile_path, name, character}) => {
    return(
        <Fragment>
            <div className="actor-card-cpn">
                <div className="image-actor">
                    <img src={(profile_path)?`https://image.tmdb.org/t/p/w500/${profile_path}`:"../../images/no-image.png"} alt=""/>
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