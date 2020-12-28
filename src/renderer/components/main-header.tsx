import Icon, { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Col, Layout, Row } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../stores/actions";

import { ReactComponent as CloseSvg } from "../../assets/images/close.svg";
import { ReactComponent as MaximizeSvg } from "../../assets/images/maximize.svg";
import { ReactComponent as MinimizeSvg } from "../../assets/images/minimize.svg";
import { ReactComponent as NormalSizeSvg } from "../../assets/images/normal-size.svg";

const { Header } = Layout;

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

const MainHeaderCom: React.FC<ReduxType> = (props: ReduxType) => {
    const { collapsed, changeCollapsedAction } = props;
    const [isMax, setIsMax] = useState(false);
    return (
        <Header className="main-header">
            <Row justify="space-between">
                <Col className="main-header-collapse">
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
                <Col className="main-header-resize">
                    <Icon component={MinimizeSvg} title="最小化"></Icon>
                    {isMax ? (
                        <Icon component={MaximizeSvg} title="向下还原"></Icon>
                    ) : (
                        <Icon component={NormalSizeSvg} title="最大化"></Icon>
                    )}
                    <Icon
                        className="header-resize-close"
                        component={CloseSvg}
                        title="关闭"
                    ></Icon>
                </Col>
            </Row>
        </Header>
    );
};

const MainHeader = connect(
    mapStateToProps,
    mapDispatcherToProps
)(MainHeaderCom);

export { MainHeader };
