import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import DarkModeToggle from './components/DarkModeToggle';
import { useColorScheme } from 'nativewind'
import ProductsList from './components/ProductsList';

export default function App() {
  const {colorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-yellow-400 dark:bg-black items-center justify-start pt-16">
      <StatusBar style={colorScheme === "dark"?'light':'dark'} />

        <DarkModeToggle/>
        <ProductsList />
        
    </SafeAreaView>
  )
}