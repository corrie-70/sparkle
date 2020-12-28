import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./home";
import { About } from "./about";
import { Layout } from "antd";

import "./layout.less";
import { Feedback } from "./feedback";
import { MainLogo } from "../components/main-logo";
import { MainMenu } from "../components/main-menu";
import { connect } from "react-redux";
import { MainHeader } from "../components/main-header";

const { Sider, Content } = Layout;

interface IStateProps {
    collapsed: boolean;
}

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state): IStateProps => {
    return {
        collapsed: state.mainMenuCollapsed.collapsed,
    };
};

const MainLayoutCom = (props: IStateProps) => {
    const { collapsed } = props;
    return (
        <Router>
            <Layout className="sparkle-layout">
                <Sider
                    collapsible
                    trigger={null}
                    collapsedWidth={60}
                    collapsed={collapsed}
                    className="main-sider"
                >
                    <MainLogo />
                    <MainMenu />
                </Sider>
                <Layout>
                    <MainHeader></MainHeader>
                    <Content className="main-content">
                        <Route exact path="/" component={Home} />
                        <Route path="/feedback" component={Feedback} />
                        <Route path="/about" component={About} />
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};
const MainLayout = connect(mapStateToProps)(MainLayoutCom);

export default MainLayout;
