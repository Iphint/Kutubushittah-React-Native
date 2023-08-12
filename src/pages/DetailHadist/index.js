/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, View, ScrollView, Text, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Header, SearchBar} from '../../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';

const DetailHadist = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [hadisData, setHadisData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [specificHadis, setSpecificHadis] = useState(null);

  const {hadisId} = route.params;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.hadith.gading.dev/books/${hadisId}?range=1-50`,
      );
      if (response.data && response.data.data && response.data.data.hadiths) {
        setHadisData(response.data.data.hadiths);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const searchSpecificHadis = async () => {
    try {
      const response = await axios.get(
        `https://api.hadith.gading.dev/books/${hadisId}/${searchQuery}`,
      );
      if (response.data && response.data.data.contents) {
        setSpecificHadis(response.data.data.contents);
      } else {
        setSpecificHadis(null);
        Alert.alert('Pesan', 'Hadis tidak ditemukan.');
      }
    } catch (error) {
      setSpecificHadis(null);
      Alert.alert(
        'Pesan',
        `Nomor hadist tidak ada dalam hadist imam ${hadisId}.`,
      );
    }
  };

  const handleSearch = () => {
    if (searchQuery) {
      searchSpecificHadis();
    } else {
      Alert.alert(
        'Pesan',
        `Mohon masukkan nomor dalam hadist imam ${hadisId}.`,
      );
    }
  };

  return (
    <View>
      <Header
        title="Detail Hadist"
        subTitle={`Kitab: imam ${hadisId}`}
        onBack={() => {
          navigation.goBack();
        }}
      />
      <SearchBar
        placeholder="Cari hadist spesifik"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        onSearch={handleSearch}
      />
      <Text style={styles.note}>
        Default untuk yang ditampilkan mulai dari 1 - 50
      </Text>
      {specificHadis ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.hadisContainer}>
            <View style={styles.numberContainer}>
              <Text style={styles.number}>{specificHadis.number}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.arabText}>{specificHadis.arab}</Text>
              <Text style={styles.translationText}>{specificHadis.id}</Text>
            </View>
          </View>
        </ScrollView>
      ) : loading ? (
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
      ) : (
        <ScrollView style={{height: 560}}>
          {hadisData.map((hadis, index) => (
            <View key={index} style={styles.hadisContainer}>
              <View style={styles.numberContainer}>
                <Text style={styles.number}>{hadis.number}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.arabText}>{hadis.arab}</Text>
                <Text style={styles.translationText}>{hadis.id}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    marginHorizontal: 20,
    fontFamily: 'Poppins-Italic',
  },
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

export default DetailHadist;
