import React from "react";
import { Result, Button } from 'antd';
import { Link } from "react-router-dom";

function Khongtimthay(){
    return(
        <>
           <Result
                status="404"
                title="404"
                subTitle="Xin lỗi, trang bạn truy cập không tồn tại."
                extra={<Link to='/'><Button type="primary">Trở lại</Button></Link>}
            />
        </>
    );
}
export default Khongtimthay;