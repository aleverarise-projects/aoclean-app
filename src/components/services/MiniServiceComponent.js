import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Subheading } from 'react-native-paper';

const MiniServiceComponent = (props) => {
  return (
    <View style={styles.miniServiceComponentContent}>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
        }}
        style={styles.miniServiceComponentImage}
      />
      <Subheading>Subheading {props.item}</Subheading>
    </View>
  );
};

export default MiniServiceComponent;

const styles = StyleSheet.create({
  // Component miniService
  miniServiceComponentContent: {
    marginRight: 10,
    marginLeft: 20,
  },
  miniServiceComponentImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
