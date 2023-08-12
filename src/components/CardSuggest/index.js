/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '../Card';
import {Gap} from '../../atoms';
import {useNavigation} from '@react-navigation/native';
import {IcReloading} from '../../assets';

const sources = [
  {id: 'abu-daud', name: 'HR. Abu Daud'},
  {id: 'ahmad', name: 'HR. Ahmad'},
  {id: 'bukhari', name: 'HR. Bukhari'},
  {id: 'darimi', name: 'HR. Darimi'},
  {id: 'ibnu-majah', name: 'HR. Ibnu Majah'},
  {id: 'malik', name: 'HR. Malik'},
  {id: 'muslim', name: 'HR. Muslim'},
  {id: 'nasai', name: 'HR. Nasai'},
  {id: 'tirmidzi', name: 'HR. Tirmidzi'},
];

const CardSuggest = () => {
  const navigation = useNavigation();
  const [hadithData, setHadithData] = useState([]);
  const [selectedSource, setSelectedSource] = useState('HR. Bukhari');

  useEffect(() => {
    fetchHadithData('bukhari');
  }, []);

  const fetchHadithData = async sourceId => {
    try {
      const response = await axios.get(
        `https://api.hadith.gading.dev/books/${sourceId}?range=1-150`,
      );
      if (response.data.data.hadiths) {
        const hadiths = response.data.data.hadiths;
        const shuffledHadiths = shuffleArray(hadiths);
        const randomHadiths = shuffledHadiths.slice(0, 7);
        setHadithData(randomHadiths);
        setSelectedSource(getSourceName(sourceId));
      }
    } catch (error) {
      console.error('Error fetching hadith data:', error);
    }
  };

  const shuffleArray = array => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const getSourceName = sourceId => {
    const source = sources.find(s => s.id === sourceId);
    return source ? source.name : '';
  };

  const handleRefresh = () => {
    const randomSource = sources[Math.floor(Math.random() * sources.length)];
    setSelectedSource(randomSource.name);
    fetchHadithData(randomSource.id);
  };

  return (
    <View>
      <Text style={{fontSize: 15, color: 'white'}}>{selectedSource}</Text>
      <Gap height={10} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hadithData.map((hadith, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => {
              const source = sources.find(s => s.name === selectedSource);
              navigation.navigate('SingleHadist', {
                hadisId: hadith.number,
                selectedSource: source.id,
              });
            }}>
            <Card noHadist={hadith.number} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Gap height={25} />
      <TouchableOpacity onPress={handleRefresh}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image source={IcReloading} style={{width: 30, height: 30}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardSuggest;
