import React from 'react';
import '../../App.css';
import Profile from './Profile';
import { Route } from 'react-router-dom';

import './dashboard.css';
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
const{Header,Footer,Sider,Content}=Layout;
function Dashboard() {
  return (
    <div>
    <Route path="/dashboard/profile"><Profile/> </Route>
    <Layout>

    <Header style={{padding:10}}>

     <Avatar style={{float:'right'}}icon="User" />
    <Title level={3} style={{color:'white',textAlign:'left'}} >PlatiFi Jobs</Title>
    </Header>
        <Layout>
           <Sider>
               <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
               <Menu.Item key='Dashboard'>
               Dashboard
               </Menu.Item>
              <SubMenu
              title={
            <span>

              <span>Your Jobs</span>
            </span>
          }>
              <Menu.ItemGroup key='Your Jobs' title='Job Details'>
              <Menu.Item>Job1</Menu.Item>
              <Menu.Item>Job2</Menu.Item>
              <Menu.Item>Job3</Menu.Item>



              </Menu.ItemGroup>

              </SubMenu>
              <SubMenu
              title={
            <span>

              <span>Your Account</span>
            </span>
            }>
              <Menu.ItemGroup key='Your Jobs'>
              <Menu.Item>Profile</Menu.Item>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Item>Help</Menu.Item>



              </Menu.ItemGroup>

              </SubMenu>

               </Menu>
           </Sider>
           <Layout>

               <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>

                    </Breadcrumb>
                    <div style={{background:'#fff'}}className="site-layout-content"></div>
                  </Content>
               <Footer></Footer>
           </Layout>
        </Layout>

     </Layout>

  </div>

  );
}

export default Dashboard;
