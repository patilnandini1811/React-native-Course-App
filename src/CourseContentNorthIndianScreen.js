import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import IngredientsNorthModal from './components/IngredientsNorthModal';
import VideoPlayerNorthIndian from './components/VideoPlayerNorth';
import { useNavigation } from '@react-navigation/native';

const CourseContentNorthIndiaScreen = () => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [isVideoWatched, setIsVideoWatched] = useState(false);
  const navigation = useNavigation();

  const handleToggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  const handleVideoEnd = () => {
    setIsVideoWatched(true);
    Alert.alert('Course Completed', 'Congratulations! You have completed the course.');
  };

  useEffect(() => {
    if (isVideoWatched) {
      navigation.navigate('CourseDetailsNorthIndian');
    }
  }, [isVideoWatched, navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Video</Text>
        <View style={styles.videoContainer}>
          <VideoPlayerNorthIndian onVideoEnd={handleVideoEnd} />
        </View>
      </View>
<TouchableOpacity onPress={handleToggleIngredients}>
        <Text style={[styles.ingredientsButton, { textAlign: 'center' }]}>Show Ingredients</Text>
      </TouchableOpacity>
      {showIngredients && <IngredientsNorthModal/>}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recipe</Text>
        <Text style={styles.sectionText}>
          1. Firstly, take ball-sized aloo mixture and dip in besan batter and coat well.
          {'\n'}
           2. Deep fry in hot oil stirring occasionally.
          {'\n'}
          3. Now slit the ladi pav and spread 1 tsp green chutney, ½ tsp tamarind chutney, and ½ tsp dry garlic chutney.
          {'\n'}
          4. Place the prepared vada in the center of pav, chura, and fried chilli.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  ingredientsButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    padding: 10,
    
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
  },
  videoContainer: {
    aspectRatio: 16 / 9,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default CourseContentNorthIndiaScreen;
