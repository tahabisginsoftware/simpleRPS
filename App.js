import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RPS from './components/RPS';

export default function App() {
  return (
    <View style={styles.container}>
      <RPS/>
      <StatusBar style="light" backgroundColor='#1e1e24'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
