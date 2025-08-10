import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function IndexScreen() {
    
    return(
        <View style={{flex: 1, justifyContent: 'center', padding: 4}}>
            <Text style={{textAlign: 'center', fontSize: 30, textDecorationStyle: 'solid' }}>Index</Text>
            <Link href="/home-nested" push asChild>
                <Button title='Push to /home-nested' />
            </Link>
        </View>
    );  
}