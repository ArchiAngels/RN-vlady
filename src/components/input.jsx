import React from "react";
import { View,
        TextInput,
        StyleSheet,
        TouchableOpacity,
        Dimensions,
        Text,
} from "react-native";  

import Lock from '../../assets/input/lock.svg';
import User from '../../assets/input/user.svg';
import Eye from '../../assets/input/eye.svg';

let maxWidth = Dimensions.get('window').width;
console.log(maxWidth)

const Input = (props) =>{
    let [Pass,setPass] = React.useState('');
    let [isVisible,setVisible] = React.useState(true);

    console.log("from rerender::",Pass,'isVisible::',isVisible);

    
    return <>


        <View style={{
                ...styles.container,
                marginBottom:props.marginBottom || 0
            }}>
            <View style={styles.icon}>
            {props.type == '02' ?
                <Lock width={16} height={18} style={styles.leftIcon}/>
                :
                <User width={16} height={18} style={styles.leftIcon}/> 
            }
            </View>
            <TextInput 
                placeholder={props.placeholder} 
                placeholderTextColor="#00000025"
                style={{
                        ...styles.input,
                        fontFamily:props.font,
                        // color:'#ff0000',
                    }} 
                onChangeText={text=>{
                    
                    setPass(text);
                }}
                secureTextEntry={props.type == '02' ? isVisible : false}
                
            ></TextInput>
            {props.type == '02' ?
                <TouchableOpacity onPress={()=>{setVisible(!isVisible)}} style={styles.ShowHide}>
                    <Eye width={16} height={18} style={styles.rightIcon}/>
                </TouchableOpacity>
                :
                <></>
            }

        </View>

    </>
}

const styles = StyleSheet.create({
    container:{
        width:maxWidth * 0.92,
        height:41,
        borderRadius:10,
        backgroundColor:"#e5e5e5",
        flexDirection:'row',
        alignItems:"center",
        paddingLeft:16,
        paddingRight:16,
        position:"relative"

    },
    leftIcon:{
        
    },
    rightIcon:{
        // marginLeft:15,
    },
    input:{
        // paddingLeft:10,
        maxWidth:maxWidth * 0.6,
        width:maxWidth * 0.6,
        fontSize:14,
        lineHeight:400,
        fontWeight:"500",

        marginLeft:12,
        marginRight:12,
        letterSpacing:0.36,

    },
    ShowHide:{
        // backgroundColor:"#000",
        // borderColor:"#000",
        // borderWidth:1,
        padding:15,
        position:"absolute",
        // left:100,
        right:10
    },  

})

export default Input;