import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Subscriptions from '../screens/Subscriptions';
import Gyms from '../screens/Gyms';
import Dashboard from '../screens/Dashboard';
import Headphone from '../screens/Headphone';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const images = {
    Dashboard: require('../assets/dashboard.png'), 
    Headphone: require('../assets/headphone.png'),
    Gym: require('../assets/gym.png'), 
    Subscription: require('../assets/Subscription.png'),
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={styles.tabItem}
            key={index}>
            <Image
              source={images[route.name]}
              style={[
                styles.icon,
                { tintColor: isFocused ? '#5951FF' : '#828386' },
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const CustomBottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Dashboard" options={{headerShown:false}} component={Dashboard} />
       <Tab.Screen name="Headphone" options={{headerShown:false}} component={Headphone} />
      <Tab.Screen name="Subscription" options={{headerShown:false}} component={Subscriptions} />
      <Tab.Screen name="Gym"  options={{headerShown:false}} component={Gyms} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    
  },
});

export default CustomBottomTabNavigator;
