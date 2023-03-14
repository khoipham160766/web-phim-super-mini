import { Fragment } from "react"
import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import "./errorPage.css"

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return(
        <Fragment>
            <div className="page-error-cpn">
                <h1>404</h1>
                <h3>PAGE NOT FOUND</h3>
                <Link className="button-go-home" to="/home">
                    Về trang chủ
                    <FontAwesomeIcon icon={faRightFromBracket}/>
                </Link>
            </div>
        </Fragment>
    )
}

export default ErrorPage