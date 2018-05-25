import React from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import colors from "react-native-elements/src/config/colors";
import fonts from "react-native-elements/src/config/fonts";
import normalize from "react-native-elements/src/helpers/normalizeText";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: colors.grey5,
        borderWidth: 1,
        paddingVertical: 0,
        paddingHorizontal: 0,
        margin: 15,
        marginHorizontal: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: {height: 0, width: 0},
                shadowOpacity: 1,
                shadowRadius: 1,
            },
            android: {
                elevation: 1,
            },
        }),
    },
    cardTitle: {
        fontSize: normalize(14),
        ...Platform.select({
            ios: {
                fontWeight: 'bold',
            },
            android: {
                ...fonts.android.black,
            },
        }),
        textAlign: 'center',
        marginBottom: 15,
        color: colors.grey1,
    },
});

export const Card = props => {
    const {
        children,
        containerStyle,
        flexDirection,
        dividerStyle,
        fontFamily,
        title,
        ...attributes
    } = props;

    return (
        <View
            {...attributes}
            style={[styles.container, containerStyle]}>
            <View
                style={[
                    flexDirection && {flexDirection},
                ]}
            >
                {title === '' || React.isValidElement(title)
                    ? title
                    : title &&
                    title.length && (
                        <View>
                            <Text style={[styles.cardTitle]}>
                                {title}
                            </Text>
                        </View>)
                }
                <View>
                    {children}
                </View>
            </View>
        </View>
    )
};