
import React from 'react';
import {  View,TextInput, } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Badge } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class  LaunchScreen extends React.Component {


  state = {
    loading: true
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ loading: false })
  }
  render()

  {
    const {navigation}=this.props.navigation

    if (this.state.loading) {
      return (
        <View></View>
      );
    }

    return (
    

      <Container style={{flex:1,backgroundColor:'black'}}>
        <Header style={{backgroundColor:'black'}}/>
        <Content 

              
        >
        
        <View>
          <Text style={{fontSize:35,color:'white',fontWeight:'bold',marginHorizontal:14}}>IPTV</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',borderColor:'#262628',borderWidth:1,
       borderRadius:10,height:40,padding:10,backgroundColor:'#262628',marginVertical:7, marginHorizontal:15}}>
      <Icon name="search"  type='EvilIcons' color="grey" />
      <TextInput
      placeholder="Search"
      style={{marginLeft:5,}}
      />
    </View>

    <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0,height:50,padding:10
    ,marginVertical:2,flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434'
  }}>

    <Icon name='back-in-time' type='Entypo'  style={{color:'grey',fontSize:18,alignSelf:'center'}}/>
    <Text style={{fontSize:16,color:'white',fontWeight:'400',position:'absolute',alignSelf:'center',left:45}}>Most Recent</Text>

    
    <Icon name='right' type='AntDesign'  style={{fontSize:18,alignSelf:'center'}} />
    
   

    </View>

     <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0.5,height:50,padding:10
    ,marginVertical:-2,flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434'
  }}>

    <Icon name='star' type='EvilIcons'  style={{color:'grey',fontSize:20,alignSelf:'center'}}/>
    <Text style={{fontSize:16,color:'white',fontWeight:'400',position:'absolute',alignSelf:'center',left:45}}>Favorites</Text>

    
    <Icon name='right' type='AntDesign'  style={{fontSize:18,alignSelf:'center'}} />
    
   

    </View>


    <View style={{backgroundColor:'black',borderColor:'light-grey',borderWidth:0,height:50,padding:10
    ,flexDirection:'row',justifyContent:'space-between',alignItems:'center'
  }}>

  
    <Text style={{fontSize:12,color:'grey',fontWeight:'400',alignSelf:'center',fontWeight:'bold'}}>M3U LINKS</Text>


    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('IptvLink')}>
    <Icon name='pluscircle' type='AntDesign'  style={{fontSize:18,alignSelf:'center',color:'red'}} />
    </TouchableOpacity>
    
   
    
   
     
    </View>

    <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0,height:50,padding:10
   , flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434'
  }}>
     
    </View>

    <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0.5,height:50,padding:10
    ,flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434',borderBottomColor:'#343434'
  }}>
     
    </View>


    <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0,height:50,padding:10
    ,flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434',
  }}>
     
    </View>

    <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0.5,height:50,padding:10
    ,flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434',borderBottomColor:'#343434'
  }}>
     
    </View>

    <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0.5,height:50,padding:10
    ,flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434',borderBottomColor:'#343434'
  }}>
     
    </View>
    <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0.5,height:50,padding:10
    ,flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434',borderBottomColor:'#343434'
  }}>
     
    </View>

    <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0.5,height:50,padding:10
    ,flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434'
  }}>
     
    </View>

        </Content>
        
        
       
      </Container>
    );
  }
  
  
}

