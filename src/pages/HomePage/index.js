import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NotificationSholat, SuggestionMenu} from '../../components';
import {Gap} from '../../atoms';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Gap height={30} />
      <View style={styles.subContainer}>
        <NotificationSholat />
      </View>
      <Gap height={26} />
      <SuggestionMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#b5b5b5', flex: 1},
  subContainer: {marginHorizontal: 20},
});

export default HomePage;
