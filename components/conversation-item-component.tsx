import { StyleSheet, TouchableOpacity } from "react-native";
import AvatarComponent from "./avatar-component";
import RowComponent from "./row-component";

interface IProps {
    onPress?: () => void;
}
const ConversationItemComponent = ({ onPress }: IProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <RowComponent>
                <AvatarComponent size={60} />
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