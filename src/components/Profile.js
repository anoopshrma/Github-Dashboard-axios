import React, { Component } from 'react';
import { Card, Col, Row,List, Avatar ,Spin} from 'antd';


class Profile extends Component{
    //Functions to improve COde readabiltiy!
    renderEventFunc(item){
        return(
        <List.Item>
                    <List.Item.Meta
                    
                    title={item.type}
                    description={item.repo.name}
                    />
                </List.Item>)

    }
    renderUserFunc(item){
        return(
            <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar_url} />}
                    title={<a href={item.html_url}>{item.login}</a>}
                    
                    />
                </List.Item>

        )
    }
    renderColumn(title,dataSource,renderItemFunc){
        return(
            <Col span={8}>
        <Card title={title}   >
        <List
                itemLayout="horizontal"
                dataSource={dataSource}
                pagination={{pageSize:5,}}
                renderItem={renderItemFunc}
          /> 
        </Card>
      </Col>

        )
    }
    render(){
        const{user_data, events_data,followers_data,following_data}=this.props;
        //the above method means same as const user_data= this.props.user_data

        return (
            <div >
                {user_data?
                <div>
                <div className='name-container'>
                    <h1>{user_data.name}</h1>
                    <Avatar src={user_data.avatar_url} shape='circle' size='large' icon='user' />
                </div> 
                 <p>{user_data.bio}</p>
                 </div>:
                 <div><Spin/></div>}
                
    <Row gutter={16}>
    {this.renderColumn('Recent Activities',events_data,this.renderEventFunc)}
    {this.renderColumn('Followers',followers_data,this.renderUserFunc)}
    {this.renderColumn('Followers',following_data,this.renderUserFunc)}

    </Row>
  </div>
        )
    }
}
export default Profile;