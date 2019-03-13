
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ToDoList } from './src/list/ToDoList';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HelloWorld } from './src/helloworld/helloworld';

type Props = {};
type State = {};

export class App extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

const appNavigator = createStackNavigator({
  Home: { screen: HelloWorld },
  ToDo: { screen: ToDoList }
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(appNavigator)

export default createAppContainer(appNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});