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
        

     </Layout>

  </div>

  );
}

export default Dashboard;
