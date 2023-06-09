import React from 'react';
import { StyleSheet, Text, View,  Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  const handleViewCourses = () => {
    navigation.navigate('CoursesPage');
  };


  return (
    <View style={styles.container}>
      <Image source={require('../../assets/img/icon3.jpg')} style={styles.image} />
      <Text style={styles.heading}>Welcome to the Cooking Courses!</Text>
      <TouchableOpacity style={styles.button} onPress={handleViewCourses}>
        <Text style={styles.buttonText}>View Courses</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'pink'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;




