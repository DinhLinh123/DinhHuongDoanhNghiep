import React from "react";
import Dautrang from "../../components/Header/Header";
import Chantrang from "../../components/Footer/Chantrang";
import {  Row, Col, Button,Card, Image  } from 'antd';

function Dobo(){
    return(
        <>
            <Dautrang />
            <Row style={{marginTop:'60px'}}>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 350 ,marginLeft:"15%" }}
                            cover={<Image alt="ảnh" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <h3>Tên sản phẩm</h3>
                                <h5>Giá</h5>
                                <Button>Đặt hàng</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 350 ,marginLeft:"15%" }}
                            cover={<Image alt="ảnh" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <h3>Tên sản phẩm</h3>
                                <h5>Giá</h5>
                                <Button>Đặt hàng</Button>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 350 ,marginLeft:"15%" }}
                            cover={<Image alt="ảnh" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <h3>Tên sản phẩm</h3>
                                <h5>Giá</h5>
                                <Button>Đặt hàng</Button>
                            </Card>
                        </Col>                  
                    </Row>
            <Chantrang />
        </>
    );
}
export default Dobo;