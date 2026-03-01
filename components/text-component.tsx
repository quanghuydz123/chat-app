import { Colors, FontSize } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { StyleSheet, Text, TextStyle } from "react-native";

interface IProps {
    text: string;
    styles?: TextStyle;
}
const TextComponent = ({ text, styles }: IProps) => {
    const colorScheme = useColorScheme();
    return (
        <Text style={[styleSheet.text, styles, { color: colorScheme === 'dark' ? Colors.dark.text : Colors.light.text }]}>{text}</Text>
    );
};
const styleSheet = StyleSheet.create({
    text: {
        fontSize: FontSize.small,
    },
});
export default TextComponent;