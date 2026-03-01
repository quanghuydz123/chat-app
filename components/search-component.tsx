import { Colors, FontSize } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, TextInput } from "react-native";
import RowComponent from "./row-component";

const SearchComponent = () => {
    const colorScheme = useColorScheme();
    return (
        <RowComponent styles={styles.container} alignItems='center'>
            <TextInput
                placeholder="Tìm kiếm..."
                placeholderTextColor="#999"
                style={[styles.input, { color: colorScheme === 'dark' ? Colors.dark.text : Colors.light.text }]}
            />
            <FontAwesome name="search" size={24} color={colorScheme === 'dark' ? Colors.dark.text : Colors.light.text} />
        </RowComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 44,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 100,
        paddingHorizontal: 12,
        flex: 1,
    },
    input: {
        flex: 1,
        fontSize: FontSize.large,
    }
});
export default SearchComponent;