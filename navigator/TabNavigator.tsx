import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useLayoutEffect } from 'react';
import CustomersScreen from '../screens/CustomersScreen'
import OrdersScreen from '../screens/OrdersScreen'

export type TabStackParamList = {
    Customers: undefined;
    Orders: undefined;
}
const Tab = createBottomTabNavigator<TabStackParamList>()

const TabNavigator = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

  return (
    <Tab.Navigator screenOptions={({route}) =>({
        tabBarActiveTintColor: "#59c1cc",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({focused, color, size}) => {
            if(route.name === "Customers"){
                return (
                    <Icon
                    name="user"
                    type="entypo"
                    color={focused ? "#59c1cc" : "gray"}
                    />
                )
            } else if(route.name === "Orders") {
                <Icon
                name="box"
                type="entypo"
                color={focused ? "#EB6A7C" : "gray"}
                />
            }
        }
    })}>
        <Tab.Screen name="Customers" component={CustomersScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator