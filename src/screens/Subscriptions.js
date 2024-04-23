import {StyleSheet, Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import TopTabs from '../components/SubscriptionTopTabs';
import {TouchableOpacity} from 'react-native';
import ProgressBar from '../components/Progressbar';
import SubscriptionCard from '../components/SubscriptionCard';

const Subscriptions = () => {
  const tabs = [
    {name: 'All', label: 'All'},
    {name: 'Active', label: 'Active'},
    {name: 'Inactive', label: 'Inactive'},
  ];
  const handlePressButton = () => {
    console.log('Button pressed');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title={'Subscription'} />
      </View>
      <View>
        <TopTabs tabs={tabs} />
      </View>
      <ScrollView>
      <View style={styles.yourPlanCard}>
        <View style={styles.planHeader}>
          <Text style={styles.plansText}>Your Plans</Text>
          <TouchableOpacity style={styles.crossBtn}>
            <Image
              style={styles.crossImg}
              source={require('../assets/cross.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.basicTrialCont}>
          <Text style={styles.basicTrialText}>Basic Monthly Trial</Text>
          <ProgressBar />
        </View>
        <Text style={styles.expirationText}>
          Will be expired on 23 march 2023
        </Text>
        <View style={styles.divider}>{''}</View>
        <TouchableOpacity style={styles.upgradeBtn}>
          <Text style={styles.upgradeBtnText}>upgrade Plan</Text>
        </TouchableOpacity>
      </View>
    

        <View>
        <SubscriptionCard
            title="Basic montly plan"
            description="12 Jan, 2022 - 12 Jan, 2023"
          />
           <SubscriptionCard
            title="Basic montly plan"
            description="12 Jan, 2022 - 12 Jan, 2023"
          />
            <SubscriptionCard
            title="Basic montly plan"
            description="12 Jan, 2022 - 12 Jan, 2023"
          />
            <SubscriptionCard
            title="Basic montly plan"
            description="12 Jan, 2022 - 12 Jan, 2023"
          />
            <SubscriptionCard
            title="Basic montly plan"
            description="12 Jan, 2022 - 12 Jan, 2023"
          />
        </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Subscriptions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  yourPlanCard: {
    width: '90%',
    alignSelf: 'center',
    elevation: 1,
    backgroundColor: '#FFFFFF',
    height: '42%',
    borderRadius: 10,
    padding: 20,
    marginBottom:20
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
  },
  plansText: {
    fontSize: 16,
    color: '#0D4041',
    fontWeight: '500',
    marginBottom: 20,
  },
  crossBtn: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  crossImg: {
    width: 10,
    height: 10,
  },
  basicTrialCont: {
    marginTop: 30,
  },
  basicTrialText: {
    color: '#434343',
    fontSize: 18,
    fontWeight: '500',
  },
  expirationText: {
    color: '#949494',
    marginTop: 25,
  },
  divider: {
    marginTop: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
  },
  upgradeBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#5951FF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 45,
  },
  upgradeBtnText: {
    color: 'white',
  },
});
