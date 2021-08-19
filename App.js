import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';

const App = () => {
  const handlePress = () => console.log('Text pressedd...');
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text numberOfLines={1} onPress={handlePress}>
        This is very very very very very very very very very very very very very
        very very very very very very very Long text.....
      </Text> */}
      {/* <TouchableOpacity onPress={() => console.log('image pressed..')}>
        <Image source={require('./user.png')} />
      </TouchableOpacity> */}
      <Button
        color="green"
        title="Click Me!"
        onPress={() =>
          Alert.alert('My Alert', 'You tapped the button', [
            {text: 'Yes', onPress: () => console.log('You pressed Yes')},
            {text: 'No', onPress: () => console.log('You pressed no')},
          ])
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
