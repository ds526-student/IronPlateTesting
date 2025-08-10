import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';


export default function SecondNestedScreen() {
    return(
        <View style={{flex: 1, justifyContent: 'center', padding: 4}}>
            <Text style={{textAlign: 'center', fontSize: 30, textDecorationStyle: 'solid' }}>Second Nested</Text>
                <Link href="/second/also-nested" push asChild>
                    <Button title="Push to /second/also-nested" />
                </Link>
        </View>
    );  
}