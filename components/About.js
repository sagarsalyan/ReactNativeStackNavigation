import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from "react-native";

const About = ({navigation}) => {
  return(
    <View>
      <Text style={styles.header}>About</Text>
        <Button
          title="Back"
          onPress={() => navigation.goBack()}
        />
    </View>
  )
}

export default About;

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  }
});
