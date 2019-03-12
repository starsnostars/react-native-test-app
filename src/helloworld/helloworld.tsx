import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

export interface Props {
    text: String
}

export interface State {
    text: String
}

export class HelloWorld extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { text: props.text }
    }

    render() {
        return(
            <View>
                <Text>{this.state.text}</Text>
            </View>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({text: "NEW STATE"})
        }, 3000);
    }

    shouldComponentUpdate(prevProps: Props, prevState: State) {
        return true
    }
}