import React,{useState} from "react";
import {View,Text} from 'react-native';
import styles from './Header.style';


const Header = props => {

    

    
    return(
        <View style = {styles.container}>
            <Text style = {styles.headerText}>TODO LİST</Text>
            <Text style = {styles.counterText}>{props.counter}</Text>
        </View>
    )
}

export default Header;