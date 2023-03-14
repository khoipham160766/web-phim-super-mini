import React, { Fragment } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const InputSearch = () => {
    const navigate = useNavigate()
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
    return(
        <Fragment>
            <div className="input-search">
                <input type="text" placeholder="Nhập tên phim cần tìm ..." onChange={handleInputSearch} onKeyDown={handleEnter}/>
            </div>
        </Fragment>
    )
}

export default InputSearch