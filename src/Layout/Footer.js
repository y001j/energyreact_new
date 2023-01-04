// create a footer component
import React from 'react';
import {Layout} from "antd";
import {blue, purple} from "@ant-design/colors";
const {Footer} = Layout;

class FooterComp extends React.Component {
    render() {
        return (
            //设置配置的主题颜色

            <Footer style={{backgroundColor: purple[3], color: blue[0]}}>
                Energy Resource Management ©2022 Created by Rocky Yang
            </Footer>
        );
    }
}

export default FooterComp;