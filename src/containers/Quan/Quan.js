import React from "react";
import Dautrang from "../../components/Header/Header";
import Chantrang from "../../components/Footer/Chantrang";
import {  Row, Col, Button,Card, Image  } from 'antd';
import Chitietquan from "../../components/Chitietquan";

function Quan(){
    return(
        <>
            <Dautrang />
            <div style={{marginTop: '60px'}}>
                <Chitietquan />
            </div>
            <Chantrang />
        </>
    );
}
export default Quan;