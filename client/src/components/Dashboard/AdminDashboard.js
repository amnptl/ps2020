import React from 'react';
import '../../App.css';
import Profile from './Profile/Profile';
import { Route, Link } from 'react-router-dom';

import './dashboard.css';
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import ListProfiles from './ListProfiles/ListProfiles';
const{Header,Footer,Sider,Content}=Layout;
function Dashboard() {
  return (
    <div>
    <Layout>

    <Header style={{padding:10}}>

     <Avatar style={{float:'right'}}icon="User" />
    <Title level={3} style={{color:'white',textAlign:'left'}} >PlatiFi Jobs - Admin Dashboard</Title>
    </Header>
        <Layout>
           <Sider>
               <Menu defaultSelectedKeys={['Dashboard']} mode="inline">
               <Menu.Item key='Dashboard'>
               <Link to="/admindashboard"> Dashboard </Link>
               </Menu.Item>
               <Menu.Item key='ListProfile'>
                <Link to="/admindashboard/listprofiles"> List Profile</Link>
               </Menu.Item>
               {/* <Menu.Item key='ViewProfile'>
                <Link to="/dashboard/viewprofile"> </Link>
               </Menu.Item> */}
             
              
              <Menu.Item>
              <Link to="./"> Logout </Link>
              </Menu.Item>
               </Menu>
           </Sider>
           <Layout>
               <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>

                    
                    <Route path="/admindashboard/listprofiles"><ListProfiles/> </Route>
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
