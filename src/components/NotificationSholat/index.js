import {Image, StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {IcMotivation1, IcMotivation2, IcMotivation3} from '../../assets';

const images = [IcMotivation1, IcMotivation2, IcMotivation3];

const NotificationSholat = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.cardContainer}>
      <Image
        source={images[currentImageIndex]}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default NotificationSholat;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#423C3C',
    height: 199,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    borderRadius: 20,
    height: 199,
  },
});
