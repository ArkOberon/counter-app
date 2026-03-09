import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import FAB from './components/FAB';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>

      <FAB
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        label="+1"
        position="right"
      />   

      <FAB
        onPress={() => setCounter(counter - 1)}
        onLongPress={() => setCounter(0)}
        label="-1"
        position="left"
      />   

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 68,
    fontWeight: 'bold',
  },  
});
