import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {ListItem, Avatar, Icon} from 'react-native-elements'
import * as selectors from '../reducers/selectors'


class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {clean, identity, navigator} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.lists}>
                    <ListItem
                        key={"profile"}
                        rightElement={
                            <Avatar
                                size="large"
                                title="BR"
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                            />
                        }
                        title={"Profile Photo"}
                        chevron
                        chevronColor={"#B5B5B5"}
                        topDivider={true}
                        bottomDivider={true}
                    />
                    <ListItem
                        key={"email"}
                        rightElement={
                            <Text>sjkysp@gmail.com</Text>
                        }
                        title={"Email"}
                        chevron
                        chevronColor={"#B5B5B5"}
                        topDivider={true}
                        bottomDivider={true}
                    />
                    <ListItem
                        key={"phone"}
                        rightElement={
                            <Text>19991974369</Text>
                        }
                        title={"Phone"}
                        chevron
                        chevronColor={"#B5B5B5"}
                        topDivider={true}
                        bottomDivider={true}
                    />
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
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);