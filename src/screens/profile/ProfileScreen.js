import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Avatar, Title, Paragraph, Button, List } from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Avatar.Text size={120} label="XD" style={styles.headerLeft} />
            <View style={styles.headerRight}>
              <Title>David Mendoza</Title>
              <Paragraph>Avenida laguna sur, 7689</Paragraph>
              <Button
                uppercase={false}
                dark
                onPress={() => console.log('Pressed')}>
                Editar perfil
              </Button>
            </View>
          </View>

          <View style={styles.contentInfo}>
            <List.Item
              title="9 9876 5432"
              description="Telefono"
              left={props => <List.Icon {...props} icon="phone" />}
            />
            <List.Item
              title="example@example"
              description="Correo"
              left={props => <List.Icon {...props} icon="email" />}
            />
          </View>

          <View style={styles.contentInfo}>
            <List.Subheader>Opciones</List.Subheader>
            <List.Item
              title="Publicidad"
              left={props => <List.Icon {...props} icon="store" />}
              right={props => <List.Icon {...props} icon="arrow-right" />}
            />
            <List.Item
              title="Metodos de pago"
              left={props => <List.Icon {...props} icon="credit-card" />}
              right={props => <List.Icon {...props} icon="arrow-right" />}
            />
            <List.Item
              title="Cerrar sesión"
              left={props => <List.Icon {...props} icon="logout" />}
              right={props => <List.Icon {...props} icon="arrow-right" />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  headerLeft: {
    marginLeft: 10,
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 20,
  },

  contentInfo: {
    marginTop: 20,
  },
});
