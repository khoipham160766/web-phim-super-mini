import React, { Fragment } from "react";
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () =>{
    return(
        <Fragment>
            <div className="footer-cpn">
                <div className="footer-content row">
                    <div className="div-1 col-xl-5 col-sm-6 col-12">
                        <img src="../../images/background-black-logo.png" alt="logo"/>
                        <p>X-Snail là web xem phim mới luôn được cập nhật các bộ phim hay,
                           mang đến những trải nghiệm tuyệt vời cho người xem. Có đầy đủ các 
                           thể loại phim đến từ đa quốc gia (phim vietsub, thuyết minh, lồng tiếng).
                        </p>
                        <p className="get-api">API from TMDB Database</p>
                    </div>
                    <div className="div-2 col-xl-2 col-sm-6 col-6">
                        <p className="footer-title">
                            THỂ LOẠI
                        </p>
                        <ul>
                            <li>Phim Hành Động</li>
                            <li>Phim Hài Hước</li>
                            <li>Phim Cổ Trang</li>
                            <li>Phim Tình Cảm</li>
                        </ul>
                    </div>
                    <div className="div-3 col-xl-2 col-sm-6 col-6">
                        <p className="footer-title">
                            QUỐC GIA
                        </p>
                        <ul>
                            <li>Phim Mỹ</li>
                            <li>Phim Hàn Quốc</li>
                            <li>Phim Trung Quốc</li>
                        </ul>
                    </div>
                    <div className="div-4 col-xl-3 col-sm-6 col-12">
                        <p className="footer-title">
                            KẾT NỐI VỚI CHÚNG TÔI
                        </p>
                        <p className="mini-contact">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            Email: xsnailphim@gmail.com
                        </p>
                        <p className="mini-contact">
                            <FontAwesomeIcon icon={faPhone}/>
                            Hotline: 0794.667.091
                        </p>
                        <div className="mini-contact icon-contact">
                            <FontAwesomeIcon icon={faFacebook}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faTwitter}/>
                            <FontAwesomeIcon icon={faYoutube}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer