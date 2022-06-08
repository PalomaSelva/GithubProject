import React from 'react';
import {View,Pressable,Image,Text,StyleSheet,SafeAreaView,StatusBar} from 'react-native';

const imageProfile = "https://avatars.githubusercontent.com/u/101755192?v=4"
 
const App = ()=> {
   
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'#14161c'} barStyle="light-content"/>
            <View style={style.content}>
                <Image source={{uri:imageProfile}} style={style.avatar} accessibilityLabel="Foto de Paloma Selva" />  
                <Text style={[style.usuario, style.defaultFont]} accessibilityLabel="Nome Paloma Selva">Paloma Selva</Text>
                <Text style={[style.nickname, style.defaultFont]} accessibilityLabel="Nickname PalomaSelva">PalomaSelva</Text>
                <Text style={[style.bio, style.defaultFont]} accessibilityLabel="Bio">Web developer - HTML | CSS | JS</Text>

                <Pressable onPress={() => console.log('github')} >
                    <View style={style.button}>
                        <Text style={[style.defaultFont,{fontSize:22,textAlign:'center'}]}>Open in Github</Text>
                    </View> 
                </Pressable>
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
    height:280,
    width:280,
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
    padding:5,
    },

    bio:{
    fontSize:18,
    fontWeight:'300',
},
    button:{
    backgroundColor:'#272b33',
    borderRadius:20,
    padding:25,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:20,

}
})