import { FontSize } from "@/constants/theme";
import { StyleSheet, TouchableOpacity } from "react-native";
import TextComponent from "./text-component";

interface IProps {
    text: string;
    onPress?: () => void;
    isSelected?: boolean;
}
const TagComponent = ({ text, onPress, isSelected }: IProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styleSheet.container, isSelected && styleSheet.selected]}>
            <TextComponent
                text={text}
                fontWeight={isSelected ? "900" : "bold"}
                color={isSelected ? styleSheet.textSelected.color : styleSheet.text.color}
                size={FontSize.small}
            />
        </TouchableOpacity>
    );
};
const styleSheet = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: '#e1e6ea',
        marginRight: 8,
    },
    selected: {
        backgroundColor: '#e9f5ff',
    },
    text: {
        color: '#6a6d72',
    },
    textSelected: {
        color: '#096acb',
    },
});
export default TagComponent;