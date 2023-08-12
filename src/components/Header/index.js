/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Arrow} from '../../assets';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.8} onPress={onBack}>
          <View style={styles.arrow}>
            <Image source={Arrow} style={{width: 17, height: 17}} />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 98,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  arrow: {
    backgroundColor: '#9F8B8B',
    padding: 15,
    borderRadius: 100,
    marginRight: 20,
  },
  title: {color: '#0C0C0C', fontSize: 20, fontFamily: 'Poppins-Medium'},
  subTitle: {color: '#817575', fontSize: 12, fontFamily: 'Poppins-Medium'},
});
