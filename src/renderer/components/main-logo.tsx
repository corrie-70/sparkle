import Icon, { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { connect } from "react-redux";

import { ReactComponent as SparklerSvg } from "../../assets/images/sparkler.svg";

interface IStateProps {
    collapsed: boolean;
}

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state): IStateProps => {
    return {
        collapsed: state.mainMenuCollapsed.collapsed,
    };
};

const MainLogoCom = (props: IStateProps) => {
    const { collapsed } = props;
    return (
        <Row className="sider-logo-row">
            {/* <Col
                className={
                    collapsed
                        ? "logo-row-title fadeout hidden"
                        : "logo-row-title fadein show-block"
                }
            >
                Sparkle
            </Col> */}
            {/* <Col className="logo-row-btn">
                <Button
                    type="primary"
                    onClick={changeCollapsedAction}
                    icon={
                        collapsed ? (
                            <MenuUnfoldOutlined />
                        ) : (
                            <MenuFoldOutlined />
                        )
                    }
                ></Button>
            </Col> */}
            <Col>
                <Icon component={SparklerSvg}></Icon>
            </Col>
            {!collapsed && <Col className="logo-row-title">Sparkle</Col>}
        </Row>
    );
};
const MainLogo = connect(mapStateToProps)(MainLogoCom);

export { MainLogo };
