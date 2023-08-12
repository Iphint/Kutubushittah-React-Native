/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header} from '../../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';

const SingleHadist = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {hadisId, selectedSource} = route.params;

  const [hadisData, setHadisData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.hadith.gading.dev/books/${selectedSource}/${hadisId}`,
      );
      if (response.data && response.data.data && response.data.data.contents) {
        setHadisData(response.data.data.contents);
        console.log(response.data.data.contents);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title="Single Hadist"
        subTitle={`hadis imam ${selectedSource} nomor ${hadisId}`}
        onBack={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        {loading ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100,
            }}>
            <Text style={{fontSize: 25, fontFamily: 'Poppins-Regular'}}>
              Loading...
            </Text>
          </View>
        ) : hadisData ? (
          <View style={styles.hadisContainer}>
            <View style={styles.numberContainer}>
              <Text style={styles.number}>{hadisData.number}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.arabText}>{hadisData.arab}</Text>
              <Text style={styles.translationText}>{hadisData.id}</Text>
            </View>
          </View>
        ) : (
          <View>
            <Text>No data available.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  hadisContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ADC4CE',
  },
  numberContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  arabText: {
    fontFamily: 'NotoNaskhArabic-Medium',
    fontSize: 20,
    color: 'black',
  },
  translationText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'black',
  },
});

export default SingleHadist;
