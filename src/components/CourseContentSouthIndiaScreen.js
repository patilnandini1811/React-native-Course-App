import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Alert,ScrollView } from 'react-native';
 import IngredientModalSouthIndia from './IngredientsModalSouthIndian';
import VideoPlayerSouthIndian from './VideoPlayerSouthIndian';
 import { useNavigation } from '@react-navigation/native';


const CourseContentSouthIndianScreen = () =>
{
  const [ showIngredients, setShowIngredients ] = useState(false);
  const [ isVideoWatched, setIsVideoWatched ] = useState(false);
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
      navigation.navigate('CourseDetailsSouthIndian');
    }
  }, [ isVideoWatched, navigation ]);
  
    return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Video</Text>
        <View style={styles.videoContainer}>
          <VideoPlayerSouthIndian onVideoEnd={handleVideoEnd} />
        </View>
      </View>
     <TouchableOpacity onPress={handleToggleIngredients}>
        <Text style={[styles.ingredientsButton, { textAlign: 'center' }]}>Show Ingredients</Text>
        </TouchableOpacity> 
        {showIngredients && <IngredientModalSouthIndia />}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recipe</Text>
        <Text style={styles.sectionText}>
          1.Soak the rice and urad dal in separate bowls for at least 4 hours.
          {'\n'}
          2.Grind the soaked items separately.occasionally.
          {'\n'}
          3.Mix the ground rice and urad dal together.

          {'\n'}
            4.Set aside in a warm place to ferment for 8 hours and add salt.
            {'\n'}
            5.Oil the idli steamer plates.
            {'\n'}
            6.Spoon the batter into the plates.
            {'\n'}
            7.Set the idli steamer into a large, pre heated pot with water in the bottom for steaming.
            {'\n'}
            8.Steam the batter for 5-10 minutes or until fluffy.
            {'\n'}
            9.
Remove the idlis from the steamer and serve warm with Chutney, or Sambhar
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'pink',
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

export default CourseContentSouthIndianScreen ;
