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
      <Statistic title="Giá tiền" value={568.000} prefix="$"  />
    </div>
  );

  const Contents = ({ children, extra }) => (
    <div className="content">
      <div className="main">{children}</div>
      <div className="extra">{extra}</div>
    </div>
  );
  

function Chitietquan(){

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    return(
        <>
           
                    <Row>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 350 ,marginLeft:"15%" }}
                            cover={<Image alt="ảnh" style={{height: '437.79px'}} src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210618/18062021030625_1000_x_1500__Dai_dien_thumb.jpg" />}
                            >
                                <h3>Quần kaki</h3>
                                <h5>$586</h5>
                                { !show ?<Button onClick={()=>setShow(!show)}>Đặt hàng</Button> : (
                                    <PageHeader
                                    className="site-page-header-responsive"
                                    onBack={() => setShow(false)}
                                    title="Quần"
                                    subTitle="Áo ngố"
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
                            cover={<Image alt="ảnh" style={{height: '437.79px'}} src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210527/27052021070509_1000_x_1500__Dai_dien.jpg" />}
                            >
                                <h3>Quần âu</h3>
                                <h5>$568</h5>
                                { !show1 ?<Button onClick={()=>setShow1(!show1)}>Đặt hàng</Button> : (
                                    <PageHeader
                                    className="site-page-header-responsive"
                                    onBack={() => setShow1(false)}
                                    title="Quần"
                                    subTitle="Quần âu"
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
                            cover={<Image alt="ảnh" style={{height: '437.79px'}} src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20210514/14052021030549_dai_dien.jpg" />}
                            >
                                <h3>Quần ngắn</h3>
                                <h5>$586</h5>
                                { !show2 ?<Button onClick={()=>setShow2(!show2)}>Đặt hàng</Button> : (
                                    <PageHeader
                                    className="site-page-header-responsive"
                                    onBack={() => setShow2(false)}
                                    title="Quần"
                                    subTitle="Quần ngắn"
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
export default Chitietquan;