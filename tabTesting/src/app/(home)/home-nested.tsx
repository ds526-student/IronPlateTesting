import React from 'react';
import { View, Text } from 'react-native';

export default function HomeNestedScreen() {
    return(
        <View style={{flex: 1, justifyContent: 'center', padding: 4}}>
            <Text style={{textAlign: 'center', fontSize: 30, textDecorationStyle: 'solid' }}>Index</Text>
        </View>
    );  
}