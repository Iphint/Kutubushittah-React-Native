/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IcLogoPray} from '../../assets';
import {Gap} from '../../atoms';
import Geolocation from '@react-native-community/geolocation';
import {request} from 'react-native-permissions';

const NotificationSholat = () => {
  const [cityInfo, setCityInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCityData();
  }, []);

  const fetchCityData = async () => {
    try {
      const permissionStatus = await request('location');
      if (permissionStatus === 'granted') {
        Geolocation.getCurrentPosition(
          async position => {
            const {latitude, longitude} = position.coords;
            try {
              const response = await fetch(
                `https://api.myquran.com/v1/sholat/kota?latitude=${latitude}&longitude=${longitude}`,
              );
              const data = await response.json();
              setCityInfo(data.data);
              setLoading(false);
              console.log(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          },
          error => {
            console.error('Error getting location:', error);
          },
        );
      } else {
        console.warn('Location permission denied');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };
  return (
    <View style={styles.cardContainer}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <View>
            <Text
              style={{
                fontSize: 35,
                color: 'white',
                fontFamily: 'Poppins-Medium',
              }}>
              Dzuhur
            </Text>
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontFamily: 'Poppins-Medium',
              }}>
              11:39
            </Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Gap height={30} />
            <Image source={IcLogoPray} style={{width: 105, height: 103}} />
            <Gap height={10} />
            <Text
              style={{
                fontSize: 10,
                color: 'white',
                fontFamily: 'Poppins-Medium',
              }}>
              {cityInfo ? cityInfo.kota.nama : 'Unknown Location'}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default NotificationSholat;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#423C3C',
    height: 199,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
