import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import GymCard from '../components/GymCard';
import Header from '../components/Header';
const Dashboard = () => {
  const handlePressButton = () => {
    console.log('Button pressed');
  };
  const handleBackPress = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="Gyms" onBackPress={handleBackPress} />
      </View>
      <ScrollView>
        <View>
          <GymCard
            title="The Fitness Gym"
            description="ul. Bławatków 71, Kędzierzyn-ko"
            buttonText="Register Now"
            onPressButton={handlePressButton}
          />
          <GymCard
            title="The Fitness Gym"
            description="ul. Bławatków 71, Kędzierzyn-ko"
            buttonText="Register Now"
            onPressButton={handlePressButton}
          />
          <GymCard
            title="The Fitness Gym"
            description="ul. Bławatków 71, Kędzierzyn-ko"
            buttonText="Register Now"
            onPressButton={handlePressButton}
          />
          <GymCard
            title="The Fitness Gym"
            description="ul. Bławatków 71, Kędzierzyn-ko"
            buttonText="Register Now"
            onPressButton={handlePressButton}
          />
          <GymCard
            title="The Fitness Gym"
            description="ul. Bławatków 71, Kędzierzyn-ko"
            buttonText="Register Now"
            onPressButton={handlePressButton}
          />
          <GymCard
            title="The Fitness Gym"
            description="ul. Bławatków 71, Kędzierzyn-ko"
            buttonText="Register Now"
            onPressButton={handlePressButton}
          />
          <GymCard
            title="The Fitness Gym"
            description="ul. Bławatków 71, Kędzierzyn-ko"
            buttonText="Register Now"
            onPressButton={handlePressButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
});
