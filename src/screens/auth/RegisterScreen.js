import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import Store from '../../store/Store';

import { IconButton, Avatar, Card, Title, Button } from 'react-native-paper';
import InputPasswordComponent from '../../components/inputs/InputPasswordComponent';
import InputEmailComponent from '../../components/inputs/InputEmailComponent';
import InputTextComponent from '../../components/inputs/InputTextComponent';
import InputPhoneComponent from '../../components/inputs/InputPhoneComponent';

const RegisterScreen = observer(({ navigation: { goBack, navigate } }) => {
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
              <Title>Registro</Title>
              <Button
                style={styles.buttonLogin}
                size="small"
                uppercase={false}
                onPress={() => navigate('Login')}>
                ¿Ya tiene cuenta? Inicie sesión
              </Button>
              <InputTextComponent
                // label={I18n.t('inputName')}
                label="Nombre"
                mode="flat"
                style={styles.inputStyles}
                autoCapitalize="words"
                // value={OnboardingStore.inputs.name}
                // onChangeText={value =>
                //   OnboardingStore._changeInput('name', value)
                // }
                autoCompleteType="name"
                clearButtonMode="while-editing"
              />
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
              <InputPhoneComponent
                // label={I18n.t('inputPhone')}
                label="Telefono"
                mode="flat"
                style={styles.inputStyles}
                autoCompleteType="tel"
                // value={OnboardingStore.inputs.phone}
                // onChangeText={value =>
                //   OnboardingStore._changeInput('phone', value)
                // }
                clearButtonMode="while-editing"
                keyboardType="phone-pad"
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
                dark
                style={styles.buttonRegister}
                mode="contained"
                onPress={() => Store.setMethods('isLogin', true)}>
                Unirse
              </Button>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

export default RegisterScreen;

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

  buttonLogin: {
    marginTop: 20,
    alignSelf: 'center',
  },

  buttonRegister: {
    marginTop: 20,
  },
});
