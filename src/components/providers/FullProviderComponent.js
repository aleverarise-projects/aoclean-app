import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import {
  Title,
  Subheading,
  Paragraph,
  Button,
  Divider,
} from 'react-native-paper';

const FullProviderComponent = () => {
  return (
    <View style={styles.containerFullProviderComponent}>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png',
        }}
        style={styles.image}
      />
      <View style={styles.header}>
        <Title>@proveedor</Title>
        <Subheading>$2.000.000</Subheading>
      </View>
      <Paragraph style={styles.paragraph}>
        Proident laboris laboris cillum duis sint fugiat. Fugiat commodo qui
        pariatur nostrud tempor Lorem ut sit adipisicing. Cupidatat veniam minim
        aliqua do officia qui cillum. Pariatur do proident eu deserunt
        reprehenderit deserunt aliqua ad cupidatat aute. Exercitation id
        incididunt nostrud velit consectetur magna amet sint ullamco. Veniam
        magna commodo magna enim.
      </Paragraph>
      <View style={styles.buttonsActions}>
        <Button
          mode="outlined"
          uppercase={false}
          onPress={() => console.log('Pressed')}>
          Detalle
        </Button>
        <Button
          mode="contained"
          uppercase={false}
          dark
          onPress={() => console.log('Pressed')}>
          Solicitar
        </Button>
      </View>
      <Divider style={styles.divider} />
    </View>
  );
};

export default FullProviderComponent;

const styles = StyleSheet.create({
  containerFullProviderComponent: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  header: {
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  paragraph: {
    paddingHorizontal: 20,
  },
  buttonsActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 20,
    marginBottom: 10,
  },
  divider: {
    marginHorizontal: 20,
  },
});
