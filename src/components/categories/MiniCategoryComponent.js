import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

const MiniCategoryComponent = () => {
  return (
    <TouchableOpacity>
      <Card style={styles.categoryComponent}>
        <Card.Content style={styles.contentCategory}>
          <IconButton
            icon="camera"
            size={25}
            onPress={() => console.log('Pressed')}
          />
          <Text style={styles.text}>Category</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default MiniCategoryComponent;

const styles = StyleSheet.create({
  // Category component
  categoryComponent: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },

  contentCategory: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 12,
  },
});
