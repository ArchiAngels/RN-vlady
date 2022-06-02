import React from 'react';
import { Text, View, Image, TouchableOpacity,StyleSheet,Dimensions } from 'react-native';
import TextQuestion from '../textQuestion.js';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Question = () => {
  return <>
    <View style={styles.wrapper}>
        <View style={styles.image}></View>

        <Text style={styles.questionDetails}>{TextQuestion}</Text>

        <View style={styles.wrapButtons}>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Answer 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Answer 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Answer 3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Answer 4</Text>
                </TouchableOpacity>

        </View>

        <Text style={styles.timer}>Timer</Text>
    </View>
  
  </>
    
  
}

const styles = StyleSheet.create({
    wrapper:{
        // flex:1,
        // width:WIDTH,
        // height:50,
        // maxHeight:100,
        // flexDirection:'row',
        // paddingTop:40,
        // paddingLeft:15,
        padding:10,
        alignItems:"center",
    },
    image:{
        width: 326,
        height: 278,
        borderRadius:50,
        backgroundColor:"#000"
    },
    questionDetails:{
        fontSize:16,
        fontWeight:"600",
        marginTop:30,
        marginBottom:30,
    },
    wrapButtons:{
        // flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"space-evenly",
        maxHeight:100,
    },
    button:{
        width: 147,
        height: 40,
        backgroundColor:"#000",
        borderRadius:50,
        marginTop:10,
        
    },
    buttonText:{
        textAlign:"center",
        color:"#fff",
        fontSize:16,
        fontWeight:"500",
        lineHeight:40
    },
    timer:{
        fontSize:14,
        fontWeight:"500",
        color:"#00000060",
        marginTop:30,
    }

});

export default Question;