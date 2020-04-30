import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Searchbar, Card, List } from 'react-native-paper';
import MiniCategoryComponent from '../../components/categories/MiniCategoryComponent';
import FullProviderComponent from '../../components/providers/FullProviderComponent';
import MiniProviderComponent from '../../components/providers/MiniProviderComponent';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.sectionSearch}>
            <Searchbar placeholder="Buscar" />
          </View>
          <View style={styles.contentView}>
            <MiniCategoryComponent />
            <MiniCategoryComponent />
            <MiniCategoryComponent />
            <MiniCategoryComponent />
            <MiniCategoryComponent />
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

          {/* Full provider */}
          {[1, 2, 3, 4, 5].map(ele => {
            return <FullProviderComponent key={ele} item={ele} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionSearch: {
    padding: 20,
  },
  contentView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },

  containerHorizontalProvider: {
    height: 370,
    width: '100%',
    paddingLeft: 10,
    marginBottom: 20,
  },
});
