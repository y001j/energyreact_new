//import logo from './logo.svg';
import './App.css';
import {Button, ConfigProvider, Layout, Space, theme } from 'antd';
import {blue, green, purple} from '@ant-design/colors';
import React, { useState } from 'react';
import { Menu } from 'antd';
import  HeaderComp from './Layout/Header.js';
import FooterComp from "./Layout/Footer";

import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';



//import React from "react";
const { Header, Footer, Sider, Content } = Layout;

//LeftMenuItem = Required<MenuProps>['items'][number];

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];

function App() {

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
  return (
      <ConfigProvider
          theme={{
              token: {
                  colorPrimary: green[8]

              },
          }}
      >
    <div className="App">
        <Layout theme="light" style={{
            minHeight: '100vh',

        }}>
            <Sider theme="light" collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
                    <div>
                        <div  style={{
                            marginTop: 16,
                            marginBottom: 16,
                        }}><img src='logo192.png' style={{width:40}}></img></div>
                        <Button
                            type="primary"
                            onClick={toggleCollapsed}
                            style={{
                                marginBottom: 16,
                            }}
                        >
                            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </Button>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode= "inline"
                            theme="light"
                            //inlineCollapsed={collapsed}
                            items={items}
                        />
                    </div>
                </Sider>
            <Layout>
                <Header><HeaderComp /></Header>
                <Content>
                    <Space wrap>
                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
                    </Space>
                </Content>
                <Footer><FooterComp /></Footer>
            </Layout>

        </Layout>

    </div>
      </ConfigProvider>

  );
}

export default App;
