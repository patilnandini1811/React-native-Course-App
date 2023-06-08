import React from 'react';
import { View, Text,  StyleSheet } from 'react-native';

const IngredientsModalNorthIndia = () => {
  return (
    <View style={styles.container}>
      
      
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>1 cup red kidney beans and 1 cup rice.</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>2 large onion and 1 tablespoon garlic.</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>1 teaspoon ginger and 2 chopped green chilli</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>1 tablespoon coriander powder and 1 tablespoon cumin powder</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>  1/2 tablespoon powdered black pepper and salt as required</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}> 1 cinnamon stick and 1 tablespoon garam masala powder</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>
2 green cardamom and 1 black cardamom</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>2 clove and 1 tablespoon black pepper</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>2 tablespoon mustard oil and 1 tablespoon ghee</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>
2 large tomato</Text>
     </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'pink',
  },
   
  ingredientText: {
    fontSize: 16,
    paddingVertical: 10,
  },
  evenIngredient: {
    backgroundColor: 'pink',
  },
  oddIngredient: {
    backgroundColor: '#eaeaea',
  },
});

export default IngredientsModalNorthIndia;
