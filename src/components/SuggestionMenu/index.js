/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardSuggest from '../CardSuggest';
import {Gap} from '../../atoms';

const SuggestionMenu = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 20,
          fontFamily: 'Poppins-Medium',
        }}>
        Hadits today’s{' '}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={10} />
        <CardSuggest />
      </ScrollView>
    </View>
  );
};

export default SuggestionMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});
