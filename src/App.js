import React, { Component } from 'react';
import {
    Layout, Menu, Icon,
} from 'antd';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './views/login/index'
import User from './views/user/index'
import Nav from './router/Nav'
import Auth from './views/auth/index'
import NotMatch from './views/notMatch/index'
const {
    Header, Content, Footer, Sider,
} = Layout;
class App extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    handleClick = e => {
        console.log(e);
        // this.setState({
        //     current: e.key
        // });
    };
    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        trigger={null}
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className='logo' style={{ color: '#fff' }}></div>
                        <Nav />
                    </Sider>
                    <Layout>
                        <Header style={{ background: "#424242 !important", padding: 0, paddingLeft: "20px" }} ><Icon
                            className="trigger"
                            type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                            onClick={this.toggle}
                            style={{ fontSize: 20, color: '#fff' }}
                        /></Header>
                        <Content style={{ margin: '16px 16px', position: 'relative', }}>
                            <Switch>
                                <Route exact path="/" component={Login} />
                                <Route exact path="/user" component={User} />
                                <Route exact path="/auth" component={Auth} />
                                <Route component={NotMatch} />

                            </Switch>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2018 Created by Ant UED
                    </Footer>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
