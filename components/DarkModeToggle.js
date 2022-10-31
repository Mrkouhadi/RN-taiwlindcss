import React from 'react'
import { Switch, Text, View } from 'react-native'
import { useColorScheme } from 'nativewind'

const DarkModeToggle = () => {
  const {colorScheme,toggleColorScheme } = useColorScheme();

  return (
    <View className="p-2 w-full flex-row dark:bg-black items-center justify-between">
        <Text className="font-bold text-blue-900 dark:text-yellow-400">switch to {colorScheme} mode</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
    </View>   
  )
}
export default DarkModeToggle