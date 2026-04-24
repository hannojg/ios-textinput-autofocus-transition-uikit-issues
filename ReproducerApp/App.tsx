import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type RootStackParamList = {
  ScreenA: undefined;
  ScreenB: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function ScreenA({
  navigation,
}: {
  navigation: {navigate: (screen: keyof RootStackParamList) => void};
}) {
  return (
    <View style={styles.centeredScreen}>
      <Button onPress={() => navigation.navigate('ScreenB')} title="Go to Screen B" />
    </View>
  );
}

function ScreenB({
  navigation,
}: {
  navigation: {goBack: () => void};
}) {
  return (
    <View style={styles.screenB}>
      <TextInput
        autoFocus
        placeholder="Enter text"
        style={styles.input}
      />
      <Button onPress={() => navigation.goBack()} title="Go Back" />
    </View>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            headerShown: true,
            fullScreenGestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafffe',
  },
  centeredScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenB: {
    flex: 1,
    padding: 20,
  },
  input: {
    alignSelf: 'center',
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
