/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View} from 'react-native';
import React from 'react';
import {IcQuranCard} from '../../assets';

const Card = ({noHadist}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image source={IcQuranCard} style={{width: 130, height: 152}} />
      <Text style={{fontFamily: 'Poppins-Regular'}}>
        No hadist : {noHadist}
      </Text>
    </View>
  );
};

export default Card;
