import React from "react";
import Dautrang from "../../components/Header/Header";
import Chantrang from "../../components/Footer/Chantrang";
import {  Row, Col, Button,Card, Image  } from 'antd'; 
import Chitietphukien from "../../components/Chitietphukien";

function Phukien(){
    return(
        <>
            <Dautrang />
            <div style={{marginTop: '60px'}}>
                <Chitietphukien />
            </div>
            <Chantrang />
        </>
    );
}
export default Phukien;