import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, View, ScrollView} from 'react-native';
import {ListItem, Avatar, Icon} from 'react-native-elements'
import {PURGE} from "redux-persist";

import {Card} from '../components/Card';

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {clean, identity, navigator} = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Card>
                        <ListItem
                            key={"profile"}
                            title={"Account Security"}
                            chevron
                            chevronColor={"#B5B5B5"}
                        />
                    </Card>

                    <Card>
                        <ListItem
                            key={"help"}
                            title={"Help & Feedback"}
                            chevron
                            chevronColor={"#B5B5B5"}
                            bottomDivider={true}
                        />
                        <ListItem
                            key={"about"}
                            title={"About"}
                            chevron
                            chevronColor={"#B5B5B5"}
                        />
                    </Card>

                    <Card>
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
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0"
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);