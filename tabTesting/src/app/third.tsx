import React from 'react';
import { View, Text } from 'react-native';

export default function ThirdScreen() {
    return(
        <View style={{flex: 1, justifyContent: 'center', padding: 4}}>
            <Text style={{textAlign: 'center', fontSize: 30, textDecorationStyle: 'solid' }}>Third</Text>
        </View>
    );  
}