import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/components/HomePage';
import CoursesPage from './src/components/CoursesPage';
import CourseDetailScreen from './src/components/CourseDetailsSrc';
import CourseContentScreen from './src/components/CourseContentScreen';
import CourseDetailsSouthIndian from './src/components/CourseDetailsSouthIndian';
import CourseContentSouthIndianScreen from './src/components/CourseContentSouthIndiaScreen';
import CourseDetailsNorthIndian from './src/components/CourseDetailsNorthIndian';
import CourseContentNorthIndiaScreen from './src/CourseContentNorthIndianScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigatore ()
{
  return (
    <Drawer.Navigator
      screenOptions={{
      drawerContentStyle:{backgroundColor:'white'},
    }}>
        <Drawer.Screen name="Home" component={HomePage} options={{
          
          drawerIcon: ({ color, size }) => (<Ionicons name='home' color={color} size={size} />
          ),
        }} />
      <Drawer.Screen name="CoursesPage" component={CoursesPage} options={{
          title:'All Courses',
          drawerIcon: ({ color, size }) => (<Ionicons name="restaurant-outline" color={color} size={size} />
            
          ),
      }} />
      </Drawer.Navigator>
    );
}
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
             name='Drawer'
          component={DrawerNavigatore}
          options={{
             
            headerShown:false
          }}
          />
          <Stack.Screen name="CourseDetails" component={CourseDetailScreen}
            options={{
              title:'Maharashtrian Cuisine',
            }} />
          <Stack.Screen name="CourseContentScreen" component= 
           {CourseContentScreen} options={{
            title:'Course Content'
          }} />

          <Stack.Screen name="CourseDetailsSouthIndian" component= 
           {CourseDetailsSouthIndian }
          options={{
              title:'South Indian Cuisine',
            }} />
          <Stack.Screen name='CourseContentSouthIndianScreen' component= 
             {CourseContentSouthIndianScreen} options={{
            title:'Course Content'
          }} />
  
          <Stack.Screen name="CourseDetailsNorthIndian" component= 
           {CourseDetailsNorthIndian}
          options={{
              title:'North Indian Cuisine',
            }} />
          
          <Stack.Screen name='CourseContentNorthIndiaScreen' component= 
           {CourseContentNorthIndiaScreen } options={{
            title:'Course Content'
          }} />
     </Stack.Navigator>
    </NavigationContainer>
  </>
  );
};

export default App;
