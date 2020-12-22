import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import { Home } from "./home";
import { About } from "./about";
import { Col, Layout, Menu, Row } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UnorderedListOutlined,
    CustomerServiceOutlined,
    IdcardOutlined,
} from "@ant-design/icons";

import "./layout.less";
import { Feedback } from "./feedback";

const { Sider, Header, Content } = Layout;
const { SubMenu } = Menu;

const App = () => {
    return (
        <Router>
            <Layout className="sparkle-layout">
                <Sider>
                    <Row className="sider-logo-row">
                        <Col span={18} className="logo-row-title">
                            Sparkle
                        </Col>
                        <Col span={4} offset={2} className="logo-row-btn">
                            <MenuUnfoldOutlined />
                        </Col>
                    </Row>
                    <Row className="sider-menu-row">
                        <Menu
                            mode="inline"
                            theme="dark"
                            className="sider-menu-main"
                        >
                            <Menu.Item icon={<UnorderedListOutlined />}>
                                <NavLink to="/">提醒事项</NavLink>
                            </Menu.Item>
                            <Menu.Item icon={<CustomerServiceOutlined />}>
                                <NavLink to="/feedback">反馈</NavLink>
                            </Menu.Item>
                            <Menu.Item icon={<IdcardOutlined />}>
                                <NavLink to="/about">关于我们</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Row>
                </Sider>
                <Layout>
                    <Content>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/feedback" component={Feedback} />
                        <Route path="/about" component={About} />
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
