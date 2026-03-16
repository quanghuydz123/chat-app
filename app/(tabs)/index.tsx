import AvatarComponent from '@/components/avatar-component';
import ContainerComponent from '@/components/container-component';
import ConversationItemComponent from '@/components/conversation-item-component';
import RowComponent from '@/components/row-component';
import SearchComponent from '@/components/search-component';
import TagComponent from '@/components/tag-component';
import TextComponent from '@/components/text-component';
import { FontSize } from '@/constants/theme';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  const [isTop, setIsTop] = useState(true);
  return (
    <ContainerComponent>
      <RowComponent>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWc4dEr7ZP-7-ykETT3TXu-3du-HL3wa1wQ&s' }}
          style={styles.image}
        />
        <TextComponent text="messager" size={FontSize.xxlarge} fontWeight='bold' color='#004dba' />
      </RowComponent>
      {!isTop && <View style={styles.shadow} />}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ }}
        bounces={false}
        overScrollMode="never"
        alwaysBounceVertical={false}
        scrollEventThrottle={16} // cần để onScroll chạy mượt
        showsVerticalScrollIndicator={false}
        onScroll={(event) => {
          const y = event.nativeEvent.contentOffset.y;
          if (y <= 0 && !isTop) {
            setIsTop(true);
          } else if (y > 0 && isTop) {
            setIsTop(false);
          }
        }}
      >
        <View>
          <SearchComponent />
        </View>
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={() => <AvatarComponent onPress={() => { }} name='Nguyễn Văn A' />}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.avatarContainer}
            bounces={false}
            overScrollMode="never"
            alwaysBounceHorizontal={false}
          />
        </View>
        <RowComponent styles={styles.tagContainer} justifyContent='flex-start'>
          <TagComponent text="Tất cả" isSelected />
          <TagComponent text="Đang hoạt động" />
          <TagComponent text="Đã hoàn thành" />
        </RowComponent>
        <View style={{ marginTop: 16 }}>
          <ConversationItemComponent onPress={() => { router.push('/chat-screen') }} />
          <ConversationItemComponent onPress={() => { }} />
          <ConversationItemComponent onPress={() => { }} />
          <ConversationItemComponent onPress={() => { }} />
          <ConversationItemComponent onPress={() => { }} />
          <ConversationItemComponent onPress={() => { }} />
          <ConversationItemComponent onPress={() => { }} />
          <ConversationItemComponent onPress={() => { }} />
          <ConversationItemComponent onPress={() => { }} />
          <ConversationItemComponent onPress={() => { }} />
        </View>
      </ScrollView>

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
  },
  image: {
    width: 38,
    height: 38,
    resizeMode: 'cover',
    marginBottom: 8,
    marginRight: 4
  },
  shadow: {
  height: 3,
  marginHorizontal: -16,
  backgroundColor: '#e1e6ea',

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.2,
  shadowRadius: 4,

  elevation: 4,
}
});
