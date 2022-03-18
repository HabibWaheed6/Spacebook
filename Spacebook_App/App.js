import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createTopTabNavigator} from '@react-navigation/top-tabs';

import LoginScreen from './components/login';
import SignupScreen from './components/feed';
import HomeScreen from './components/HomePage';
import PostScreen from './components/Post';
import LogoutScreen from './components/Logout';
import ProfileScreen from './components/Profile';
import CameraScreen from './components/Camera';
import FeedpageScreen from './components/Feedpage';
import EditProfileScreen from './components/EditProfile';
import FriendsPageScreen from './components/FriendsPage';
import SearchScreen from './components/Search';






const Tab = createBottomTabNavigator();
//const Tab = createTopTabNavigator ();

class App extends Component {

  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen  options={{footerShown: false }} name="Login" component={LoginScreen} />
          <Tab.Screen name="Feed" component={SignupScreen} />
          <Tab.Screen options = {{HeaderShown : false }} Shown name="Home" component={HomeScreen} />
          <Tab.Screen name="Post" component={PostScreen} />
          <Tab.Screen name="Friends" component={FriendsPageScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Camera" component={CameraScreen} />
          <Tab.Screen name ="post page" component={FeedpageScreen} />
          <Tab.Screen name="EditProfile" component={EditProfileScreen} />
          <Tab.Screen name="Logout" component={LogoutScreen} />
          
          
          </Tab.Navigator>
          
      </NavigationContainer>
    );
  }
   
}


export default App;
