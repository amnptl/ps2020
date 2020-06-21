import React from 'react';
import {Row, Col, Card, Table, Tabs, Tab,Pagination} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Aux from "./hoc/_Aux";
import '../../App.css';
import avatar1 from './images/avatar-1.jpg';
import avatar2 from './images/avatar-2.jpg';
import avatar3 from './images/avatar-3.jpg';
import './display.css';
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
//import './../node_modules/font-awesome/scss/font-awesome.scss';

import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';

const{Header,Footer,Sider,Content}=Layout;



class Display extends React.Component {
    render() {
   

     return (


            <Aux>
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
               <Link to="/dashboard">Profiles </Link>
               </Menu.Item>
               </Menu>
           </Sider>
           <Layout>
                  <Content style={{ padding: '0 40px' }}>
                   <Row>
                    <Col md={6} xl={12}>
                        <Card className='Student Profiles'>
                            <Card.Header>
                                <Card.Title as='h5'>Student Profiles</Card.Title>
                            </Card.Header>

                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                            
                                    <tbody>
                                    <tr className="unread">
                                        <td><img style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <h6 >Jatin Arora</h6>
                                            <p className="m-0">Software Developer</p>
                                        </td>
                                        <td>
                                            <h6><i/>BITS Pilani</h6>
                                        </td>
                                        <td>
                                            <h6><i/>B.E. Computer Science</h6>
                                        </td>
                                     
                                        <td><a color={{color:'black'}}>View Profile</a></td>
                                    </tr>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">Mayank Gupta</h6>
                                            <p className="m-0">Content Developer</p>
                                        </td>
                                        <td>
                                            <h6 ><i /> IIT DELHI</h6>
                                        </td>
                                       <td>
                                            <h6><i/>B.E. Chemical</h6>
                                        </td>
                                     
                                        <td><a color={{color:'black'}}>View Profile</a></td>
                                        
                                    </tr>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">Aditya Bakliwal</h6>
                                            <p className="m-0">Data Analyst</p>
                                        </td>
                                        <td>
                                            <h6 ><i />IIT PATNA</h6>
                                        </td>
                                    <td>
                                            <h6><i/>B.E. Chemical</h6>
                                        </td>
                                     
                                        <td><a color={{color:'black'}}>View Profile</a></td>
                                    </tr>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">Harshal Jindal</h6>
                                            <p className="m-0">Web Designer</p>
                                        </td>
                                        <td>
                                            <h6 ><i />IIT KANPUR</h6>
                                        </td>
                                       <td>
                                            <h6><i/>B.E. Electronics</h6>
                                        </td>
                                     
                                        <td><a color={{color:'black'}}>View Profile</a></td>
                                    </tr>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">Aman Arora</h6>
                                            <p className="m-0">Video Editor</p>
                                        </td>
                                        <td>
                                            <h6 ><i />NIT DELHI</h6>
                                        </td>
                                        <td>
                                            <h6><i/>B.E. Computer Science</h6>
                                        </td>
                                     
                                        <td><a color={{color:'black'}}>View Profile</a></td>
                                    </tr>
                                     <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">Bhavi Garg</h6>
                                            <p className="m-0">Developer</p>
                                        </td>
                                        <td>
                                            <h6 ><i />NIT TRICHY</h6>
                                        </td>
                                        <td>
                                            <h6><i/>B.E. Computer Science</h6>
                                        </td>
                                     
                                        <td><a color={{color:'black'}}>View Profile</a></td>
                                    </tr>
                                     <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">Jatin Garg</h6>
                                            <p className="m-0">Market Research</p>
                                        </td>
                                        <td>
                                            <h6 ><i />IIM ROHTAK</h6>
                                            </td>
                                        <td>
                                            <h6><i/>B.E. Computer Science</h6>
                                        </td>
                                     
                                        <td><a color={{color:'black'}}>View Profile</a></td>
                                    </tr>
                                     <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">Shubh Arora</h6>
                                            <p className="m-0">Data Analyst</p>
                                        </td>
                                        <td>
                                            <h6 ><i />NIT GOA</h6>
                                        </td>
                                        <td>
                                            <h6><i/>B.E. Civil</h6>
                                        </td>
                                     
                                        <td><a color={{color:'black'}}>View Profile</a></td>
                                    </tr>
                                     <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">Khushboo Garg</h6>
                                            <p className="m-0">Video Editor</p>
                                        </td>
                                        <td>
                                            <h6 ><i />IIT GOA</h6>
                                        </td>
                                     <td>
                                            <h6><i/>MBA Marketing</h6>
                                        </td>
                                     
                                        <td><a color={{color:'black'}}>View Profile</a></td>
                                    </tr>
                                     <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">Bhoomika Garg</h6>
                                            <p className="m-0">Developer</p>
                                        </td>
                                        <td>
                                            <h6 ><i />NIT DELHI</h6>
                                        </td>
                                        <td>
                                            <h6><i/>B.E. Computer Science</h6>
                                        </td>
                                     
                                        <td><a color={{color:'black'}}>View Profile</a></td>
                                    </tr>
                                     <tr className="unread">
                                        <td><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></td>
                                        <td>
                                            <h6 className="mb-1">Richa Jindal</h6>
                                            <p className="m-0">Video Editor</p>
                                        </td>
                                        <td>
                                            <h6 ><i />ISM DHANBAD</h6>
                                        </td>
                                         <td>
                                            <h6><i/>B.E Electrical</h6>
                                        </td>
                                     
                                        <td><a color={{color:'black'}}>View Profile</a></td>
                                    </tr>
                                    </tbody>

                                </Table>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                    
                </Row>
                  </Content>
               <Footer>
<Pagination>
                              <Pagination.First />
                              <Pagination.Prev />
                              <Pagination.Item active>{1}</Pagination.Item>
                              <Pagination.Ellipsis />

                              <Pagination.Item>{10}</Pagination.Item>
                              <Pagination.Item>{11}</Pagination.Item>
                              <Pagination.Item >{12}</Pagination.Item>
                              <Pagination.Item>{13}</Pagination.Item>
                              <Pagination.Item disabled>{14}</Pagination.Item>

                              <Pagination.Ellipsis />
                              <Pagination.Item>{20}</Pagination.Item>
                              <Pagination.Next />
                              <Pagination.Last />
                        </Pagination>
               </Footer>
           </Layout>
        </Layout>

     </Layout>

  </div>

                
                        
            </Aux>
        );
    }
}



export default Display;

