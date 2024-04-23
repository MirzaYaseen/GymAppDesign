import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Headphone = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Coming Soon</Text>
      </View>
    </SafeAreaView>
  );
};

export default Headphone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
  },
});
