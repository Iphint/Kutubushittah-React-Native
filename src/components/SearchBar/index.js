/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SearchBar = ({placeholder, value, onChangeText, onSearch}) => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={onSearch}>
          <View style={styles.button}>
            <Text style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
              Search
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  input: {
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
    width: 265,
    marginRight: 6,
    paddingHorizontal: 15,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#423C3C',
    borderRadius: 16,
    height: 42,
    width: 86,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchBar;
