import React,{useEffect, useState} from 'react';
import {View,Text, FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import Save from './Components/Save/Save';
import Header from './Components/Header/Header';

function App() {

    const [toDo, setToDo] = useState("");

    const [task, setTask] = useState([]);

    const [counter, setCounter] = useState(0);


    const saveToDo = text => {setToDo(text)};

    

    const saveButtonPress = () => {
        if(toDo === "") {
            alert("Empty Text");
        } else {
            setTask([...task,toDo]);
            setToDo("");  
            setCounter(counter + 1); 
                   
        }
        

        
     }

     const deleteButton = (index) => {
        const deletedTask = [...task];
        deletedTask.splice(index,1);
        setTask(deletedTask);
        setCounter(counter - 1);
     }

     

     const renderToDo = ({item , index}) => 
     <View style = {styles.toDo}>
         <Text>{item}</Text>
         <TouchableOpacity onPress={() => deleteButton(index)}>
             <Text>Done</Text>
         </TouchableOpacity>
     </View>

    return(
        <View style = {styles.container}>
            <Header  counter = {counter}/>
            <FlatList
            keyExtractor={item => item + Date.now() + Math.random()} 
            data = {task}
            renderItem =  {renderToDo}
            />
            <View>
                <Save  
                    save = {saveToDo}
                    saveButton = {saveButtonPress} 
                />
            </View>
        </View>
    )
}



export default App;


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    },
    toDo : {
        backgroundColor : 'green',
        borderRadius : 10,
        padding : 10,
        margin : 5,
        flexDirection : 'row',
        justifyContent : 'space-between'
        
    }
})