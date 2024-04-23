import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const TopTabs = ({tabs = []}) => {
  const [activeTab, setActiveTab] = useState(
    tabs.length > 0 ? tabs[0].name : '',
  );

  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tab, activeTab === tab.name ? styles.activeTab : null]}
          onPress={() => handleTabPress(tab.name)}>
          <View
            style={[
              styles.tabContainer,
              activeTab === tab.name ? styles.activeTabContainer : null,
            ]}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab.name ? styles.activeTabText : null,
              ]}>
              {tab.label}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
   marginLeft:10
  },
  tab: {
    flex: 1,
  },
  tabContainer: {
    justifyContentL: 'center',
    marginVertical: 15,
    padding: 10,
    alignItems: 'center',
    elevation: 1,
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },

  tabText: {
    fontSize: 16,
    color: '#333',
  },
  activeTabText: {
    color: '#007AFF',
  },
});

export default TopTabs;
