import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class ReadStory extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.displayText}>Read<br></br>(Sorry on Story Updated)</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 25,
      textAlign:'center'
    }
  });