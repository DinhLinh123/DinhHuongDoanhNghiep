import React, {useState} from "react";
import { Layout, Menu, Row, Col ,Input, Space,Avatar,Button  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  
  
function Dautrang(){
   
    return(
        <>
            <Layout>
                {/* <Row>
                    <Col span={8}>
                        <div style={{width:"250px",height:"150px"}}>
                            <img src="#" alt="Logo" />
                        </div>
                    </Col>
                    <Col span={10}>
                        
                    </Col>
                    <Col span={4} style={{marginTop:"6%",textAlign:'right',paddingRight:'1%'}}>
                        <Button type="primary" ghost>
                            Đăng nhập
                        </Button>
                    </Col>
                    <Col span={2} style={{marginTop:"6%",textAlign:'right',paddingRight:'6%'}}>
                        <Badge count={5} offset={[5, 5]}>
                            <Avatar shape="square" size="normal" />
                        </Badge>
                    </Col>
                </Row> */}
                <Menu mode="horizontal" style={{height: '100px',padding:'30px 20px'}} >
                    <Menu.Item key={1} style={{marginLeft:"9%"}}><Link to="/">Sản phẩm mới</Link></Menu.Item>
                    <Menu.Item key={2}><Link to="/ao">Áo</Link></Menu.Item>
                    <Menu.Item key={3}><Link to="/quan">Quần</Link></Menu.Item>
                    <Menu.Item key={4}><Link to="/do-bo">Đồ bộ</Link></Menu.Item>
                    <Menu.Item key={5}><Link to="/phu-kien">Phụ kiện</Link></Menu.Item>
                    <Menu.Item key={6}><Link to="/su-kien">Sự kiện</Link></Menu.Item>
                    <Menu.Item key={7}><Link to="/thong-bao">Thông báo</Link></Menu.Item>
                    <Menu.Item key={8}><Link to="/ho-tro">Hỗ trợ</Link></Menu.Item>
                    <Menu.Item key={9}></Menu.Item>
                    
                    <Menu.Item key={10}>
                        <Space direction="vertical">
                            <Search
                            placeholder="Tìm kiếm ..."
                            enterButton="Tìm kiếm"
                            size="large"
                            suffix={suffix}
                            />
                        </Space>
                    </Menu.Item>
                    <Menu.Item>    
                        <Button type="primary" ghost>
                            Đăng nhập
                        </Button>
                    </Menu.Item> 
                    <Menu.Item>    
                    <Badge style={{marginBottom:'2%'}} count={5} offset={[5, 5]}>
                    <Avatar icon={<UserOutlined />} />
                        </Badge>
                    </Menu.Item>    
                </Menu>
            </Layout>
        </>
    );
}
export default Dautrang;