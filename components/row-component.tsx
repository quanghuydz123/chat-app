import { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
interface IProps {
    children: ReactNode;
    styles?: StyleProp<ViewStyle>;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}
const RowComponent = (props: IProps) => {
    const { children, styles, justifyContent, alignItems } = props;
    return (
        <View style={[stylesSheet.container, styles, { justifyContent, alignItems }]}>
            {children}
        </View>
    );
};

const stylesSheet = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default RowComponent;