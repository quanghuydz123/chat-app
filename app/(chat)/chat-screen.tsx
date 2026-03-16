import AvatarComponent from '@/components/avatar-component';
import ContainerComponent from '@/components/container-component';
import RowComponent from '@/components/row-component';
import TextComponent from '@/components/text-component';
import { FontSize } from '@/constants/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text } from 'react-native';


export default function ChatScreen() {
    const prefix = <RowComponent alignItems="center">
        <AvatarComponent size={44} disableDot/>
        <TextComponent text="Quang Huy" size={FontSize.large} fontWeight="bold"/>
      </RowComponent>
    const suffix = <RowComponent alignItems="center">
        <Ionicons name="call" size={24} color="black" style={{marginRight: 24}}/>
        <Ionicons name="videocam" size={24} color="black" style={{marginRight: 24}}/>
        <AntDesign name="info-circle" size={24} color="black" />
    </RowComponent>
    return (
        <ContainerComponent isShowHeader={true} prefix={prefix} suffix={suffix}>
            <Text>Chat Screen</Text>
        </ContainerComponent>
    );
}

const styles = StyleSheet.create({

});