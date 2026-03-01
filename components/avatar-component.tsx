import { Colors, FontSize } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import TextComponent from "./text-component";
interface IProps {
    onPress?: () => void;
}
const AvatarComponent = ({ onPress }: IProps) => {
    const colorScheme = useColorScheme();
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS221fOmoEQSIbhaczO-ag4OUNcia9vwvP9Mg&s' }}
                    style={styles.image}
                />
                <View style={styles.statusDot} />
                <View style={[styles.infoContainer, { backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background }]}>
                    <TextComponent text="Tôi có thể giúp gì cho bạn" styles={{ fontSize: FontSize.xs }} />
                </View>
            </View>
            <TextComponent text="Nguyễn Văn A" />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingRight: 14,
    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 50,
        overflow: 'hidden',
        resizeMode: 'cover',
    },
    imageContainer: {
        alignItems: 'center',
        gap: 12,

    },
    statusDot: {
        width: 13,
        height: 13,
        borderRadius: 6,
        backgroundColor: 'green',
        position: 'absolute',
        bottom: 2,
        right: 6,
        borderWidth: 2,
        borderColor: 'white',
    },
    infoContainer: {
        position: 'absolute',
        top: -24,
        left: -6,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        paddingVertical: 6,
        paddingHorizontal: 4,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});
export default AvatarComponent;