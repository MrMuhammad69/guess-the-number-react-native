import Number from '@/components/number'
import Title from '@/components/Title'
import { useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'

type Props = {
  chosenNumber: number
}

const Gamescreen = ({chosenNumber}: Props) => {
  function generateRandomNumber(min:number,max: number,exclude: number) {
    const rndnum = Math.floor(Math.random() * (max - min)) + min;
    if(rndnum === exclude) {
      return generateRandomNumber(min,max,exclude);
    } else {
      return rndnum
    }
  }
  const initialGuess = generateRandomNumber(1,100, chosenNumber)
  const [currentGuess, setGuess] = useState<number>(initialGuess)

  return (
    <View className='flex-1 p-4 '>
        <Title title="Opponent's guess" />
        <Number Number={currentGuess} />
        <View>
          <Text>
            Higher or Lower
          </Text>
          {/* +  -  */}
        </View>
        {/* <View>Log rounds</View> */}
    </View>
  )
}
const styles = StyleSheet.create({

})

export default Gamescreen