# react-native-reanimated-text-input [![npm](https://img.shields.io/npm/v/react-native-reanimated-text-input.svg)](https://npmjs.com/package/react-native-reanimated-text-input-reader)  [![npm](https://img.shields.io/npm/dm/react-native-reanimated-text-input.svg)](https://npmjs.com/package/react-native-reanimated-text-input)
React Native text input component with a floating label - using  react-native-reanimated.

## Peer Dependancies

``` 
react-native-reanimated 
```

# Demo

![Alt text](/demo.gif?raw=true "AnimatedTextInput")

# Installation
```
yarn add react-native-reanimated-text-input
```
 or 
```
npm install --save react-native-reanimated-text-input
```

# Usage
```js
import Input from 'react-native-reanimated-text-input';

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
 ```
 # Prop-types
 
 | Prop name  |Type |
| ------------- | ------------- |
| error  | string - error text to display if any error available  |
| errorColor  | color - color to decorate text input border and error text |
| errorTextStyle  | Text style - styles to override error text styles  |
| textInputStyle  | Input style - style obj to oveerride text input styles  |
| containerStyle  | View style - style to override textinput container (EG: padding , margins)  |
| labelTextStyle  | Text style -  styles to override label(placeholder) text style  |
| isKeyboardInput  | boolean -  default true, if false this will not open keboard, instead give a callback via onPress if this is false  |
| onPress  | function -  function to execute onPress in `isKeyboardInput = true` |
| labelTextColor  | color -  default label(placeholder) color if labelTextStyle is not set  |
| activeLabelColor  | color -  default label(placeholder) color if labelTextStyle is not set and label is floaing on top(text input is active) |
| activeColor  | color -  border color when the text input is active |
| {...props} | TextInput props - All react native text input props |

# Example

checkout example/test directory and findout a react-native app.
``` 
yarn android
```
 or 
```
yarn ios
```
