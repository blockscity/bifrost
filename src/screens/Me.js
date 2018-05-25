import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View, ScrollView} from 'react-native';
import {ListItem, Avatar, Icon} from 'react-native-elements'
import {PURGE} from 'redux-persist';

import * as actions from '../actions';
import * as selectors from '../reducers/selectors'


class Me extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {clean, identity, navigator} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.lists}>
                    <View>
                        <ListItem
                            key={"profile"}
                            leftElement={<Avatar
                                size="large"
                                icon={{name: 'person', color: "grey"}}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                            />}
                            title={"yeah~yeah~yeah"}
                            subtitle={"Address:0xxxxxxx"}
                            onPress={
                                () => navigator.push({
                                    title: 'Profile',
                                    screen: 'bifrost.Profile'
                                })
                            }
                            chevron
                            chevronColor={"#B5B5B5"}
                        />
                    </View>

                    <View style={styles.lists}>
                        <ListItem
                            key={"settings"}
                            leftElement={<Avatar
                                size="small"
                                overlayContainerStyle={{backgroundColor: 'transparent'}}
                                icon={{name: 'settings', color: "blue"}}
                                activeOpacity={0.7}
                            />}
                            title={"Settings"}
                            chevron
                            chevronColor={"#B5B5B5"}
                        />
                    </View>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0"
    },
    lists: {
        marginTop: "2%"
    },
});

function mapStateToProps(state) {
    return {
        identity: selectors.keystore(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clean: () => dispatch({
            type: PURGE,
            key: "root",
            result: () => null
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Me);