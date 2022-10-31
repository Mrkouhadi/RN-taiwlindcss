import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { useColorScheme } from 'nativewind'
import {AntDesign} from '@expo/vector-icons'

const Card = ({title,description,price, image,category}) => {
    const [count, setCount] = useState(1)
    const {colorScheme} = useColorScheme()

    
  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl my-2">
        <View className="bg-white rounded-xl">
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
            <Text className="text-2xl font-extrabold dark:text-white" >${price * count}</Text>
        </View>
            <Text className="p-2 text-sm text-black/60 dark:text-white/70" numberOfLines={2} >{description}</Text>
    </View>
  )
}
export default Card