import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const SubscriptionCard = ({title, description, buttonText, onPressButton}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardViewCon}>
        <Image style={styles.img} source={require('../assets/crown.png')} />

        <View style={styles.cardView}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 1,
    marginTop: 1,
  },
  cardViewCon: {
    flexDirection: 'row',
    padding: 4,
  },
  cardView: {
    flexDirection: 'column',
    margin: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#434343',
  },
  descriptionCon: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  description: {
    fontSize: 13,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#8C8C8C',
  },
  img: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginRight: 10,
    borderRadius: 15,
  },
});

export default SubscriptionCard;
