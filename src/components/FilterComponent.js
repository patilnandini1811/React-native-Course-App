import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const FilterComponent = ({ courses, selectedFilter, onFilterChange }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack('CoursesPage');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Icon name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton} onPress={onFilterChange}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>
      {selectedFilter && (
        <View style={styles.filtersContainer}>
          {courses.map((course) => (
            <TouchableOpacity
              key={course.id}
              style={[
                styles.filterItem,
                selectedFilter === course.title && styles.selectedFilterItem,
              ]}
              onPress={() => onFilterChange(course.title)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === course.title && styles.selectedFilterText,
                ]}
              >
                {course.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor:'pink',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterButton: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  filterButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  filtersContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  filterItem: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedFilterItem: {
    backgroundColor: '#c95858',
  },
  filterText: {
    color: 'black',
    fontSize: 14,
  },
  selectedFilterText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FilterComponent;
