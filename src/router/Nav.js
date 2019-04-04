import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";


const SubMenu = Menu.SubMenu;

export default class Nav extends Component {

    state = {
        theme: "dark",
        current: [],
        open: ''
    }

    handleClick = ({ item, key, keyPath }) => {
        this.setState({
            current: [key]
        })
    }
    handleChange = (e) => {
        this.setState({
            open: e[e.length - 1]
        })
    }
    componentDidMount() {
        console.log(window.location.pathname)
        let url = window.location.pathname
        this.setState({
            current: [url],
            open: url
        })
    }
    render() {
        return (
            <Menu
                mode="inline"
                theme={this.state.theme}
                onClick={this.handleClick}
                onOpenChange={this.handleChange}
                openKeys={[this.state.open]}
                selectedKeys={this.state.current}
            >
                <SubMenu
                    key="/user"
                    title={
                        <span>
                            <Icon type="credit-card" />
                            <span>用户管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="/user">
                        <Link to={`/user`}>用户管理</Link>
                    </Menu.Item>

                </SubMenu>

                <Menu.Item key="/auth">
                    <Icon type="file" />
                    <Link to={`/auth`}>权限管理</Link>
                </Menu.Item>

            </Menu >
        )
    }
}