import React from "react";
import Dautrang from "../../components/Header/Header";
import Chantrang from "../../components/Footer/Chantrang";
import {  Row, Col, Button,Card, Image  } from 'antd';
import Chitietao from "../../components/Chitietao";

function Ao(){
    return(
        <>
            <Dautrang />
            <div style={{marginTop: '60px'}}>
                <Chitietao />
            </div>
            <Chantrang />
        </>
    );
}
export default Ao;