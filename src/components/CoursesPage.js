import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FilterComponent from './FilterComponent';
import { useNavigation } from '@react-navigation/native';

const CoursesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const navigation = useNavigation();

  const courses = [
    { id: 1, title: 'Maharashtrian cuisine', image: require('../../assets/img/vadapav.jpg') },
    { id: 2, title: 'South Indian Cuisine', image: require('../../assets/img/dosaidli.jpg') },
    { id: 3, title: 'North Indian Cuisine', image: require('../../assets/img/rajma-chawal.jpg') },
  ];

  const handleCoursePress = (course) => {
    if (course.id === 1) {
      navigation.navigate('CourseDetails', { course });
    } else if (course.id === 2) {
      navigation.navigate('CourseDetailsSouthIndian', { course });
    } else if (course.id === 3) {
      navigation.navigate('CourseDetailsNorthIndian', { course });
    }
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredCourses = selectedFilter
    ? courses.filter((course) => course.title === selectedFilter)
    : courses;

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <FilterComponent
          courses={courses}
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
      </View>
      <View style={styles.courseList}>
        {filteredCourses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.courseItem}
            onPress={() => handleCoursePress(course)}
          >
            {course.image && <Image source={course.image} style={styles.courseImage} />}
            <Text style={styles.courseTitle}>{course.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'pink',
  },
  filterContainer: {
    marginBottom: 10,
  },
  courseList: {
    flex: 1,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    padding: 10,
  },
  courseImage: {
    width: 130,
    height: 130,
    borderRadius: 25,
    marginRight: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CoursesPage;
