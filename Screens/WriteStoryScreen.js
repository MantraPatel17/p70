import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class WriteStory extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        title: '',
        author: '',
        storyText: '',
    }
}

  render() {
    return(
      <SafeAreaProvider>
    <View style={styles.container}>
      <Header
        backgroundColor={'pink'}
        centerComponent={{
          text: 'Story Hub',
          style: { color: 'black', fontSize: 30 },
        }}
      />

      <TextInput
        placeholder="Story Title"
        onChangeText={(text) => {
          this.setState({
            title: text,
          });
        }}
        value={this.state.title}
        style={styles.title}
        placeholderTextColor="black"
      />
      <TextInput
        placeholder="Author"
        onChangeText={(text) => {
          this.setState({
            author: text,
          });
        }}
        placeholderTextColor="black"
        value={this.state.author}
        style={styles.author}
      />
      <TextInput
        placeholder="Write your story"
        onChangeText={(text) => {
          this.setState({
            storyText: text,
          });
        }}
        placeholderTextColor="black"
        value={this.state.storyText}
        style={styles.storyText}
        multiline={true}
      />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
    color: 'black',
    padding: 6,
  },
  author: {
    height: 40,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  storyText: {
    height: 250,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  submitButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'pink',
    width: 80,
    height: 40,
    color: 'black',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    color: 'black',
  },
});
