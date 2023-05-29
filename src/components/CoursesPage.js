// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import FilterComponent from './FilterComponent';

// const CoursesPage = ({ navigation }) => {
  

//   const courses = [
//     { id: 1, title: 'Maharashtrian cuisine', image: require('../../assets/img/paneer.jpg') },
//     { id: 2, title: 'South India Cuisine', image: require('../../assets/img/dosaidli.jpg') },
//     { id: 3, title: 'North Indian Cuisine', image: require('../../assets/img/rajma-chawal.jpg') },
//   ];
//   const [filteredCourses, setFilteredCourses] = useState(courses);
//   const [selectedFilter, setSelectedFilter] = useState(null);

//   const handleCoursePress = (course) => {
//     navigation.navigate('CourseDetails', { course });
//   };

//   const handleFilterChange = (filter) => {
//     setSelectedFilter(filter);
//     // Perform filtering logic based on the selected filter option and update the filteredCourses state
//     // You can use array methods like filter(), map(), or reduce() to filter the data
//     const filteredData = courses.filter((course) => course.category === filter);
//     setFilteredCourses(filteredData);
//   };

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
//           <Text style={styles.goBackButtonText}>Go Back</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.headingContainer}>
//         <Text style={styles.heading}>Cooking Courses</Text>
//       </View>
//       <FilterComponent courses={courses}
//         selectedFilter={selectedFilter}
//         handleFilter={handleFilterChange} />
//       <View style={styles.courseList}>
//         {filteredCourses.map((course) => (
//           <TouchableOpacity
//             key={course.id}
//             style={styles.courseItem}
//             onPress={() => handleCoursePress(course)}
//           >
//             {course.image && (
//               <Image source={course.image} style={styles.courseImage} />
//             )}
//             <Text style={styles.courseTitle}>{course.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'pink',
//   },
//   header: {
//     flexDirection: 'row',
//   },
//   headingContainer: {
//     marginTop: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   courseList: {
//     marginTop: 10,
//   },
//   courseItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     backgroundColor: '#f2f2f2',
//     borderRadius: 10,
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowRadius: 10,
//     padding: 10,
//   },
//   courseImage: {
//     width: 130,
//     height: 130,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   courseTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   goBackButton: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     marginTop:10,

//   },
//   goBackButtonText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default CoursesPage;
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import FilterComponent from './FilterComponent';
// import { useNavigation } from '@react-navigation/native';


// const CoursesPage = ({ navigation }) => {
//   const [selectedFilter, setSelectedFilter] = useState(null);

//   const courses = [
//     { id: 1, title: 'Maharashtrian cuisine', image: require('../../assets/img/vadapav.jpg') },
//     { id: 2, title: 'South India Cuisine', image: require('../../assets/img/dosaidli.jpg') },
//     { id: 3, title: 'North Indian Cuisine', image: require('../../assets/img/rajma-chawal.jpg') },
//   ];

//   const handleCoursePress = (course) => {
//     navigation.navigate('CourseDetails', { course });
//   };
  


//   const handleFilterChange = (filter) => {
//     setSelectedFilter(filter);
//   };

//   const filteredCourses = selectedFilter
//     ? courses.filter((course) => course.title === selectedFilter)
//     : courses;

//   return (
//     <View style={styles.container}>
//       <View style={styles.filterContainer}>
//         <FilterComponent
//           courses={courses}
//           selectedFilter={selectedFilter}
//           onFilterChange={handleFilterChange}
//         />
//       </View>
//       <View style={styles.courseList}>
//         {filteredCourses.map((course) => (
//           <TouchableOpacity
//             key={course.id}
//             style={styles.courseItem}
//             onPress={() => handleCoursePress(course)}
//           >
//             {course.image && <Image source={course.image} style={styles.courseImage} />}
//             <Text style={styles.courseTitle}>{course.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'pink',
//   },
//   filterContainer: {
//     marginBottom: 10,
//   },
//   courseList: {
//     flex: 1,
//   },
//   courseItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     backgroundColor: '#f2f2f2',
//     borderRadius: 10,
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowRadius: 10,
//     padding: 10,
//   },
//   courseImage: {
//     width: 130,
//     height: 130,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   courseTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default CoursesPage;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FilterComponent from './FilterComponent';
import { useNavigation } from '@react-navigation/native';

const CoursesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const navigation = useNavigation();

  const courses = [
    { id: 1, title: 'Maharashtrian cuisine', image: require('../../assets/img/vadapav.jpg') },
    { id: 2, title: 'South India Cuisine', image: require('../../assets/img/dosaidli.jpg') },
    { id: 3, title: 'North Indian Cuisine', image: require('../../assets/img/rajma-chawal.jpg') },
  ];

  const handleCoursePress = (course) => {
    navigation.navigate('CourseDetails', { course });
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

