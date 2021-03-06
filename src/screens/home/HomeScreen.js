import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { observer } from 'mobx-react';
import { Button, List, Title, Avatar } from 'react-native-paper';
import MiniServiceComponent from '../../components/services/MiniServiceComponent';
import MiniProviderComponent from '../../components/providers/MiniProviderComponent';

const HomeScreen = observer(({ navigation: { goBack, navigate } }) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <Title>Hola Alejandro</Title>
            </View>
            <Button
              dark
              compact
              uppercase={false}
              mode="contained"
              onPress={() => navigate('NewRequest')}>
              Nueva solicitud
            </Button>
          </View>

          <View>
            {/* Container scroll horizontal mini-services */}
            <List.Item
              title="Servicios activos"
              right={props => <List.Icon {...props} icon="arrow-right" />}
            />
            <View style={styles.containerHorizontalService}>
              <ScrollView horizontal>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(key => {
                  return <MiniServiceComponent key={key} item={key} />;
                })}
              </ScrollView>
            </View>

            {/* Container scroll horizontal providers */}
            <List.Item
              title="Proveedores destacados"
              right={props => <List.Icon {...props} icon="arrow-right" />}
            />
            <View style={styles.containerHorizontalProvider}>
              {/* Component Provider */}
              <ScrollView horizontal>
                <View display="flex" flexDirection="row">
                  {[1, 2, 3, 4].map(ele => {
                    return <MiniProviderComponent key={ele} item={ele} />;
                  })}
                </View>
              </ScrollView>
            </View>

            {/* Lista de solicitudes creadas */}
            <List.Item title="Listado de solicitudes" />
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(key => {
              return (
                <List.Item
                  key={key}
                  title={`Service ${key}`}
                  description={`Service description ${key}`}
                  left={props => (
                    <List.Icon
                      {...props}
                      icon={key % 2 === 0 ? 'account-clock' : 'progress-check'}
                    />
                  )}
                  right={props => (
                    <Avatar.Text color="#FFF" size={30} label={key} />
                  )}
                />
              );
            })}
            <List.Item
              title="Service"
              description="Servicio cancelado"
              left={props => (
                <List.Icon {...props} color="#fb0000" icon="cancel" />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  header: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  containerHorizontalService: {
    height: 150,
    width: '100%',
  },

  containerHorizontalProvider: {
    height: 370,
    width: '100%',
    paddingLeft: 10,
  },
});
