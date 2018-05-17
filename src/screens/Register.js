import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import * as actions from '../actions';
import * as selectors from '../reducers/selectors'

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {createIdentity, createIdentity1} = this.props;
        return (
            <View style={styles.container}>
                <Button title={'Register'} onPress={() => createIdentity1("sjkyspa", "password")}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
});

function mapStateToProps(state) {
    return {
        identity: selectors.identity(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createIdentity: (username, password) => dispatch(actions.createIdentity({
            username: username,
            password: password
        })),
        createIdentity1: (username, password) => actions.identity({
            username: username,
            password: password
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);