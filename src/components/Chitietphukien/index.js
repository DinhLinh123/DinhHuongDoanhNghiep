import React, { useState } from "react";
import { Layout,Carousel, Row, Col, Button,Card, Image  } from 'antd';
import { PageHeader, Tabs, Statistic, Descriptions } from 'antd';

const { TabPane } = Tabs;

  const renderContent = (column = 1) => (
    <Descriptions size="small" column={column}>
      <Descriptions.Item label="Tạo bởi">Admin</Descriptions.Item>
      <Descriptions.Item label="Mã sản phẩm">
        <a>421421</a>
      </Descriptions.Item>
      <Descriptions.Item label="Ngày tạo">2017-01-10</Descriptions.Item>
     
      <Descriptions.Item label="Nhận xét">
        Hiếu, Ngân, Linh, Hiền, Hồng
      </Descriptions.Item>
    </Descriptions>
  );

  const extraContent = (
    <div
      style={{
        display: 'flex',
        width: 'max-content',
        justifyContent: 'flex-end',
      }}
    >
      <Statistic
        title="Trạng thái"
        value="Còn hàng"
        style={{
          marginRight: 32,
        }}
      />
      <Statistic title="Giá tiền" value={86} prefix="$"  />
    </div>
  );

  const Contents = ({ children, extra }) => (
    <div className="content">
      <div className="main">{children}</div>
      <div className="extra">{extra}</div>
    </div>
  );
  

function Chitietphukien(){

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    return(
        <>
           
                    <Row style={{marginBottom: '30px'}}>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 350 ,marginLeft:"15%" }}
                            cover={<Image alt="ảnh" style={{height: '437.79px'}} src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210428/28042021110415_IMG_8556.jpg" />}
                            >
                                <h3>Mũ</h3>
                                <h5>$86</h5>
                                { !show ?<Button onClick={()=>setShow(!show)}>Đặt hàng</Button> : (
                                    <PageHeader
                                    className="site-page-header-responsive"
                                    onBack={() => setShow(false)}
                                    title="Mũ"
                                    subTitle="Mũ lưỡi chai"
                                    extra={[
                                      <Button key="1" type="primary" onClick={() => alert("Mua thành công")}>
                                        Mua
                                      </Button>,
                                    ]}
                                    footer={
                                      <Tabs defaultActiveKey="1">
                                        <TabPane tab="Chi tiết" key="1" />
                                      </Tabs>
                                    }
                                  >
                                    <Contents extra={extraContent}>{renderContent()}</Contents>
                                  </PageHeader>
                                )}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 350 ,marginLeft:"15%" }}
                            cover={<Image alt="ảnh" style={{height: '437.79px'}} src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210406/627202122754_IMG_6709_thumb.jpg" />}
                            >
                                <h3>Thắt lưng</h3>
                                <h5>$86</h5>
                                { !show1 ?<Button onClick={()=>setShow1(!show1)}>Đặt hàng</Button> : (
                                    <PageHeader
                                    className="site-page-header-responsive"
                                    onBack={() => setShow1(false)}
                                    title="Thắt lưng"
                                    subTitle="Thắt lưng nam"
                                    extra={[
                                      <Button key="1" type="primary" onClick={() => alert("Mua thành công")}>
                                        Mua
                                      </Button>,
                                    ]}
                                    footer={
                                      <Tabs defaultActiveKey="1">
                                        <TabPane tab="Chi tiết" key="1" />
                                      </Tabs>
                                    }
                                  >
                                    <Contents extra={extraContent}>{renderContent()}</Contents>
                                  </PageHeader>
                                )}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 350 ,marginLeft:"15%" }}
                            cover={<Image alt="ảnh" style={{height: '437.79px'}} src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210403/03042021090450_IMG_6542.jpg" />}
                            >
                                <h3>Thắt lưng</h3>
                                <h5>$86</h5>
                                { !show2 ?<Button onClick={()=>setShow2(!show2)}>Đặt hàng</Button> : (
                                    <PageHeader
                                    className="site-page-header-responsive"
                                    onBack={() => setShow2(false)}
                                    title="Thắt lưng"
                                    subTitle="Thắt lưng nam"
                                    extra={[
                                      <Button key="1" type="primary" onClick={() => alert("Mua thành công")}>
                                        Mua
                                      </Button>,
                                    ]}
                                    footer={
                                      <Tabs defaultActiveKey="1">
                                        <TabPane tab="Chi tiết" key="1" />
                                      </Tabs>
                                    }
                                  >
                                    <Contents extra={extraContent}>{renderContent()}</Contents>
                                  </PageHeader>
                                )}
                            </Card>
                        </Col>               
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 350 ,marginLeft:"15%" }}
                            cover={<Image alt="ảnh" style={{height: '437.79px'}} src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210113/1305202150544_IMG_9939.jpg" />}
                            >
                                <h3>Balo</h3>
                                <h5>$86</h5>
                                { !show3 ?<Button onClick={()=>setShow3(!show3)}>Đặt hàng</Button> : (
                                    <PageHeader
                                    className="site-page-header-responsive"
                                    onBack={() => setShow3(false)}
                                    title="Balo"
                                    subTitle="balo thời trang"
                                    extra={[
                                      <Button key="1" type="primary" onClick={() => alert("Mua thành công")}>
                                        Mua
                                      </Button>,
                                    ]}
                                    footer={
                                      <Tabs defaultActiveKey="1">
                                        <TabPane tab="Chi tiết" key="1" />
                                      </Tabs>
                                    }
                                  >
                                    <Contents extra={extraContent}>{renderContent()}</Contents>
                                  </PageHeader>
                                )}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 350 ,marginLeft:"15%" }}
                            cover={<Image alt="ảnh" style={{height: '437.79px'}} src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210112/1222202132241_IMG_9803.jpg" />}
                            >
                                <h3>Túi xách</h3>
                                <h5>$86</h5>
                                { !show4 ?<Button onClick={()=>setShow4(!show4)}>Đặt hàng</Button> : (
                                    <PageHeader
                                    className="site-page-header-responsive"
                                    onBack={() => setShow4(false)}
                                    title="Túi xách"
                                    subTitle="Túi xách nữ"
                                    extra={[
                                      <Button key="1" type="primary" onClick={() => alert("Mua thành công")}>
                                        Mua
                                      </Button>,
                                    ]}
                                    footer={
                                      <Tabs defaultActiveKey="1">
                                        <TabPane tab="Chi tiết" key="1" />
                                      </Tabs>
                                    }
                                  >
                                    <Contents extra={extraContent}>{renderContent()}</Contents>
                                  </PageHeader>
                                )}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 350 ,marginLeft:"15%" }}
                            cover={<Image alt="ảnh" style={{height: '437.79px'}} src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210403/03042021090450_IMG_6542.jpg" />}
                            >
                                <h3>Thắt lưng</h3>
                                <h5>$86</h5>
                                { !show5 ?<Button onClick={()=>setShow5(!show5)}>Đặt hàng</Button> : (
                                    <PageHeader
                                    className="site-page-header-responsive"
                                    onBack={() => setShow5(false)}
                                    title="Thắt lưng"
                                    subTitle="Thắt lưng nam"
                                    extra={[
                                      <Button key="1" type="primary" onClick={() => alert("Mua thành công")}>
                                        Mua
                                      </Button>,
                                    ]}
                                    footer={
                                      <Tabs defaultActiveKey="1">
                                        <TabPane tab="Chi tiết" key="1" />
                                      </Tabs>
                                    }
                                  >
                                    <Contents extra={extraContent}>{renderContent()}</Contents>
                                  </PageHeader>
                                )}
                            </Card>
                        </Col>               
                    </Row>    
        </>
    );
}
export default Chitietphukien;