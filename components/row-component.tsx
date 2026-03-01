import { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
interface IProps {
    children: ReactNode;
    styles?: StyleProp<ViewStyle>;
}
const RowComponent = (props: IProps) => {
    const { children, styles } = props;
    return (
        <View style={[stylesSheet.container, styles]}>
            {children}
        </View>
    );
};

const stylesSheet = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default RowComponent;