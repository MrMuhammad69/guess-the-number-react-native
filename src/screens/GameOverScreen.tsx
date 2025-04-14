import PrimaryButton from '@/components/PrimaryButton'
import Title from '@/components/Title'
import { Colors } from '@/constants/colors'
import {View, Text, Image, StyleSheet} from 'react-native'

type Props = {
  chosenNumber: number,
  onStartNewGame: ()=> void,
  rounds: number
}

const GameOverScreen = ({chosenNumber, onStartNewGame,rounds}: Props) => {
  return (
    <View className='flex-1 justify-center items-center p-4'>
      <View className='items-center space-y-8'>
        <Title title='Game Over' />
        <View style={styles.imageContainer} className='rounded-full border-2 w-[300] h-[300]'>
          <Image style={styles.image} source={require('../assets/img/success.png')} />
        </View>
        <Text className='text-2xl m-4 text-center'>
          You phone needed <Text className='font-bold text-red-900'>{rounds}</Text> rounds to guess the number <Text className='font-bold text-red-900'>{chosenNumber}</Text>
        </Text>
        <View className='w-full m-8'>
          <PrimaryButton title='Start new game' onPress={onStartNewGame} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    borderColor: Colors.primary500,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default GameOverScreen