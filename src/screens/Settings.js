import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View, ScrollView} from 'react-native';
import {ListItem, Avatar, Icon, Card} from 'react-native-elements'
import {PURGE} from "redux-persist";


class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {clean, identity, navigator} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.card}>
                        <ListItem
                            key={"profile"}
                            title={"Account Security"}
                            chevron
                            chevronColor={"#B5B5B5"}
                        />
                    </View>

                    <View style={styles.card}>
                        <ListItem
                            key={"help"}
                            title={"Help & Feedback"}
                            chevron
                            chevronColor={"#B5B5B5"}
                        />
                        <ListItem
                            key={"about"}
                            title={"About"}
                            chevron
                            chevronColor={"#B5B5B5"}
                        />
                    </View>

                    <View style={styles.card}>
                        <ListItem
                            key={"logout"}
                            title={"Logout"}
                            onPress={() => {
                                clean();
                                navigator.resetTo({
                                    title: 'Register',
                                    screen: 'bifrost.Register'
                                });
                            }}
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
    card: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 0
    },
});

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        clean: () => {
            dispatch({
                type: PURGE,
                key: "root",
                result: () => null
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);