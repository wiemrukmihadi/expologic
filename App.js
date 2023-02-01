import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {

  const [text, setText] = useState('');
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}
  const isValid = (s) => {
    // console.log('data', s[0]);
    if(s.length === 0) return false;
    if(s?.length % 2 === 1) return false;
    if(s[0] === ')' || s[0] === '}' || s[0] === ']') return false;
    if(s[s.length - 1] === '(' || s[s.length -1 ] === '[' || s[s.length -1 ] === '{') return false;

    let stack = [];

    for (let i=0; i < s.length; i++){
      if(s[i] === '[' || s[i] === '(' || s[i] === '{') {
        stack.push(s[i])
      } else if (pairs[stack.pop()] !== s[i]) {
          return false
      }
    }
    return stack.length === 0;

  }
  return (
    <View style={styles.container}>
      <TextInput 
        
        value={text}
        style={{ height: 50, width: 200, borderColor: 'black', borderWidth: 1, padding: 5 }}
        onChangeText={(_text) => {
          setText(_text);
        }}
      
      />
      <Text>{`isValid : ${isValid(text)}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
