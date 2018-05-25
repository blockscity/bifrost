import React from 'react';
import {connect} from 'react-redux'
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements'


class Personal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <ListItem
                        key={"chat1"}
                        leftElement={<Avatar
                            size="medium"
                            icon={{name: 'person', color: "grey"}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />}
                        title={"yuanzheng"}
                        subtitle={"hello"}
                        rightElement={
                            <Text style={{marginBottom: 10}}>
                                11:11
                            </Text>
                        }
                        bottomDivider={true}
                        topDivider={true}
                    />
                    <ListItem
                        key={"chat2"}
                        leftElement={<Avatar
                            size="medium"
                            icon={{name: 'person', color: "grey"}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />}
                        title={"yuanzheng"}
                        subtitle={"hello"}
                        rightElement={
                            <Text style={{marginBottom: 10}}>
                                11:11
                            </Text>
                        }
                        bottomDivider={true}
                        topDivider={true}
                    />
                    <ListItem
                        key={"chat3"}
                        leftElement={<Avatar
                            size="medium"
                            icon={{name: 'person', color: "grey"}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />}
                        title={"yuanzheng"}
                        subtitle={"hello"}
                        rightElement={
                            <Text style={{marginBottom: 10}}>
                                11:11
                            </Text>
                        }
                        bottomDivider={true}
                        topDivider={true}
                    />
                </ScrollView>
            </View>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal);