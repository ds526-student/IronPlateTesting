import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SecondScreen() {
    return(
        <View style={{flex: 1, justifyContent: 'center', padding: 4}}>
            <Text style={{textAlign: 'center', fontSize: 30, textDecorationStyle: 'solid' }}>Second</Text>
            <Link href="/second/nested" push asChild>
                <Button title="Push to /second/nested" />
            </Link>
        </View>
    );  
}