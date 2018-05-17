import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, ScrollView, Text, Alert} from 'react-native';
import Row from '../components/Row';
import * as actions from '../actions';
import * as selectors from '../reducers/selectors'


class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {createIdentity, identity} = this.props;
        return (
            <ScrollView style={styles.container}>
                <Row title={'Register'} onPress={() => createIdentity("sjkyspa", "password")}/>
                <Text>{JSON.stringify(identity)}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

function mapStateToProps(state) {
    return {
        identity: selectors.keystore(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createKeystore: (username, password) => dispatch(actions.createIdentity({
            username: username,
            password: password
        }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);