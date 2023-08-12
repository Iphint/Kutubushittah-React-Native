/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {IcQuranLogo} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#F86B6B', '#3B3232']}
      style={styles.container}>
      <StatusBar backgroundColor="#f66b6b" barStyle="light-content" />
      <View style={styles.title}>
        <Text style={styles.subTitle}>Hadist</Text>
        <Text style={styles.subTitle}>Kutubushitah</Text>
      </View>
      <Image source={IcQuranLogo} style={{width: 170, height: 170}} />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          navigation.replace('MainApp');
        }}>
        <View style={styles.button}>
          <Text style={styles.text}>Get Started</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.textDev}>Developed by Iphint</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {justifyContent: 'center', alignItems: 'center'},
  subTitle: {fontSize: 30, color: 'white', fontFamily: 'Poppins-Medium'},
  button: {
    backgroundColor: '#4A2C2C',
    width: 230,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {color: 'white', fontFamily: 'Poppins-Medium'},
  textDev: {fontFamily: 'Poppins-Medium'},
});

export default SplashScreen;
