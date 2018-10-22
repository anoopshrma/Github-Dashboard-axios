import React, { Component } from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import Profile from './Profile';
import Repo from './Repo';

class Routing extends Component{
    render(){
        return(
            <Switch>
                                <Route
                                exact 
                                path='/'
                                render={(props)=><Profile  //Here we are adding Routing in the page and didnt use Component={Profile}
                                  user_data={this.props.user_data}//Thats bcoz We had to process lots of data forward whih is done this way.
                                  events_data={this.props.events_data}
                                  following_data={this.props.following_data}
                                  followers_data={this.props.followers_data}/>}/>

                                <Route
                                exact 
                                path='/repo'
                                render={()=><Repo 
                                  repo_data={this.props.repo_data}
                                  />}/>

                                
                              </Switch>
        )
    }
}
export default Routing;