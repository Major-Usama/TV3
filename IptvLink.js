
import React from 'react';
import {  View,TextInput, } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Badge } from 'native-base';

export default class  IptvLinl extends React.Component {


  
  
  render()
  {

    const {navigation}=this.props.navigation
    

    return (

      
        <Container style={{backgroundColor:'black',flex:1}}>
        <Header style={{backgroundColor:'#262628',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

         <Text onPress={()=>this.props.navigation.navigate('LaunchScreen')} style={{color:'red',textDecorationLine:'underline',}}>Cancel</Text>

         <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>M3U Link</Text>
         <Text style={{color:'red',textDecorationLine:'underline',}}>Save</Text>
       
        </Header>


        <Content>

        <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0,height:50,padding:10
   , flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434',marginTop:'10%',borderBottomColor:'#343434'
  }}>
     
                        <Text style={{color:'white',fontSize:16}}>New Link</Text>

    </View>

    <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0.5,height:150,padding:10
   , flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434',
  }}>
     
                        <Text style={{color:'white',fontSize:16}}>http://</Text>

    </View>

    <View>
        <Text style={{color:'grey',marginHorizontal:10,marginVertical:7}}>
            URL should return M3U Content
        </Text>
    </View>
        </Content>

        
        
        

        
    
      </Container>
      
    


    );
  
  
    }

  }
