import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/components/HomePage';
import CoursesPage from './src/components/CoursesPage';
import CourseDetailScreen from './src/components/CourseDetailsSrc';


const Stack = createStackNavigator();

const App = () =>
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen
          name="CoursesPage"
          component={CoursesPage}
          options={{ headerShown: false }} // Hide the header for CoursesPage
        />
        <Stack.Screen name="CourseDetails" component={CourseDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
