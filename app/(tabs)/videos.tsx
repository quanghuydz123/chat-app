import ContainerComponent from '@/components/container-component';
import { StyleSheet, Text } from 'react-native';


export default function Videos() {
  return (
    <ContainerComponent>
      <Text>Videos</Text>
    </ContainerComponent>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
