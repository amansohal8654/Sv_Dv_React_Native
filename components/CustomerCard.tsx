import { View, Text } from 'react-native'
import React from 'react'
import useCustomerOrders from '../hooks/useCustomerOrders';
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn/dist';
import { CustomerScreenNavigationProp } from '../screens/CustomersScreen';

type Props = {
    userId: string;
    name: string;
    email: string;
}
export default function CustomerCard({email, name, userId} : Props) {
    const { loading, error, orders } = useCustomerOrders(userId);
    const tw = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>() 
    
    return (
    <View>
        <Text>CustomerCard</Text>
    </View>
    )
}