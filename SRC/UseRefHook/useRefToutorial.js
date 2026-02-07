import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from 'react-native';
import React, { useState, useRef } from 'react';

const useRefToutorial = () => {
  const team = useRef(null);
  const test = useRef(null);

  const [count, setCount] = useState(0);
  const [rang, setColor] = useState('#bedb2d');

  const fun = () => {
    if (team.current) return; // prevent multiple intervals

    team.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    setColor('red');
  };

  const fun2 = () => {
    clearInterval(team.current);
    team.current = null;
  };

  const fun3 = () => {
    fun2(); // stop timer first
    setCount(0);
  };

  function inputHandle() {
    //test.current.focus();
  }
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 35 }}>{count}</Text>
      <View style={[styles.btn, { backgroundColor: rang }]}>
        <TouchableOpacity
          onPress={() => {
            fun();
          }}
        >
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.btn, { backgroundColor: rang }]}>
        <TouchableOpacity onPress={fun2}>
          <Text>Stop</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.btn, { backgroundColor: rang }]}>
        <TouchableOpacity onPress={fun3}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10, backgroundColor: '#e45c5c' }}>
        <TextInput
          placeholder="Enter Your name please"
          placeholderTextColor={'white'}
          ref={test}
        />
        <Button title="submit" color={'yellow'} onPress={inputHandle} />
      </View>
    </View>
  );
};

export default useRefToutorial;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f6f6',
  },
  btn: {
    width: '95',
    height: '40',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
});
