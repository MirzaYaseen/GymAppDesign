import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const GymCard = ({title, description, buttonText, onPressButton}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardViewCon}>
        <Image style={styles.img} source={require('../assets/gympic.png')} />

        <View style={styles.cardView}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.descriptionCon}>
            <Image
              style={{
                width: 18,
                height: 18,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}
              source={require('../assets/location.png')}
            />
            <Text style={styles.description}>{description}</Text>
          </View>
          {buttonText && (
            <TouchableOpacity style={styles.button} onPress={onPressButton}>
              <View style={styles.btnCont}>
                <Text style={styles.buttonText}>{buttonText} </Text>

                <Image
                  style={{
                    width: 20,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginLeft: 3,
                  }}
                  source={require('../assets/forward.png')}
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.5,
    width: '95%',
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
    margin:5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#393A44',
  },
  descriptionCon: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  description: {
    fontSize: 11,
    marginLeft: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#393A44',
  },
  btnCont: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#5951FF',
    fontSize: 15,
  },
  img: {
    height: '100%',
    width: '40%',
    marginRight: 10,
    borderRadius: 15,
  },
});

export default GymCard;
