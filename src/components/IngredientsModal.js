import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IngredientsModal = () => {
  return (
    <View style={styles.container}>
      
      <Text style={[styles.ingredientText, styles.evenIngredient]}>2 Tbsp oil</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>1/4 tsp hing</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>1 tsp mustard seeds</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>2 tsp saunf</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>1 onion</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>  2 tsp green chilli - garlic paste</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}> 2 nos potato, boiled</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>1/4 tsp hing</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>1 tsp mustard seeds</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>1 tsp turmeric powder</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>1 tsp salt</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>1/4 tsp hing</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>2 tsp red chilli powder</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>2 tsp coriander leaves</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}> For masala paste:9 garlic cloves, 5 nos red chilli whole, 2 tsp white sesame seeds, 1 cup dessicated coconut, 2 tsp peanuts (roasted), 1/2 tsp salt, 1/2 tsp red chilli powder, 1/2 tsp tamarind, 1 cup besan, 1/4 cup soda, 1 tsp salt, 1 tsp red chilli powder, 4 Green chillies. </Text>

      
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

export default IngredientsModal;
