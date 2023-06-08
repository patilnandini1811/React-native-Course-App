import React from 'react';
import CourseContent from './CourseContent';
import {  StyleSheet, ScrollView} from 'react-native';
const CourseContentScreen = () =>
{
  
  return(
    <ScrollView style={styles.container}>
      <CourseContent />
    </ScrollView>
   
  );
   
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'pink',
  },
});
export default CourseContentScreen;
