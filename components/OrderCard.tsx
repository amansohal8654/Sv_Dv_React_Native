import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { TabStackParamList } from "../navigator/TabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>

type Props = {
  item: Order;
};

const OrderCard = ({ item }: Props) => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>()

  return (
    <TouchableOpacity
        onPress={() => navigation.navigate("Order", {order : item})}
    >
      <Card>
        <View style={tw("flex-row justify-between items-center")}>
          <View>
            <Icon
              name="truck-delivery"
              color={"#EB6A7C"}
              type="material-community"
            />
            <Text>{new Date(item.createdAt).toDateString()}</Text>
          </View>
          <View>
            <Text style={[tw("text-gray-400"), {fontSize: 10}]}>
                {item.carrier} - {item.trackingId}
            </Text>

            <Text>
                {item.trackingItems.customer.name}
            </Text>
          </View>
          <View style={tw("flex-row item-center")}>
            <Text style={[tw("text-sm"), {color: "#EB6A7C"}]}>
                {item.trackingItems.items.length} x
            </Text>
            <Icon style={tw("ml-2")} name="box" type="feather"/>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;