import React, {useState} from "react";
import { Layout, Menu, Row, Col ,Input, Space,Avatar,Button  } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const {SubMenu} = Menu;
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  
  const onSearch = value => console.log(value);
  const UserList = ['Hiếu','Hiền', 'Hồng', 'Ngân', 'Linh'];
  const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae','#7265e6'];

function Dautrang(){
    const [user, setUser] = useState(UserList[0]);
    const [color, setColor] = useState(ColorList[0]);
   
    const changeUser = () => {
        const index = UserList.indexOf(user);
        setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
        setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
    };
    return(
        <>
            <Layout>
                <Row>
                    <Col span={8}>
                        <div style={{width:"250px",height:"150px"}}>
                            <img src="#" alt="Logo" />
                        </div>
                    </Col>
                    <Col span={10}>
                        
                    </Col>
                    <Col span={6} style={{marginTop:"6%"}}>
                        <Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size="large" >
                            {user}
                        </Avatar>
                        <span style={{marginLeft:"15px"}}>Xin chào {user}</span>
                        <Button
                            size="small"
                            style={{ margin: '0 16px', verticalAlign: 'middle' }}
                            onClick={changeUser}
                        >
                            Đổi tài khoản
                        </Button>
                    </Col>
                </Row>
                <Menu mode="horizontal">
                    <Menu.Item style={{marginLeft:"9%"}}>Sản phẩm mới</Menu.Item>
                    <Menu.Item>Áo</Menu.Item>
                    <Menu.Item>Quần</Menu.Item>
                    <Menu.Item>Đồ bộ</Menu.Item>
                    <Menu.Item>Phụ kiện</Menu.Item>
                    <SubMenu title="Sự kiện">
                        <Menu.Item>Sự kiện</Menu.Item>
                    </SubMenu>
                    <Menu.Item>Thông báo</Menu.Item>
                    <Menu.Item>Hỗ trợ</Menu.Item>
                    <Menu.Item></Menu.Item>
                    <Menu.Item></Menu.Item>
                    <Menu.Item>
                        <Space direction="vertical">
                            <Search
                            placeholder="Tìm kiếm ..."
                            enterButton="Tìm kiếm"
                            size="large"
                            suffix={suffix}
                            onSearch={onSearch}
                            />
                        </Space>
                    </Menu.Item>
                </Menu>
            </Layout>
        </>
    );
}
export default Dautrang;