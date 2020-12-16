import { Button, message } from 'antd';
import React from 'react';

const Home = () => {
    return <div>Home
        <Button onClick={async () => { message.warn('点击了信息') }}>点击</Button>
    </div>;
};

export { Home };