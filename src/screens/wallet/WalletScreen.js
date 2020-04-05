import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Caption, Title, Button, List, Subheading } from 'react-native-paper';
import { theme } from '../../config/theme';

const rightIcons = () => {
  return (
    <View style={styles.rightIcons}>
      <Subheading>$1.000.000</Subheading>
      <Caption>02/02/2020</Caption>
    </View>
  );
};

const WalletScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Caption style={styles.headerCaption}>Saldo total</Caption>
            <Title style={styles.headerTitle}>$2.000.000</Title>
            <View style={styles.headerActions}>
              <Button
                mode="outlined"
                uppercase={false}
                color={theme.colors.background2}
                onPress={() => console.log('Pressed')}>
                Retirar
              </Button>

              <Button
                mode="contained"
                uppercase={false}
                color={theme.colors.background2}
                dark
                onPress={() => console.log('Pressed')}>
                Pagar
              </Button>
            </View>
            <View>
              <List.Subheader>Lista de movimientos</List.Subheader>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele) => {
                return (
                  <List.Item
                    key={ele}
                    title="First Item"
                    description="Item description"
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color={
                          ele % 2 === 0
                            ? theme.colors.background2
                            : theme.colors.secondary
                        }
                        icon={ele % 2 === 0 ? 'chevron-up' : 'chevron-down'}
                      />
                    )}
                    right={rightIcons}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  headerTitle: {
    alignSelf: 'center',
  },
  headerCaption: {
    alignSelf: 'center',
  },
  headerActions: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  rightIcons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
