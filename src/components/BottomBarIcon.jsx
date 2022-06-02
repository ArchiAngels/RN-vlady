import React from "react";
import { View,Text,StyleSheet } from "react-native";

import Heart from "../../assets/svg/lives.svg";
import Next from "../../assets/svg/next.svg";
import Hint from "../../assets/svg/help.svg";

let width = 35;
let height = 35;

const Icon = (props)=>{
    return <>
    
        <View>
            {returnIcon(props.Name)}
            <View style={styles.wrap}>
                <View style={styles.circle}>
                    <Text style={styles.text}>{props.number}</Text>
                </View>
            </View>
        </View>
    </>
}

export default Icon;

const styles =  StyleSheet.create({
    wrap:{
        position:"absolute",
        marginTop:20,
        marginLeft:20,

    },
    circle:{
        width:15,
        height:15,
        backgroundColor:"#fff",
        borderRadius:50,
        position:'relative',
    },
    text:{
        color:"#000",
        fontSize:12,
        fontWeight:"600",
        textAlign:"center"
    }
})

function returnIcon(Name){
    switch(Name){
        case "Heart":return <Heart width={width} height={height}/>;
        case "Next":return <Next width={width} height={height}/>;
        case "Hint":return <Hint width={width} height={height}/>;
        case 'default': return 0;
    }
}