import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {XMarkIcon} from "react-native-heroicons/outline"

const TaskBar = (props) => {
  return (
    <View className="flex-row bg-white ml-10 mr-8 p-5 rounded-xl mb-5 shadow-2xl items-center">
        <View className="w-2 h-2 bg- bg-[#68b8c1] rounded-lg mr-5"/>
        <Text className="justify-between flex-1 text-lg font-semibold">{props.text}</Text>
        <XMarkIcon color={"#2a8a92"}/>
    </View>
  )
}

export default TaskBar