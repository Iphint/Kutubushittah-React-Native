/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CardList, Header} from '../../components';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Hadist = () => {
  const navigation = useNavigation();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.hadith.gading.dev/books');
      setBooks(response.data.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailHadist', {hadisId: item.id});
      }}>
      <CardList perowi={item.name} jumlah={`${item.available} Hadiths`} />
    </TouchableOpacity>
  );

  return (
    <View>
      <Header
        title="Hadist"
        subTitle="Kumpulan hadis dari beberapa imam besar."
      />
      <FlatList
        style={{height: 650}}
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.hadistView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hadistView: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: 90,
  },
});

export default Hadist;
