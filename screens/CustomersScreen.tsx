import { Text, SafeAreaView } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

export default function CustomersScreen() {
    const tw = useTailwind()
  return (
    <SafeAreaView style={tw("pt-6 pl-2")}>
      <Text style={tw("text-blue-500")}>CustomersScreen</Text>
    </SafeAreaView>
  )
}