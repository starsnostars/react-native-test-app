import React, { Component } from 'react';
import { View, Button} from 'react-native'

export class HelloWorld extends Component {
    render() {
        return(
            <View>
                <Button title="Go to to do list"
                        onPress={()=> {
                            this.props.navigation.navigate("ToDo", {
                                url: "http://jsonplaceholder.typicode.com/todos/"
                            })
                        }}/>
            </View>
        );
    }
}