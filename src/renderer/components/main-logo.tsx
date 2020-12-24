import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../stores/actions";

interface IStateProps {
    collapsed: boolean;
}

interface IDispatcherProps {
    changeCollapsedAction: () => void;
}

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state): IStateProps => {
    return {
        collapsed: state.mainMenuCollapsed.collapsed,
    };
};

// 将 对应action 插入到组件的 props 中
const mapDispatcherToProps = (dispatch: Dispatch): IDispatcherProps => ({
    changeCollapsedAction: () => dispatch(actions.changeCollapsedAction()),
});

type ReduxType = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatcherToProps>;

const MainLogoCom = (props: ReduxType) => {
    const { collapsed, changeCollapsedAction } = props;
    return (
        <Row className="sider-logo-row">
            {!collapsed && <Col className="logo-row-title">Sparkle</Col>}
            <Col className={"logo-row-btn"}>
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
            </Col>
        </Row>
    );
};
const MainLogo = connect(mapStateToProps, mapDispatcherToProps)(MainLogoCom);

export { MainLogo };
