import React from 'react';
import {View,Text,StyleSheet,SafeAreaView,StatusBar} from 'react-native';

const App = ()=> {
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'#14161c'} barStyle="light-content"></StatusBar>
            <View>
                <Text>
                    GitHub
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default App

const style = StyleSheet.create({
    container: {
    backgroundColor:'#0A0C10',
    flex:1

}

})