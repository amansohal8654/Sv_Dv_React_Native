import { Text, SafeAreaView } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

export default function CustomersScreen() {
    const tw = useTailwind()
  return (
    <SafeAreaView>
      <Text style={tw("text-blue-500")}>CustomersScreen</Text>
    </SafeAreaView>
  )
}