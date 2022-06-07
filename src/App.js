import React from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,StatusBar} from 'react-native';

const imageProfile = "https://avatars.githubusercontent.com/u/101755192?v=4"

const App = ()=> {
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'#14161c'} barStyle="light-content"></StatusBar>
            <View>
                <Image source={{uri:imageProfile}} style={style.avatar} accessibilityLabel="Paloma Selva" />  
                <Text style={style.usuario}>Paloma Selva</Text>
            </View>
        </SafeAreaView>
    );
};

export default App

const style = StyleSheet.create({
    container: {
    backgroundColor:'#0A0C10',
    flex:1,
},  
    avatar:{
    height:350,
    width:350,
    borderRadius:300,
    borderColor:'white',
    borderWidth:3,
    marginLeft:'auto',
    marginRight:'auto',
},

    usuario:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    marginTop:10,
},
})