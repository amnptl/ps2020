import React from 'react';
import '../../App.css';
import Profile from './Profile/Profile';
import { Route, Link } from 'react-router-dom';

import './dashboard.css';
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import ViewProfile from './ViewProfile/ViewProfile';
const{Header,Footer,Sider,Content}=Layout;
function Dashboard() {
  return (
    <div>
    <Layout>

    <Header style={{padding:10}}>

     <Avatar style={{float:'right'}}icon="User" />
    <Title level={3} style={{color:'white',textAlign:'left'}} >PlatiFi Jobs</Title>
    </Header>
        <Layout>
           <Sider>
               <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
               <Menu.Item key='Dashboard'>
               <Link to="/dashboard"> Dashboard </Link>
               </Menu.Item>
               <Menu.Item key='CreateProfile'>
                <Link to="/dashboard/createprofile"> Create Profile</Link>
               </Menu.Item>
               <Menu.Item key='ViewProfile'>
                <Link to="/dashboard/viewprofile"> View Profile</Link>
               </Menu.Item>
               <Menu.Item key='StudentProfiles'>
                <Link to="/student-profiles"> Student Profiles</Link>
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
              <Menu.Item>
              <Link to="./"> Logout </Link>
              </Menu.Item>
               </Menu>
           </Sider>
           <Layout>
               <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>

                    <Route path="/dashboard/createprofile"><Profile/> </Route>
                    <Route path="/dashboard/viewprofile"><ViewProfile/> </Route>
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
