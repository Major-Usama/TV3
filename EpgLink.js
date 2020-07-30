
import React from 'react';
import {  View,TextInput, } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Badge,Textarea } from 'native-base';

export default class  EpgLink extends React.Component {


  
  
  render()
  {

    
    

    return (

      
        <Container style={{backgroundColor:'black',flex:1}}>
        <Header style={{backgroundColor:'#262628',flexDirection:'row',justifyContent:'space-between',alignItems:'center',
    
    }}>

         <Text onPress={()=> this.props.navigation.navigate('EpgScreen')}  style={{color:'red',textDecorationLine:'underline',}}>Cancel</Text>
         <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>XMLTV Link</Text>
         <Text style={{color:'red',textDecorationLine:'underline',}}>Save</Text>
       
        </Header>


        <Content>

        <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0,height:50,padding:10
   , flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434',marginTop:'10%',borderBottomColor:'#343434'
  }}>
     
                        
                        <Textarea style={{fontSize:16}} rowSpan={1}  placeholder="New Link" />
    </View>

    <View style={{backgroundColor:'#262628',borderColor:'light-grey',borderWidth:0.5,height:150,padding:10
   , flexDirection:'row',justifyContent:'space-between',borderTopColor:'#343434',
  }}>
     
                      
                        
                        <Textarea  style={{fontSize:16}} rowSpan={5}  placeholder="http:\\" />

    </View>

    <View>
        <Text style={{color:'grey',marginHorizontal:10,marginVertical:7}}>
            URL should return XMLTV Content
        </Text>
    </View>
        </Content>


        
        
        

        
    
      </Container>
      
    


    );
  
  
    }

  }
