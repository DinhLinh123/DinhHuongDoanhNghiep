import React, { useState } from "react";
import Dautrang from "../../components/Header/Header";
import Chantrang from "../../components/Footer/Chantrang";
import { Layout,Carousel, Row, Col, Button,Card, Image  } from 'antd';
import Chitietao from "../../components/Chitietao";
import Chitietquan from "../../components/Chitietquan";
import Chitietdobo from "../../components/Chitietdobo";

const {Content} = Layout;

const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

function Trangchu(){
    return(
        <>
            <Layout>
                <Dautrang />
                <Content>
                    <Carousel autoplay style={{marginTop:"20px"}}>
                        <div>
                        <h3 style={contentStyle}><img src='https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Slide 1 (1).jpg' /></h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}><img src='https://img3.thuthuatphanmem.vn/uploads/2019/10/14/anh-lookbook-thoi-trang_113854100.jpg' /></h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}><img src='https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Banner Đồ Nam.jpg' /></h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}><img src='https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Banner Đồ Nữ.png' /></h3>
                        </div>
                    </Carousel>                   
                    <h1 style={{textAlign:"center",marginTop:'20px'}}>Top các sản phẩm nổi bật</h1>
                    <Chitietao />
                    <h1 style={{textAlign:"center",marginTop:"3%"}}>Áo</h1>                   
                    <Chitietquan />
                    <h1 style={{textAlign:"center",marginTop:"3%"}}>Quần</h1>
                    <Chitietdobo />
                    <h1 style={{textAlign:"center",marginTop:"3%"}}>Đồ bộ</h1>
                </Content>
                <Chantrang />
            </Layout>
        </>
    );
}
export default Trangchu;