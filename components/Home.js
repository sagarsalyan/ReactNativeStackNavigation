import React, { Component } from 'react'
import { StyleSheet, Text, View, Button} from "react-native";

const Home = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <Button
        title="Go to Search"
        onPress={
          () => {
            navigation.setOptions({ title: 'Updated!' })
            navigation.navigate('Search',{
              username: 'Sagar'
            })
          }
        }
      />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>


  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center'
  },
  header: {
    fontSize: 20
  }
});
