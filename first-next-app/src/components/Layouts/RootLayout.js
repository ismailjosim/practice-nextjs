import React from 'react';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const RootLayout = ({ children }) => {


    const {
        token: { colorBgContainer },
    } = theme.useToken();




    return (
        <Layout className="layout">
            <Header
                style={ {
                    display: 'flex',
                    alignItems: 'center',
                } }
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={ ['2'] }
                    items={ new Array(5).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${ key }`,
                        };
                    }) }
                />
            </Header>
            <Content>
                <div
                    className="site-layout-content"
                    style={ {
                        background: colorBgContainer,
                    } }
                >
                    { children }
                </div>
            </Content>

            <Footer
                style={ {
                    textAlign: 'center',

                } }
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default RootLayout;
