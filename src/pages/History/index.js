/* eslint-disable react-native/no-inline-styles */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {IcSorry} from '../../assets';
import {Gap} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const History = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Header
        title="History"
        subTitle="Kumpulan riwayat hadis yang sudah di lihat."
      />
      <View
        style={{
          flex: 1,
          justifyContent: ' center',
          alignItems: 'center',
          backgroundColor: 'white',
          paddingTop: 120,
        }}>
        <Text style={{fontFamily: 'Poppins-Medium'}}>
          We applogize, that this page is still on development.
        </Text>
        <Gap height={30} />
        <Image source={IcSorry} style={{width: 100, height: 100}} />
        <Gap height={30} />
        <View
          style={{
            backgroundColor: 'blue',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
              Back to home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default History;
