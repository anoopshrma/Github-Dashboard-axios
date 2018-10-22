//"https://api.github.com/users/anoopshrma/events{/privacy}"
//"https://api.github.com/users/anoopshrma/followers"
//"https://api.github.com/users/anoopshrma/following{/other_user}"
//"https://api.github.com/users/anoopshrma/repos"
//"https://github.com/anoopshrma"





import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'antd/dist/antd.css'; 
import { Layout,Input} from 'antd';
import SideMenu from './components/SideMenu';
import Routing from './components/Routing';

const { Header, Content, Footer, Sider } = Layout;
const Search = Input.Search;
class App extends Component {
  state={
    user_data:null,
    repo_data:[],
    events_data:[],
    followers_data:[],
    following_data:[],
  }

  fetchData(username){
    axios.get(`https://api.github.com/users/${username}`).then((user_resp)=>
      {
        this.setState({
          user_data:{
            name:user_resp.data.name,
            bio:user_resp.data.bio,
            avatar_url:user_resp.data.avatar_url,
            followers:user_resp.data.followers,
            following:user_resp.data.following,

          }
        })
      }).catch((error)=>{
        console.log('error');
      });

      //Now for Repos
      axios.get(`https://api.github.com/users/${username}/repos`).then((repo_resp)=>{
        this.setState({
          repo_data:repo_resp.data.map(repo=>({
            id:repo.id,
            name:repo.name,
            owner:repo.owner,
            description:repo.description,
            html_url:repo.html_url,
          }))
        })
      }).catch((error)=>{
        console.log('error');
      });

      //EVENTS of a User 
      axios.get(`https://api.github.com/users/${username}/events`).then((event_resp)=>{
        this.setState({
          events_data:event_resp.data.map(event=>({
            type:event.type,
            repo:event.repo,
          }))
        })
      }).catch((error)=>{
        console.log('error');
      });

      //For follower of a user
      axios.get(`https://api.github.com/users/${username}/followers`).then((follower_resp)=>
    {
      this.setState({
        followers_data:follower_resp.data.map(follow=>({
          login:follow.login,
          html_url:follow.html_url,
          avatar_url:follow.avatar_url,
        }))
      })
    }).catch((error)=>{
      console.log('error');
    });
//For finding User FOllowers 
    axios.get(`https://api.github.com/users/${username}/following`).then((following_resp)=>{
      this.setState({
        following_data:following_resp.data.map(following=>({
          login:following.login,
          html_url:following.html_url,
          avatar_url:following.avatar_url
        }))
      })
    }).catch((error)=>{
      console.log('error');
    });


  }
  // componentDidMount(){
  //      this.fetchData('anoopshrma'); 
  // }
  render() {
    
    return (
      <Layout>
                <Sider style={{ overflow: 'auto', height: '100vh'}}>
                  <div className="logo" />
                  <SideMenu/>
                </Sider>
                <Layout style={{ marginLeft: 200 }} style={{height:'100vh'}}>
                            <Header style={{ background: '#fff', padding: 0 }} >
                            <Search
                            placeholder="Github Username"
                            onSearch={value => this.fetchData(value)}
                            enterButton
                            style={{margin:'10px',width:'300px'}}
                          />
                            </Header>
                            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                              <div style={{ padding: 24, background: '#fff' }}>
                            {/* For Route  */}
                              <Routing 
                              user_data={this.state.user_data}//Thats bcoz We had to process lots of data forward whih is done this way.
                              events_data={this.state.events_data}
                              following_data={this.state.following_data}
                              followers_data={this.state.followers_data}
                              repo_data={this.state.repo_data}/>
                              </div>
                            </Content>
                
                </Layout>
  </Layout>
     );
  }
}

export default App;
