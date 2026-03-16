import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderComponent from "./header-component";
interface Props {
    children: ReactNode;
    isShowHeader?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
}
const ContainerComponent = ({ children, isShowHeader, prefix, suffix }: Props) => {
    const colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();
    return (
        <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background, paddingTop: insets.top }]}>
            {isShowHeader && <HeaderComponent prefix={prefix} suffix={suffix} />}
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white'
    },
});

export default ContainerComponent;