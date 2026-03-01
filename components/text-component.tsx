import { Colors, FontSize } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { StyleSheet, Text, TextStyle } from "react-native";

interface IProps {
    text: string;
    styles?: TextStyle;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    color?: string;
    size?: number;
}
const TextComponent = ({ text, styles, fontWeight, color, size }: IProps) => {
    const colorScheme = useColorScheme();
    return (
        <Text style={[
            styleSheet.text,
            styles,
            { color: colorScheme === 'dark' ? Colors.dark.text : Colors.light.text },
            { fontWeight: fontWeight },
            { color: color },
            { fontSize: size }
        ]}>
            {text}
        </Text>
    );
};
const styleSheet = StyleSheet.create({
    text: {
        fontSize: FontSize.small,
    },
});
export default TextComponent;