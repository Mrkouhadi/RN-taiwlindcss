import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useColorScheme } from 'nativewind'
import {AntDesign} from '@expo/vector-icons'

const Card = ({title,description,price, image,category}) => {
    const [count, setCount] = useState(1)
    const {colorScheme} = useColorScheme()

  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl pb-2 my-2">
        <View className="bg-white rounded-2xl">
            <Image source={{uri:image}} className="w-full h-72" style={{resizeMode:'contain'}}/>
        </View>
        <View className="mt-3 p-2">
            <Text className="text-black/60 dark:text-white/70" >{category}</Text>
            <Text className="text-lg font-semiBold text-black dark:text-white " >{title}</Text>
        </View>
        <View className="flex-row justify-between items-center p-2">
            <View className="flex-row gap-2 items-center">
                <AntDesign name="minuscircleo" size={26} 
                        color={colorScheme === 'dark'?"white":'black'} 
                        onPress={()=> setCount(count <= 1 ? count : count-1)}  
                />
                <Text className="text-bold text-lg text-green-400 dark:text-green/50">{count}</Text> 
                <AntDesign name="pluscircleo" size={26} 
                        color={colorScheme === 'dark'?"white":'black'} 
                        onPress={()=> setCount(count+1)}
                />
            </View>
            <Text className="text-2xl font-extrabold dark:text-white" >${(price * count).toFixed(2)}</Text>
        </View>
            <Text className="p-2 text-sm text-black/60 dark:text-white/70" numberOfLines={2} >{description}</Text>
            <TouchableOpacity className="bg-black dark:bg-white h-12 mx-2 rounded-2xl items-center justify-center ">
                <Text className="text-white dark:text-black text-xl">Add to Cart</Text>
            </TouchableOpacity>
    </View>
  )
}
export default Card