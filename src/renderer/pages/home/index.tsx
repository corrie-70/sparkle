import { Button, Input, Layout, message, Row, Space, Table } from "antd";
import { ColumnsType } from "antd/lib/table/interface";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../../stores/actions";
import { EditableCell } from "./components/editable-cell";
import { EditableRow } from "./components/editable-row";

import "./index.less";

const { Sider, Header, Content } = Layout;

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

// db.version(1).stores({ reminder: "id,content,date,repeat" });
// db.reminder.put({ content: "test", repeat: false });

// addReminder({ content: "test", repeat: false })

const TableDataSource = [
    {
        key: "1",
        content: "胡彦斌",
        date: 32,
        repeat: "西湖区湖底公园1号",
    },
    {
        key: "2",
        content: "胡彦祖",
        date: 42,
        repeat: "西湖区湖底公园1号",
    },
];

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

const TableColumns = [
    {
        title: "内容",
        dataIndex: "content",
        key: "content",
        ellipsis: true,
        editable: true,
    },
    {
        title: "日期",
        dataIndex: "date",
        key: "date",
    },
    {
        title: "重复提醒",
        dataIndex: "repeat",
        key: "repeat",
    },
    {
        title: "操作",
        key: "action",
        render: (text, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
    key: React.Key;
    name: string;
    age: string;
    address: string;
}

const HomeCom = (props: ReduxType) => {
    return (
        // <div>
        //     Home
        //     <Row>{count}</Row>
        //     <Button
        //         onClick={() => {
        //             increaseAction();
        //             message.warn("点击了信息");
        //         }}
        //     >
        //         Increase
        //     </Button>
        // </div>
        <Layout className="layout-home">
            <Content>
                <Table
                    rowClassName={() => "editable-row"}
                    bordered
                    columns={TableColumns}
                    dataSource={TableDataSource}
                ></Table>
            </Content>
        </Layout>
    );
};

export const Home = connect(mapStateToProps, mapDispatcherToProps)(HomeCom);
