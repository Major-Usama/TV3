import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LaunchScreen from '../LaunchScreen.js'
import EpgLink from '../EpgLink.js'
import IptvLink from '../IptvLink'
import EpgScreen from '../EpgScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons ,MaterialCommunityIcons} from '@expo/vector-icons'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()




function getHeaderTitle(route) {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'Home'
  
    switch (routeName) {
      case 'LaunchScreen':
        return 'LaunchScreen'
      case 'EpgScreen':
        return 'EpgScreen'
    }
  }


export default function MainTabNavigator() {
    return (
        <NavigationContainer>
      <Tab.Navigator
        
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'IPTV') {
                iconName = focused
                  ? 'youtube-tv'
                  : 'youtube-tv';
              } else if (route.name === 'EPG') {
                iconName = focused ? 'timetable' : 'timetable';
              }
  
              // You can return any component that you like here!
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: '#808080',
            activeBackgroundColor:'#510004',
            inactiveBackgroundColor:'#000',
            
          }}
        >



        <Tab.Screen name='IPTV' component={HomeStackScreen} />
        <Tab.Screen name='EPG' component={SearchStackScreen} />
        
        
      </Tab.Navigator>
      </NavigationContainer>
    )
  }
  
  
  const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode='none'>
    <HomeStack.Screen name="LaunchScreen" component={LaunchScreen} />
    <HomeStack.Screen
      name="IptvLink"
      component={IptvLink}
      
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
    <SearchStack.Navigator headerMode='none'>
      <SearchStack.Screen name="EpgScreen" component={EpgScreen} />
      <SearchStack.Screen name="EpgLink" component={EpgLink} />
    </SearchStack.Navigator>
  );
  
  

