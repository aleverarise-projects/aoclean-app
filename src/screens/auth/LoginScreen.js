import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { IconButton, Avatar, Card, Title, Button } from 'react-native-paper';
import InputPasswordComponent from '../../components/inputs/InputPasswordComponent';
import InputEmailComponent from '../../components/inputs/InputEmailComponent';

const LoginScreen = ({ navigation: { goBack, navigate } }) => {
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
              <InputPasswordComponent
                // label={I18n.t('inputPassword')}
                label="Contraseña"
                mode="flat"
                autoCapitalize="none"
                style={styles.inputStyles}
                autoCompleteType="password"
                // value={OnboardingStore.inputs.password}
                // onChangeText={value =>
                //   OnboardingStore._changeInput('password', value)
                // }
                clearButtonMode="while-editing"
                keyboardType="default"
                secureTextEntry={true}
              />

              <Button
                style={styles.buttonForgotPassword}
                size="small"
                uppercase={false}
                onPress={() => navigate('Recovery')}>
                ¿Olvido su contraseña?
              </Button>

              <Button
                dark
                style={styles.buttonLogin}
                mode="contained"
                onPress={() => navigate('Login')}>
                Ingresar
              </Button>

              <Button
                style={styles.buttonRegister}
                size="small"
                uppercase={false}
                onPress={() => navigate('Register')}>
                ¿No tiene cuenta? Registrarse
              </Button>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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

  buttonForgotPassword: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },

  buttonRegister: {
    marginTop: 20,
    alignSelf: 'center',
  },

  buttonLogin: {
    marginTop: 20,
  },
});
