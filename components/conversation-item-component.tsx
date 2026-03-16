import { Colors, FontSize } from "@/constants/theme";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AvatarComponent from "./avatar-component";
import RowComponent from "./row-component";
import TextComponent from "./text-component";

interface IProps {
    onPress?: () => void;
}
const ConversationItemComponent = ({ onPress }: IProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <RowComponent>
                <AvatarComponent onPress={onPress} size={60} />
                <View style={{ justifyContent: 'space-evenly', flex: 1 }}>
                    <RowComponent justifyContent='space-between'>
                        <TextComponent text="Nguyễn Văn A" size={FontSize.medium} />
                        <TextComponent text="10:00" size={FontSize.f13} color={Colors.light.textGray} />
                    </RowComponent>
                    <TextComponent text="alo alo 1234" size={FontSize.f13} color={Colors.light.textGray} />
                </View>
            </RowComponent>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        marginBottom: 8
    },
});
export default ConversationItemComponent;