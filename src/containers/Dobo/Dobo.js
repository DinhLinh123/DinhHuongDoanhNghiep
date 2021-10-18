import React from "react";
import Dautrang from "../../components/Header/Header";
import Chantrang from "../../components/Footer/Chantrang";
import {  Row, Col, Button,Card, Image  } from 'antd';
import Chitietdobo from "../../components/Chitietdobo";

function Dobo(){
    return(
        <>
            <Dautrang />
            <div style={{marginTop: '60px'}}>
                <Chitietdobo />
            </div>
            <Chantrang />
        </>
    );
}
export default Dobo;