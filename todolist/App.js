import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import TaskBar from './components/TaskBar';
import { TouchableOpacity } from 'react-native';
import { PlusIcon } from 'react-native-heroicons/outline';
import { useState } from 'react';
import { Keyboard } from 'react-native';

export default function App() {
  const [task,setTask] = useState();

  const [alltasks, setAllTasks] = useState([]);

  const Addtask =()=>{
    Keyboard.dismiss();
    setAllTasks([...alltasks,task]);
    setTask(null);
  }


  const deleteTask = (index)=>{
    let itemscopy = [...alltasks]
    itemscopy.splice(index,1)
    setAllTasks(itemscopy)
  }
  return (
    <SafeAreaView className="bg-[#2a8a92] flex-1">
      <View className="px-10 pt-12 pb-8">
        <Text className="text-3xl font-bold text-white">To-Do List</Text>
      </View>
      <View>
        {alltasks.map((task, index)=>(
        <TouchableOpacity key={index} onPress={()=>deleteTask(index)}>
          <TaskBar  text={task}/>
        </TouchableOpacity>
        ) 
        )}
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} 
      className="absolute bottom-16 ml-10 flex-row justify-center items-center" >
        <View className="pb-3 bg-white py-6 px-7 rounded-full">
          <TextInput className=" w-60" placeholder={"Add a Task"}
          onChangeText={(text)=>setTask(text)}
          value={task}/>
        </View>
        <TouchableOpacity onPress={Addtask}
        className="w-16 h-16 bg- bg-white rounded-full ml-4 items-center pt-3">
          <Text className="text-4xl text-[#2a8a92]">+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


