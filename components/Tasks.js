import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Tasks = (props) => {
  return (
    <View className="bg-white p-4 rounded-2xl flex-row items-center justify-between mb-5">
      <View className="flex-row items-center flex-wrap">
        <TouchableOpacity className="w-6 h-6 bg-[#55BCF6] mr-4 rounded-sm"></TouchableOpacity>
        <Text className="w-max">{props.text}</Text>
      </View>
      <View className="w-3 h-3 border-purple-800 rounded-full"></View>
      

    </View>
  )
}

export default Tasks;