/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

import Input from 'react-native-reanimated-text-input';

const App: () => React$Node = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState('')
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}>
         
         <Input 
          label={"User name"}
          value={userName}
          onChangeText={(t) => setUserName(t)}
          activeColor={'green'}
          activeLabelColor={'green'}
          containerStyle={{ marginVertical: 20 }}
          onBlur={() => !userName ? setUsernameError('User name is mandotory') : null}
          error={usernameError}
         />
         <Input 
          label={"Password"}
          value={password}
          onChangeText={(t) => setPassword(t)}
          containerStyle={{ marginVertical: 20 }}
         />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 30
  },
});

export default App;
