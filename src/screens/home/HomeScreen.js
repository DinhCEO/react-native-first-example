import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import {connect} from 'react-redux';
import reducerOne from "../../reducers/reducer-1";

const instructions = Platform.select({
    ios    : 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.name);
        return (
            <View>
                <Text>
                    Home Screen
                </Text>
                <Text>
                    data store: {this.props.name}
                </Text>
                <Text>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    name: state.reducerTwo.name
});

export default connect(mapStateToProps, ({}) => ({}))(HomeScreen);
