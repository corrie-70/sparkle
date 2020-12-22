import { Button, message, Row } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../../stores/actions";

interface IStateProps {
    count: number;
}

interface IDispatcherProps {
    increaseAction: () => void;
}

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state): IStateProps => {
    return {
        count: state.counter.count,
    };
};

// 将 对应action 插入到组件的 props 中
const mapDispatcherToProps = (dispatch: Dispatch): IDispatcherProps => ({
    increaseAction: () => dispatch(actions.increaseAction()),
});

type ReduxType = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatcherToProps>;

const HomeCom = (props: ReduxType) => {
    const { count, increaseAction } = props;
    return (
        <div>
            Home
            <Row>{count}</Row>
            <Button
                onClick={() => {
                    increaseAction();
                    message.warn("点击了信息");
                }}
            >
                Increase
            </Button>
        </div>
    );
};

export const Home = connect(mapStateToProps, mapDispatcherToProps)(HomeCom);
