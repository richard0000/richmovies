import React from "react";
import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";

const Main = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="movies" onClick={() => navigate("/")}>
            Movies
          </Menu.Item>
          <Menu.Item key="tv-shows">TV Shows</Menu.Item>
          <Menu.Item key="people">People</Menu.Item>
          <Menu.Item key="more">More</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        &copy; 2021 - All rights reserved
      </Footer>
    </Layout>
  );
};

export default Main;
