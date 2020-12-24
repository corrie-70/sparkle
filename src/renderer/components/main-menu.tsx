import {
    CustomerServiceOutlined,
    IdcardOutlined,
    UnorderedListOutlined,
} from "@ant-design/icons";
import { Menu, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
    return (
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
    );
};
// const MainMenu = connect(mapStateToProps)(MainMenuCom);

export { MainMenu };
