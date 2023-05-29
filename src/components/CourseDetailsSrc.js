// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity,Image ,ScrollView} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';

// const CourseDetailScreen = ({ navigation }) =>
// {
//   const handleGoBack = () =>
//   {
//     navigation.goBack();
//   };

//   return (
//     <ScrollView style={styles.container}>

//       <View style={styles.contentContainer}>
//         <View style={styles.image}>
//           <Image source={require('../../assets/img/vadapavcourse.jpg')} style={styles.image} />
//           <View style={styles.timeContainer}>
//             <Ionicons name="timer-outline" size={18} color="#c95858" />
//             <Text style={styles.cookingTime}>🍲 Cook Time: 40 mins</Text>
//           </View>
//           <View style={styles.timeContainer}>
//             <Ionicons name="time-outline" size={18} color="#c95858" />
//             <Text style={styles.timeText}>⏰ Prep Time: 20 mins</Text>
//           </View>
//           <View style={styles.timeContainer}>
//             <Ionicons name="people-outline" size={18} color="#c95858" />
//             <Text style={styles.recipeServings}>🍽️ Recipe Servings</Text>
//           </View>
//           <View style={styles.textContainer}>
//             <Text style={styles.recipeText}>Recipe</Text>
            
//           </View>
//         </View>

    
//   </View>


        
//         <Text style={styles.courseTitle}>How to make vadapav?</Text>
//         <Text style={styles.discription}>Mumbai's very own burger, Mumbai style vada pav. The vada pav recipe is made of a spicy potato filing deep fried in a gram flour batter.Along with a hot and spicy garlic chutney, batata vada pav is served inside a small "Ladi Pav". This indegenous burger-like snack is the quickest and tastiest meal you can have in Mumbai any time even in the middle of the night. </Text>
//         <Text>Ingredients
//         2 Tbsp oil
//         1/4tsp hing
//         1 tsp mustard seeds
//         2 tsp saunf
//         1 onion
//         2 tsp green chilli - garlic paste
//         2 nos potato,boiled
//         1 tsp turmeric powder
//         1 tsp salt
//         2 tsp red chilli powder
//         2 tsp coriander leaves
//         2 tsp lemon juiceFor masala
//         paste:9 garlic
//         cloves
//         5 nos red chilli whole
//         2 tsp white sesame seeds
//         1 cup dessicated coconut
//         2 tsp peanuts,
//         roasted
//         1/2 tsp salt
//         1/2 tsp red chilli powder
//         1/2 tsp tamarind1 cup besan
//         1/4 cup soda1 tsp salt
//         1 tsp red chilli powder
//         4 Green chillies</Text>
         
      
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   arrowContainer: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     zIndex: 1,
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   courseTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     // marginTop:10,
//    marginBottom: 20,
//     backgroundColor: '#c95858',
//     color: 'white',
//     padding: 10,
//     borderRadius: 10,
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowRadius: 5,
//     elevation: 5, // For Android shadow
//     borderWidth: 2,
//     borderColor: 'black',
//   },
//   image: {
//     width: 350,
//     height: 200,
//     marginBottom: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: 'black',
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//    textContainer: {
//     backgroundColor: 'white',
//     marginTop: 10,
//     padding: 10,
//   },
//   recipeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   // Rest of the styles for course details content
//   timeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   timeText: {
//     fontSize: 16,
//     marginLeft: 5,
//   },
//   servingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   servingsText: {
//     fontSize: 16,
//     marginLeft: 5,
//   },
//   discription: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
// });

// export default CourseDetailScreen;
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';


// const CourseDetailScreen = ({ navigation }) => {
//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.contentContainer}>
//         <View style={styles.imageContainer}>
//           <Image source={require('../../assets/img/vadapav.jpg')} style={styles.image} />
//           <View style={styles.timeContainer}>
            
//             <Text style={styles.timeText}>🍲 Prep Time: 20 mins</Text>
//           </View>
//           <View style={styles.timeContainer}>
            
//             <Text style={styles.timeText}>⏰ Cook Time: 40 mins</Text>
//           </View>
//           <View style={styles.timeContainer}>
            
//             <Text style={styles.servingsText}>🍽️ Recipe Servings: 2</Text>
//           </View>
//           <View style={styles.textContainer}>
           
            
//           </View>
//         </View>

//         <Text style={styles.courseTitle}>About the Dish</Text>
//         <Text style={styles.discription}>
//           Mumbai's very own burger, Mumbai style vada pav. The vada pav recipe is made of a spicy potato filling deep-fried in a gram flour batter. Along with a hot and spicy garlic chutney, batata vada pav is served inside a small "Ladi Pav". This indigenous burger-like snack is the quickest and tastiest meal you can have in Mumbai any time, even in the middle of the night.
//         </Text>

//         <Text style={styles.sectionTitle}>Ingredients</Text>
//         <Text style={styles.ingredients}>
//           2 Tbsp oil
//           1/4 tsp hing
//           1 tsp mustard seeds
//           2 tsp saunf
//           1 onion
//           2 tsp green chilli - garlic paste
//           2 nos potato, boiled
//           1 tsp turmeric powder
//           1 tsp salt
//           2 tsp red chilli powder
//           2 tsp coriander leaves
//           2 tsp lemon juice
//           For masala paste: 9 garlic cloves, 5 nos red chilli whole, 2 tsp white sesame seeds, 1 cup dessicated coconut, 2 tsp peanuts (roasted), 1/2 tsp salt, 1/2 tsp red chilli powder, 1/2 tsp tamarind, 1 cup besan, 1/4 cup soda, 1 tsp salt, 1 tsp red chilli powder, 4 Green chillies
//         </Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     marginBottom: 10,
//   },
//   image: {
//     width: 350,
//     height: 200,
//      marginBottom: 20,
//     borderRadius: 10,
//     borderWidth: 2,
    
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//    textContainer: {
//     backgroundColor: 'white',
//     marginTop: 10,
//     padding: 10,
//   },
//   recipeText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
  
//   timeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   timeText: {
//     fontSize: 16,
//     marginLeft: 5,
//   },
//   servingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   servingsText: {
//     fontSize: 16,
//     marginLeft: 5,
//   },
//   discription: {
//    fontSize: 16,
//    marginBottom: 10,
//   },
//   sectionTitle: {
//     fontWeight: 'bold',
//     backgroundColor: 'pink',
//     borderRadius: 10,
//     borderWidth: 1,
//     padding:8,
    
//   }
// });
// export default CourseDetailScreen;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import * as Font from 'expo-font';
import IngredientsModal from './IngredientsModal';


const CourseDetailScreen = ({ navigation }) =>
{
  const [ showIngredients, setShowIngredients ] = useState(false);
  const handleToggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };
  const handleGoBack = () => {
    navigation.goBack();
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
            <Text style={styles.servingsText}>🍽️ Recipe Servings: 2</Text>
          </View>
        </View>

        <Text style={styles.courseTitle}>About the Dish</Text>
        <Text style={styles.description}>
          Mumbai's very own burger, Mumbai style vada pav. The vada pav recipe is made of a spicy potato filling deep-fried in a gram flour batter. Along with a hot and spicy garlic chutney, batata vada pav is served inside a small "Ladi Pav". This indigenous burger-like snack is the quickest and tastiest meal you can have in Mumbai any time, even in the middle of the night.
        </Text>

        <TouchableOpacity onPress={handleToggleIngredients}>
          <Text style={[styles.ingredientsButton,{textAlign:'center'}]}>Show Ingredients</Text>
        </TouchableOpacity>
        
      </View>
      {showIngredients && <IngredientsModal />}
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
    justifyContent:'center'
  },
  contentContainer: {
    marginBottom: 30,
  },
  ingredientsButton: {
    backgroundColor: '#c95858',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  ingredientsButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  ingredientsModalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  ingredientsModalContent: {
    marginBottom: 20,
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
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 16,
    marginLeft: 5,
  },
  servingsText: {
    fontSize: 16,
    marginLeft: 5,
  },
  courseTitle: {
    color: 'black',
    textAlign:'center',
    fontSize: 16,
    fontWeight: 'bold',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
},
description: {
  fontSize: 16,
  marginBottom: 20,
  backgroundColor: '#f8f8f8',
  padding: 10,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 5,
  elevation: 5,
  fontFamily: 'sans-serif-medium',
},


sectionTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10,
  // borderRadius: 10,
  //   borderWidth: 1,
  //   padding:8,
},
ingredients: {
  fontSize: 16,
  marginBottom: 20,
},

  ingredientsButton: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    padding: 8,
    marginBottom:10,
    
    
    backgroundColor: 'white',
    borderRadius: 10,
    
  },
});
export default CourseDetailScreen;