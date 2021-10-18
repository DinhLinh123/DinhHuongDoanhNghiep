import React from "react";
import Dautrang from "../../components/Header/Header";
import Chantrang from "../../components/Footer/Chantrang";
import { Layout,Carousel, Row, Col, Button,Card, Image  } from 'antd';

const {Content} = Layout;

const contentStyle = {
    height: '260px',
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
                        <h3 style={contentStyle}><img src='https://printgo.vn/uploads/media/774255/nguon-hang-thoi-trang_1585710929.jpg' /></h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>                   
                    <h1 style={{textAlign:"center"}}>Top các sản phẩm nổi bật</h1>
                    <Row>
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
                    <h1 style={{textAlign:"center",marginTop:"3%"}}>Áo</h1>                   
                    <Row>
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
                    <h1 style={{textAlign:"center",marginTop:"3%"}}>Quần</h1>
                    <Row>
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
                </Content>
                <Chantrang />
            </Layout>
        </>
    );
}
export default Trangchu;