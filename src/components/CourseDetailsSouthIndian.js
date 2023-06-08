import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const CourseDetailsSouthIndian = () => {
  const navigation = useNavigation();
const [isTextBoxVisible, setIsTextBoxVisible] = useState(false);
  const handleCourseContentPress = () => {
    navigation.navigate('CourseContentSouthIndianScreen');
  };
  const handleAboutPress = () => {
    setIsTextBoxVisible(!isTextBoxVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/img/dosaidli.jpg')} style={styles.image} />
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>🍲 Prep Time: 9hrs</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>⏰ Cook Time: 25 mins</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.servingsText}>🍽️ Recipe Servings: 2</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleAboutPress}>
          <Text style={styles.courseContentButton}>Description</Text>
          {isTextBoxVisible && (
            <View style={styles.textBoxContainer}>
              <Text style={styles.textBox}>
                Idli is one of the most healthiest and popular South Indian breakfast dish. These are soft, light, fluffy steamed round cakes made with a ground, fermented rice and lentil batter. Here I share my foolproof recipe with video and step-by-step photos that will help you in making the best idli. This Idli recipe is one of the earliest recipe from the blog which has been tried and tested with great results by many of our readers.
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCourseContentPress}>
          <Text style={styles.courseContentButton}>Course Content</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'pink',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 300,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
  marginBottom: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: 'black',
  borderWidth: 1,
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
},
  timeText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight:'bold',
  },
  servingsText: {
    fontSize: 16,
    marginLeft: 5,
  },
  textBox:{
    fontWeight: 'bold',
    fontSize:16,
},
  courseContentButton: {
  width: 200,
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
  marginBottom: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: 'black',
  borderWidth: 1,
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  },
  textBoxContainer: {
  width: 250,
  marginTop: 5,
  paddingHorizontal: 20,
  paddingVertical: 10,
  backgroundColor: '#f8f8f8',
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 5,
  elevation: 5,
  marginBottom: 10,
  },
});

export default CourseDetailsSouthIndian;
