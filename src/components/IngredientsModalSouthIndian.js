import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';

const IngredientModalSouthIndia = () => {
  return (
    <View style={styles.container}>
      
      <Text style={[styles.ingredientText, styles.evenIngredient]}>cup regular rice + 1 cup parboiled rice or 2 cups idli rice or 2 cups parboiled rice</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>½ cup whole or split urad dal - 120 grams whole or split urad dal (husked black gram)</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>¼ cup thick poha - 20 grams (flattened rice)</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>¼ teaspoon fenugreek seeds (methi seeds)</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>2 cups water - for soaking rice</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>  2 tsp green chilli - garlic paste</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}> 1 cup water - for soaking urad dal</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>½ cup water - for grinding urad dal or add as required</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>¾ to 1 cup water - for grinding rice or add as required</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>1 teaspoon rock salt edible and food grade or sea salt</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>oil - as required to apply to the idli moulds</Text>
      <Text style={[ styles.ingredientText, styles.oddIngredient ]}>1/4 tsp hing</Text>
      <Text style={[ styles.ingredientText, styles.evenIngredient ]}>2 to 2.5 cups water - for steaming idli</Text>
      

      
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

export default IngredientModalSouthIndia;
