import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const AppHeader = ({title, onPressBack}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
        <Image
          source={require('../assets/leftarrow.png')}
          style={styles.backImage}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    marginTop: 5,
    marginBottom:5
  },
  backButton: {
    padding: 13,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 1,
  },
  backImage: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 25,
    color: '#4B4B4B',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default AppHeader;
