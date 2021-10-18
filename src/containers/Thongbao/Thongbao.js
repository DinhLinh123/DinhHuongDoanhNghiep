import React from "react";
import Dautrang from "../../components/Header/Header";
import Chantrang from "../../components/Footer/Chantrang";
import { Spin } from 'antd';
import './index.css';

function Thongbao(){
    return(
        <>
            <Dautrang />
            <div className='spin'>
                <Spin tip="Đang tải thông báo..." />
            </div>
            <Chantrang />
        </>
    );
}
export default Thongbao;