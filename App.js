import React, { useState } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Platform } from 'react-native';
import {Tasks} from './components/';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => { 
    if (!task) {
      return; // Exit the function if the task is empty
    }
    Keyboard.dismiss(); {/**This closes the keyboard after the task is added to the list. */}
    setTaskItems([...taskItems, task]); {/**...taskItems is a spread operator that copies the existing taskItems array and adds the new task to the end of the array. */}
    setTask(null); {/**This clears the input field after the task is added to the list. */}
    

  }

  const completeTask = (index) => { 
    let itemsCopy = [...taskItems]; {/**This creates a copy of the taskItems array. */}
    itemsCopy.splice(index, 1); {/**This removes the task at the specified index from the array. */}
    setTaskItems(itemsCopy); {/**This updates the taskItems array with the new array that does not contain the task that was completed. */}
  }

  return (
    <View className="flex-auto bg-[#cdced0] ">
      <ScrollView classname="flex-grow">
        <View className="pt-[80px] px-[20px]"> 
          <Text className="text-2xl font-bold  mb-5">Today's Tasks 💪 </Text>
          <View className="mt-30">

            {taskItems.map((item,index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Tasks text={item} />
                </TouchableOpacity>   
              )
            })
          }

          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="absolute bottom-[60] w-full justify-around align-center flex-row">
        <TextInput 
          className="px-[15] py-[15px] bg-[#ffffff] rounded-3xl  border-slate-950 w-[70vw]"
          placeholder={"What are your plans today? 😊"}
          onChangeText={task => setTask(task)}
          value={task}>
        </TextInput>
        <TouchableOpacity onPress={() => handleAddTask() }> 
          <View className="w-[60px] h-[60px] bg-[#FFF] rounded-full justify-center items-center">
            <Text className="font-bold text-4xl">+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
     
    

      
     
    </View>
  );
}


