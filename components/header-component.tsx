import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";
import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import RowComponent from './row-component';

interface IProps {
    onPress?: () => void;
    suffix?: ReactNode;
    prefix?: ReactNode
}
const HeaderComponent = ({ onPress, suffix, prefix }: IProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { onPress ? onPress() : router.back() }} style={{ paddingRight: 14 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <RowComponent justifyContent="space-between" styles={{ flex: 1 }}>
                {prefix}
                {suffix}
            </RowComponent>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 8,
        alignItems:'center'
    },
});
export default HeaderComponent;