import React from "react";
import { View,StyleSheet,TouchableOpacity } from "react-native";

import Icon from './BottomBarIcon.jsx';

const BottomMenu = () =>{
    return <>

        <View style={styles.wrap}>
            

            <Icon Name='Heart' number={3}/>

            <TouchableOpacity>
                
                <Icon Name='Hint' number={5}/>
            </TouchableOpacity>

            <TouchableOpacity>
                
                <Icon Name='Next' number={2}/>
            </TouchableOpacity>


        </View>

    </>
}

const styles = StyleSheet.create({
    wrap:{
        // flex:1,
        // maxHeight:50,
        height:70,
        backgroundColor:"#000",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginTop:10,

    }
});

export default BottomMenu;