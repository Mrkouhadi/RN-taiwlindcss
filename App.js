import { StatusBar } from 'expo-status-bar';
import { Switch,Text, View } from 'react-native';
import Card from './components/Card';
import { useColorScheme } from 'nativewind'


export default function App() {
  const {colorScheme,toggleColorScheme } = useColorScheme()

  return (
    <View className="flex-1 p-4 bg-blue-500 dark:bg-black items-center justify-center ">
      <StatusBar style="auto" />
      <Switch value={colorScheme === 'light'} onChange={toggleColorScheme} />
        <Card/>
        <Text className="text-yellow-200 text-3xl text-center">Open up App.js to start working on your app!</Text>
    </View>
  )
}