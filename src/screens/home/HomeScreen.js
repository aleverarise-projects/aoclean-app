import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import {
  Button,
  List,
  Title,
  Card,
  Paragraph,
  IconButton,
} from 'react-native-paper';
import Store from '../../store/Store';
import MiniServiceComponent from '../../components/services/MiniServiceComponent';
import MiniProviderComponent from '../../components/providers/MiniProviderComponent';
import FullProviderComponent from '../../components/providers/FullProviderComponent';

// TODO: Agregar la configuracion necesaria para el eslint y el prettiers para este y futuros proyectos

const HomeScreen = observer(() => {
  return (
    <SafeAreaView>
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
              onPress={() => console.log('Pressed')}>
              Nueva solicitud
            </Button>
          </View>

          <View>
            {/* Container scroll horizontal mini-services */}
            <List.Item
              title="Servicios activos"
              right={(props) => <List.Icon {...props} icon="arrow-right" />}
            />
            <View style={styles.containerHorizontalService}>
              <ScrollView horizontal>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => {
                  return <MiniServiceComponent key={key} item={key} />;
                })}
              </ScrollView>
            </View>

            {/* Container scroll horizontal providers */}
            <List.Item
              title="Proveedores destacados"
              right={(props) => <List.Icon {...props} icon="arrow-right" />}
            />
            <View style={styles.containerHorizontalProvider}>
              {/* Component Provider */}
              <ScrollView horizontal>
                <View display="flex" flexDirection="row">
                  {[1, 2, 3, 4].map((ele) => {
                    return <MiniProviderComponent key={ele} item={ele} />;
                  })}
                </View>
              </ScrollView>
            </View>

            {/* Full provider */}
            {[1, 2, 3, 4, 5].map((ele) => {
              return <FullProviderComponent key={ele} item={ele} />;
            })}
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
