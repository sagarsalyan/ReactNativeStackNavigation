import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const Search = ({route, navigation}) => {

  const { username } = route.params;
  navigation.setOptions({ title: username }); // To change the title dynamically
  return(
    <View>
      <Text style={styles.header}>Search-{JSON.stringify(username)}</Text>
      <Button
        title="Search"
        onPress={
          () => navigation.push('Search',{
            username: 'Sunil'
          })
        }
      />
        <Button
          title="Back"
          onPress={() => navigation.popToTop()}
        />
    </View>

  )
}

export default Search;

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  }
});
