import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Title, Card, Paragraph, IconButton } from 'react-native-paper';

const MiniProviderComponent = (props) => {
  return (
    <Card style={styles.providerCard}>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
        <Title>Lorem lorem lorem {props.item} </Title>
        <Paragraph style={styles.providerCardParagraph}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod…
        </Paragraph>
      </Card.Content>
      <Card.Actions style={styles.providerCardActions}>
        <IconButton
          icon="arrow-right"
          animated={true}
          size={30}
          onPress={() => console.log('Pressed')}
        />
      </Card.Actions>
    </Card>
  );
};

export default MiniProviderComponent;

const styles = StyleSheet.create({
  // ProviderComponent
  providerCard: {
    width: 250,
    height: 350,
    borderRadius: 20,
    marginRight: 20,
  },
  providerCardParagraph: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  providerCardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
