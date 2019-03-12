import React, { Component } from "react";
import { ToDoListState } from "./ToDoListState";
import { ToDoItem } from "./ToDoItem";
import { Text, FlatList, TouchableOpacity, ListRenderItemInfo, StyleSheet } from "react-native";

export interface Props {
  url: string;
}

export class ToDoList extends Component<Props, ToDoListState> {
  private listUrl: string;

  constructor(props: Props) {
    super(props);
    this.state = { items: [] };
    this.listUrl = props.url;
  }

  render() {
    return <FlatList 
      data={this.state.items} 
      renderItem={this.renderItem}
      keyExtractor={item => item.id.toString()} />;
  }

  renderItem = (row: ListRenderItemInfo<ToDoItem>) => {
    let item = row.item
    return (
      <TouchableOpacity style={styles.container} onPress={() => {}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.checkbox}>{item.completed ? "+" : "-"}</Text>
      </TouchableOpacity>
    );
  };

  async componentDidMount() {
    await this.getToDoList();
  }

  private async getToDoList() {
    let response = await fetch(this.listUrl);
    let json = await response.json();

    this.setState({ items: json });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#F5FCFF',
    margin: 5
  },
  title: {
    width: "90%",
    fontSize: 18,
    marginRight: 5
  },
  checkbox: {
    width: "10%",
    fontSize: 22
  }
});