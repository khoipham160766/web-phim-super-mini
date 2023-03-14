import React, { Fragment, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons"
import "./nav.css"
import InputSearch from "./input-search"
import NavMenuMB from "./nav-menu-mb"
import NavMenuNOR from "./nav-menu-nor"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const [btnSearch, setBtnSearch] = useState(false);
    const [btnMenu, setBtnMenu] = useState(false)
    const [searchKeyword, setSearchKeyWord] = useState("");

    const handleInputSearch = e => {
        setSearchKeyWord(e.target.value)
    }
    const handleEnter = e => {
        if(e.key === 'Enter'){
            console.log("enter 1")
            navigate(`/search/${searchKeyword}`)
        }
    }
    console.log(searchKeyword)
    const handleBtnSearch = () => {
        setBtnSearch(!btnSearch)
        if(btnMenu) setBtnMenu(!btnMenu)
    }
    const handleBtnMenu = () => {
        setBtnMenu(!btnMenu)
        if(btnSearch) setBtnSearch(!btnSearch)
    }
    return(
        <Fragment>
            <div className="cpn-navbar row">
                <div className="btn-menu btn-menu-mb col-3">
                    {
                        (!btnMenu)?
                        <FontAwesomeIcon icon={faBars} onClick={handleBtnMenu}/>
                        :
                        <FontAwesomeIcon icon={faXmark} onClick={handleBtnMenu}/>
                    }
                </div>
                <div className="web-logo col-6 col-lg-3 col-xl-2">
                    <Link to="home">
                        <img src="../../images/background-black-logo.png" alt="logo"/>
                    </Link>
                </div>
                <div className="nav-menu-nor col-lg-8 col-xl-7">
                    <NavMenuNOR />
                </div>
                <div className="search-nor col-xl-3">
                    <input type="text" placeholder="Nhập tên phim cần tìm ..." onChange={handleInputSearch} onKeyDown={handleEnter}/>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
                <div className="btn-search col-3 col-lg-1">
                    {
                        (!btnSearch)?
                        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleBtnSearch}/>
                        :
                        <FontAwesomeIcon icon={faXmark} onClick={handleBtnSearch}/>
                    }
                </div>
            </div>
            {
                (btnSearch)?<InputSearch/>:""
            }
            <NavMenuMB btnMenu={btnMenu} handleBtnMenu={handleBtnMenu}/>
        </Fragment>
    )
}

export default Navbar