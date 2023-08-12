/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IcQuranCard} from '../../assets';

const CardList = ({jumlah, perowi}) => {
  return (
    <View style={styles.container}>
      <Image source={IcQuranCard} style={{width: 130, height: 152}} />
      <Text style={styles.perowi}>Perowi : {perowi}</Text>
      <Text style={styles.jumlah}>Jumlah Hadist : {jumlah}</Text>
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {margin: 20},
  jumlah: {fontSize: 10},
  perowi: {fontSize: 13, fontFamily: 'Poppins-Medium'},
});
