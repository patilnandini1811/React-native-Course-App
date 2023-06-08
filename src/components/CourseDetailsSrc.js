import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CourseDetailScreen = () => {
  const navigation = useNavigation();
  const [isTextBoxVisible, setIsTextBoxVisible] = useState(false);

  const handleCourseContentPress = () => {
    navigation.navigate('CourseContentScreen');
  };

  const handleAboutPress = () => {
    setIsTextBoxVisible(!isTextBoxVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/img/vadapav.jpg')} style={styles.image} />
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>🍲 Prep Time: 20 mins</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>⏰ Cook Time: 40 mins</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>🍽️ Recipe Servings: 2</Text>
            </View>
        </View>
        <TouchableOpacity onPress={handleAboutPress}>
          <Text style={styles.courseContentButton}>Description</Text>
          {isTextBoxVisible && (
            <View style={styles.textBoxContainer}>
              <Text style={styles.textBox}>
                Mumbai's very own burger, Mumbai style vada pav. The vada pav recipe is made of a spicy potato filling deep-fried in a gram flour batter. Along with a hot and spicy garlic chutney, batata vada pav is served inside a small "Ladi Pav". This indigenous burger-like snack is the quickest and tastiest meal you can have in Mumbai any time, even in the middle of the night.
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
    height: 200,
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
  textBox:{
    fontWeight: 'bold',
    fontSize:16,
}

});
export default CourseDetailScreen;


