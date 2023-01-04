import {blue, green, purple} from "@ant-design/colors";
import React, {useState} from "react";
import {Layout} from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const { Header } = Layout;

const items = [
    {
        label: '能源管理',
        key: 'energy',
        icon: <MailOutlined />,
    },
    {
        label: '碳资源管理',
        key: 'resource',
        icon: <AppstoreOutlined />,
        //disabled: true,
    },
    {
        label: '实时能耗监控',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: '能耗预测',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: '设置',
        key: 'setting',
        icon: <MailOutlined />,
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];

const Menus = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    // 字体加粗

    return <Menu style={{background: purple[3], color: blue[0], fontSize:18, width:'70%',fontWeight: 'bold' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

class HeaderComp extends React.Component {
    render() {
        return (
            <Header style={{background: blue[4], color: blue[0], fontSize:30, textAlign:"center"}}>
                <div className="logo"/>

                <Menus />
            </Header>
        );
    }
}

export default HeaderComp;