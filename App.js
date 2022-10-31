import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 p-8 bg-yellow-400 items-center justify-start ">
        <Text className="text-3xl text-center">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}