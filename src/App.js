import React from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,StatusBar} from 'react-native';

const imageProfile = "https://avatars.githubusercontent.com/u/101755192?v=4"

const App = ()=> {
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'#14161c'} barStyle="light-content"></StatusBar>
            <View style={style.content}>
                <Image source={{uri:imageProfile}} style={style.avatar} accessibilityLabel="Paloma Selva" />  
                <Text style={[style.usuario, style.defaultFont]}>Paloma Selva</Text>
                <Text style={[style.nickname, style.defaultFont]}>PalomaSelva</Text>
                <Text style={[style.bio, style.defaultFont,]}>Web developer / Mobile developer - HTML | CSS | JS | React-Native</Text>

            </View>
        </SafeAreaView>
    );
};

export default App

const style = StyleSheet.create({
    container: { //Coluna 
    backgroundColor:'#0A0C10',
    flex:1,
    justifyContent:'center',
    },  

    avatar:{
    height:300,
    width:300,
    borderRadius:300,
    borderColor:'white',
    borderWidth:3,
    /*CENTRALIZAR IMG
    marginLeft:'auto',
    marginRight:'auto',
    */
    },

    content:{
    alignItems:'center',
    
    },

    usuario:{
    fontSize:30,
    fontWeight:'bold',
    marginTop:10,
   
    }, 

    defaultFont:{
    color:'white',
    },

    nickname:{
    fontSize:22,
    color:'#F0F3F6',
    fontWeight:'300',
    },

    bio:{
    fontSize:18,
    fontWeight:'300',
},
})