import React, { Component } from 'react';
import { Table, Divider, Icon } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render:( text,record) => <a href={record.html_url}>{text}</a>,
}, {
  title: 'Owner',
  dataIndex: 'owner',
  key: 'owner',
  render:( text,record) => <p> {record.owner.login}{text}</p>,
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description',
  render:( text,record) => <p >{record.description}>{text}</p>,
},];


class Repo extends Component{
    render(){
        return (
            <div><Table columns={columns} dataSource={this.props.repo_data.map(repo=>({
                key:repo.id,
                name:repo.name,
                owner:repo.owner.login,
                description:repo.description,
                html_url:repo.html_url

            }))} /></div>
        )
    }
}
Repo.defaultProps={
    repo_data:[],
}
export default Repo;
