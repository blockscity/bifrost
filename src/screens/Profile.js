import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View, ScrollView} from 'react-native';
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
                        title={"test"}
                        subtitle={"test"}
                        chevron
                        chevronColor={"#B5B5B5"}
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