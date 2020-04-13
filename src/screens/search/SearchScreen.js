import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';
import MiniCategoryComponent from '../../components/categories/MiniCategoryComponent';

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
  },
});
