import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Button, Avatar } from 'react-native-paper';
import InputTextComponent from '../components/inputs/InputTextComponent';

const NewRequestScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contentPhotos}>
            <Avatar.Text size={130} label="XD" />
            <Button
              uppercase={false}
              dark
              onPress={() => console.log('Pressed')}>
              Subir fotos
            </Button>
          </View>

          <View style={styles.contentInputs}>
            <InputTextComponent
              label="Titulo del servicio"
              mode="flat"
              style={styles.contentInputsStyle}
              autoCapitalize="words"
              autoCompleteType="name"
              clearButtonMode="while-editing"
            />
            <InputTextComponent
              label="Descripción"
              mode="flat"
              style={styles.contentInputsStyle}
              autoCapitalize="words"
              autoCompleteType="off"
              clearButtonMode="while-editing"
            />
            <InputTextComponent
              label="Dirección"
              mode="flat"
              style={styles.contentInputsStyle}
              autoCapitalize="words"
              autoCompleteType="street-address"
              clearButtonMode="while-editing"
            />

            <InputTextComponent
              label="Categoria"
              mode="flat"
              style={styles.contentInputsStyle}
              autoCapitalize="words"
              autoCompleteType="name"
              clearButtonMode="while-editing"
            />

            <Button
              mode="contained"
              style={styles.buttonSend}
              uppercase={false}
              dark
              onPress={() => console.log('Pressed')}>
              Enviar solicitud
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentPhotos: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  contentInputs: {
    padding: 20,
  },
  contentInputsStyle: {
    marginTop: 30,
  },

  buttonSend: {
    marginTop: 30,
  },
});
