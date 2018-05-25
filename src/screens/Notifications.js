import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View, ScrollView} from 'react-native';
import {Text, Button, Card} from 'react-native-elements'
import * as actions from '../actions';
import * as selectors from '../reducers/selectors'


class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {createIdentity, identity} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.lists}>
                    <Card
                        title='MEDICAL HISTORY REQUEST'>
                        <Text style={{marginBottom: 10}}>
                            Somebody is about to view you medical history documents
                        </Text>
                        <Button
                            backgroundColor='#03A9F4'
                            fontFamily='Lato'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW NOW'/>
                    </Card>
                    <Card
                        title='MEDICAL HISTORY REQUEST'>
                        <Text style={{marginBottom: 10}}>
                            Somebody is about to view you medical history documents
                        </Text>
                        <Button
                            backgroundColor='#03A9F4'
                            fontFamily='Lato'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW NOW'/>
                    </Card>
                    <Card
                        title='MEDICAL HISTORY REQUEST'>
                        <Text style={{marginBottom: 10}}>
                            Somebody is about to view you medical history documents
                        </Text>
                        <Button
                            backgroundColor='#03A9F4'
                            fontFamily='Lato'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW NOW'/>
                    </Card>
                    <Card
                        title='MEDICAL HISTORY REQUEST'>
                        <Text style={{marginBottom: 10}}>
                            Somebody is about to view you medical history documents
                        </Text>
                        <Button
                            backgroundColor='#03A9F4'
                            fontFamily='Lato'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW NOW'/>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
    },
    lists: {
        marginTop: "2%"
    }
});

function mapStateToProps(state) {
    return {
        identity: selectors.keystore(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);