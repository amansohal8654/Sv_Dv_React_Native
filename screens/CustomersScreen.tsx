import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useLayoutEffect, useState } from 'react';
import { Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import { RootStackParamList } from '../navigator/RootNavigator';
import { TabStackParamList } from '../navigator/TabNavigator';
import {Image, Input} from '@rneui/themed'

export type CustomersScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, "Customers">,
NativeStackNavigationProp<RootStackParamList>
>
export default function CustomersScreen() {
    const tw = useTailwind()
    const navigator = useNavigation();
    const [input, setInput] = useState<string>('')

    useLayoutEffect(() => {
      navigator.setOptions({
        headerShown: false,
      })
    }, [])

  return (
    <ScrollView style={{backgroundColor: '#59c1cc'}}>
      <Image
        source={{uri: "https://links.papareact.com/3jc"}}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input 
        placeholder='Search by Customer' 
        onChangeText={setInput}
        containerStyle= {tw("bg-white pt-5 pb-0 px-10")}
        />
    </ScrollView>
  )
}