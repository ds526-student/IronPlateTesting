import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
  const onButtonPress = () => {
    Alert.alert('Floating Action Button Pressed');
  }

  return (
    <View style={styles.container}>
      <Text>Floating Button Example</Text>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={onButtonPress}
      >
        <Ionicons name="add-circle" size={50} color="black" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 70,

  }
});
