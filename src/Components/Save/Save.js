import React from "react";
import { TextInput,View,TouchableOpacity,Text} from 'react-native';
import styles from './Save.styles'

const Save = props => {



    return (
        <View style={styles.container}>
                <TextInput 
                    style = {styles.input}
                    placeholder="ToDo.."
                    onChangeText={props.save}
                   
                />
                <TouchableOpacity style = {styles.button} onPress = {props.saveButton} >   
                    <Text style = {styles.buttonText}>Save</Text>
                    
                </TouchableOpacity>
                    
        </View>


    )

}

export default Save;
