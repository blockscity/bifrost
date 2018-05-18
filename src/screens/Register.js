import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as actions from '../actions';
import * as selectors from '../reducers/selectors'

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {createKeystore, password, confirmed} = this.props;
        return (
            <View style={styles.container}>
                <Input containerStyle={{marginVertical: 10}}
                       leftIcon={
                           <Icon
                               name='lock'
                               color='rgba(171, 189, 219, 1)'
                               size={25}
                           />
                       }
                       placeholder={"Password"}
                       secureTextEntry={true}
                       inputStyle={{marginLeft: 10}}
                       keyboardAppearance="light"
                       autoCapitalize="none"
                       autoCorrect={false}
                       keyboardType="default"
                       returnKeyType="next"
                       blurOnSubmit={true}
                       placeholderTextColor="black"
                       onChangeText={password => this.setState({password})}
                       value={password}/>
                <Input containerStyle={{marginVertical: 10}}
                       leftIcon={
                           <Icon
                               name='lock'
                               color='rgba(171, 189, 219, 1)'
                               size={25}
                           />
                       }
                       placeholder={"Confirm Password"}

                       secureTextEntry={true}
                       inputStyle={{marginLeft: 10}}
                       keyboardAppearance="light"
                       autoCapitalize="none"
                       autoCorrect={false}
                       keyboardType="default"
                       returnKeyType="done"
                       blurOnSubmit={true}
                       placeholderTextColor="black"
                       onChangeText={confirmed => this.setState({confirmed})}
                       value={confirmed}/>
                <Button title={'Register'}
                        disabled={password !== confirmed && password.length < 8}
                        onPress={() => createKeystore(this.state.password)}/>
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
        keystore: selectors.keystore(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createKeystore: (password) => dispatch(actions.keystore.request({password: password}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);