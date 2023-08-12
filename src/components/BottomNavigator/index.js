import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import IcHistoryOff from '../../assets/IcHistoryOff.png';
import IcHistoryOn from '../../assets/IcHistoryOn.png';
import IcHomeOn from '../../assets/IcHomeOn.png';
import IcHomeOff from '../../assets/IcHomeOff.png';
import IcQuranOn from '../../assets/IcQuranOn.png';
import IcQuranOff from '../../assets/IcQuranOff.png';

const Icon = ({label, focus}) => {
  let source;
  switch (label) {
    case 'Home':
      source = focus ? IcHomeOn : IcHomeOff;
      break;
    case 'Hadist':
      source = focus ? IcQuranOn : IcQuranOff;
      break;
    case 'History':
      source = focus ? IcHistoryOn : IcHistoryOff;
      break;
    default:
      source = IcHomeOn;
  }

  return <Image source={source} style={styles.icon} />;
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

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

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            style={styles.tabItem}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#423C3C',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default BottomNavigator;
