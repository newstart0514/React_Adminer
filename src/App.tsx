import './App.css'
import logoImg from '@/assets/images/Adminerlogo.png'
import logo from '@/assets/images/AdminerLogo2.png'
import React, { useState } from 'react';
import {
    AccountBookOutlined,
    BugOutlined,
    PieChartOutlined,
    ShopOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import * as url from "url";
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('面板', '1', <PieChartOutlined />),
    getItem('账单', '2', <AccountBookOutlined />),
    getItem('用户', 'sub1', <UserOutlined />, [
        getItem('商家', '3'),
        getItem('会员', '4'),
        getItem('普通用户', '5'),
    ]),
    getItem('店铺管理', 'sub2', <ShopOutlined />, [
        getItem('优质店铺', '6'),
        getItem('普通店铺', '8')
    ]),
    getItem('管理日志', '9', <BugOutlined />),
];

// 列表展示
const renderLogo = (renderMode:boolean) => {
    if(!renderMode) {
        return <div style={{height: 70, margin: 20, backgroundImage: `url(${logoImg})`, backgroundSize: 'cover'}}/>;
    }else {
        return <div style={{height: 50, margin: 20, backgroundImage: `url(${logo})`, backgroundSize: 'cover'}}/>;
    }
}

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                {renderLogo(collapsed)}
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Yuli's Adminer ©2023 Created by YouLi</Footer>
            </Layout>
        </Layout>
    );
};

export default App;
