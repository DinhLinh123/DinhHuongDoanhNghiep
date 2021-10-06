import React from "react";
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaPhone, FaEnvelope , FaFacebook,FaTwitter, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import './index.css';

function Chantrang(){
    return(
        <>
           <div className="row footer" id="link">
                <div className="col-4 footer-info">
                    <span>
                        <h2>BIM</h2>
                    </span>
                    <h3>Phần mềm quản lý kho hàng</h3>
                    <p>Quản lý kho toàn diện</p>
                    <p>Lựa chọn tối ưu của bạn</p>
                </div>
                <div className="col-4 footer-info">
                    <span>
                        <h2>Liên hệ</h2>
                    </span>
                    <div>
                        <p>
                            <span style={{marginRight:'30px'}}>
                                <FaLocationArrow/>
                            </span>Địa chỉ: Tầng 12,Tòa VP02, 21 Hồ Tùng Mậu, Mỹ Đình 2 ,Nam Từ Liêm, Hà Nội.
                        </p>
                    </div>
                    <div>
                        <p>
                            <span style={{marginRight:'30px'}}>
                                <FaPhone/>
                            </span>0123456789
                        </p>
                    </div>
                    <div> 
                        <p>
                            <span style={{marginRight:'30px'}}><FaEnvelope/></span>support@bim.net
                        </p>
                    </div>
                </div>
                <div className="col-4 footer-info">
                    <span>
                        <h2>Kết nối với chúng tôi</h2>
                    </span>
                    <div className="fxt-footer">
                        <ul className="fxt-socials">
                        <li className="fxt-facebook fxt-transformY-50 fxt-transition-delay-4">
                            <Link to="#" title="Facebook"><FaFacebook /></Link>
                        </li>
                        <li className="fxt-twitter fxt-transformY-50 fxt-transition-delay-5">
                            <Link to="#" title="twitter"><FaTwitter /></Link>
                        </li>
                        <li className="fxt-google fxt-transformY-50 fxt-transition-delay-6">
                            <Link to="#" title="google"><FaGooglePlusG /></Link>
                        </li>
                        <li className="fxt-linkedin fxt-transformY-50 fxt-transition-delay-7">
                            <Link to="#" title="linkedin"><FaLinkedinIn /></Link>
                        </li>
                        </ul>
                        <p style={{textAlign:'right',color:'red'}}>
                            CoppyRight 2021/BIM
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
export default Chantrang;