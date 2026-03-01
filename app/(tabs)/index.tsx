import AvatarComponent from '@/components/avatar-component';
import ContainerComponent from '@/components/container-component';
import RowComponent from '@/components/row-component';
import SearchComponent from '@/components/search-component';
import TagComponent from '@/components/tag-component';
import { FlatList, StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  return (
    <ContainerComponent>
      <SearchComponent />
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={() => <AvatarComponent onPress={() => { }} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.avatarContainer}
        />
      </View>
      <RowComponent styles={styles.tagContainer}>
        <TagComponent />
      </RowComponent>
    </ContainerComponent>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  avatarContainer: {
    marginTop: 28,
    overflow: 'visible',
  },
  tagContainer: {
    marginTop: 8,
  }
});
