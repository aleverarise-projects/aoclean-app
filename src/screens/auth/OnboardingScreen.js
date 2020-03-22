import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Avatar, Title, Paragraph, Button } from 'react-native-paper';

const OnboardingScreen = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Avatar.Text style={styles.setMarginTop} size={150} label="XD" />
          <Title style={styles.setMarginTop}>AOClean</Title>
          <Paragraph style={styles.setMarginTop}>
            sdsdDolor proident id tempor labore Lorem ullamco esse aliqua ut
            quis aliqua ex cillum. Voluptate ad cupidatat qui aliqua velit
            nostrud. Ut tempor non anim qui aliqua cillum officia. Fugiat aliqua
            mollit mollit nostrud. Minim duis mollit consequat aliqua qui culpa
            id minim ex enim id ut.
          </Paragraph>
          <Button
            uppercase={false}
            dark={true}
            mode="contained"
            style={[styles.buttons, styles.setMarginTop]}
            onPress={() => navigate('Register')}>
            Crear cuenta
          </Button>
          <Button
            uppercase={false}
            mode="outlined"
            style={[styles.buttons, styles.setMarginTop]}
            onPress={() => navigate('Login')}>
            Login
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30,
  },
  setMarginTop: {
    marginTop: 20,
  },
  avatar: {},
  title: {},
  paragraph: {},
  buttons: {
    width: '100%',
  },
});
