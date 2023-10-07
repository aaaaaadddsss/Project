import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style = {styles.Container}>
            <TouchableOpacity
                onPress={()=>navigation.navigate("PresetScreen")}>
                <Image 
                    source={require("../assets/LogoRed.png")}
                    style = {styles.LogoImg}/>
            </TouchableOpacity>  
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#24272A",
        alignItems: 'center',
        justifyContent: 'center'
    },
    LogoImg: {
        width: 200,
        height: 200,
    },
});