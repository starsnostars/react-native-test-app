
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ToDoList } from './src/list/ToDoList';

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <ToDoList url={"http://jsonplaceholder.typicode.com/todos/"}/>
      </View>
    );
  }
}

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
