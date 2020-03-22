import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { IconButton, Avatar, Card, Title, Button } from 'react-native-paper';
import InputEmailComponent from '../../components/inputs/InputEmailComponent';

const RecoveryScreen = ({ navigation: { goBack } }) => {
  return (
    <SafeAreaView>
      <IconButton icon="arrow-left" size={20} onPress={() => goBack()} />
      <ScrollView>
        <View style={styles.container}>
          <Avatar.Text
            style={[styles.setMarginTop, styles.logo]}
            size={150}
            label="XD"
          />

          <Card style={[styles.card, styles.setMarginTop]} elevation={7}>
            <Card.Content>
              <Title>Login</Title>
              <InputEmailComponent
                // label={I18n.t('inputEmail')}
                label="Email"
                mode="flat"
                style={styles.inputStyles}
                autoCapitalize="none"
                // value={OnboardingStore.inputs.email}
                // onChangeText={value =>
                //   OnboardingStore._changeInput('email', value)
                // }
                autoCompleteType="email"
                clearButtonMode="while-editing"
                keyboardType="email-address"
              />

              <Button
                dark
                style={styles.buttonLogin}
                mode="contained"
                onPress={() => console.log('Pressed')}>
                Enviar link
              </Button>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecoveryScreen;

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },

  setMarginTop: {
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },

  card: {
    borderRadius: 20,
    width: '80%',
  },

  inputStyles: {
    marginTop: 30,
  },

  buttonLogin: {
    marginTop: 20,
  },
});
