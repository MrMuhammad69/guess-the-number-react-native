import GameLog from '@/components/GameLog'
import Number from '@/components/number'
import PrimaryButton from '@/components/PrimaryButton'
import Title from '@/components/Title'
import { useEffect, useState, useCallback } from 'react'
import {View, Text, StyleSheet, Alert, FlatList} from 'react-native'

type Props = {
  chosenNumber: number,
  onGameOver: (numberOfRounds: number)=> void
}

const Gamescreen = ({chosenNumber, onGameOver}: Props) => {
  const [minBoundary, setMinBoundary] = useState(1)
  const [maxBoundary, setMaxBoundary] = useState(100)
  const [excludedNumbers, setExcludedNumbers] = useState<number[]>([])
  const [currentGuess, setGuess] = useState<number>(0)
  const [guessRounds, setGuessRounds] = useState<number[]>([])

  const generateRandomNumber = useCallback((min: number, max: number, exclude: number[]) => {
    const range = max - min + 1
    const availableNumbers = Array.from({ length: range }, (_, i) => i + min)
      .filter(num => !exclude.includes(num))
    
    if (availableNumbers.length === 0) {
      return -1 // No available numbers
    }
    
    const randomIndex = Math.floor(Math.random() * availableNumbers.length)
    return availableNumbers[randomIndex]
  }, [])

  // Initialize the game
  useEffect(() => {
    const initialGuess = generateRandomNumber(1, 100, [])
    setGuess(initialGuess)
    setExcludedNumbers([initialGuess])
    setGuessRounds([initialGuess])
  }, [generateRandomNumber])

  useEffect(()=> {
    if(currentGuess === chosenNumber) {
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, chosenNumber, onGameOver])

  const nextGuessHandler = useCallback((direction: 'lower' | 'higher') => {
    if(direction === 'lower' && currentGuess < chosenNumber || 
       direction === 'higher' && currentGuess > chosenNumber) {
      Alert.alert("Don't lie", 'You know that this is wrong', [{text: 'Sorry', style: 'cancel'}])
      return 
    }

    const newExcluded = [...excludedNumbers, currentGuess]
    setExcludedNumbers(newExcluded)

    if(direction === 'lower') {
      setMaxBoundary(currentGuess - 1)
    } else {
      setMinBoundary(currentGuess + 1)
    }

    const newGuess = generateRandomNumber(
      direction === 'lower' ? minBoundary : currentGuess + 1,
      direction === 'lower' ? currentGuess - 1 : maxBoundary,
      newExcluded
    )

    if (newGuess === -1) {
      Alert.alert('Error', 'No valid numbers left to guess!', [{text: 'OK', style: 'cancel'}])
      return
    }

    setGuess(newGuess)
    setGuessRounds(prev => [...prev, newGuess])
  }, [currentGuess, chosenNumber, excludedNumbers, minBoundary, maxBoundary, generateRandomNumber])

  return (
    <View className='flex-1 p-4'>
      <Title title="Opponent's guess" />
      <Number Number={currentGuess} />
      <Text className='mx-auto text-3xl font-bold'>
        Higher or lower
      </Text>
      <View className='items-center mt-4'>
        <Text className='text-lg mb-2'>Possible Range: {minBoundary} - {maxBoundary}</Text>
        <View className='flex-row gap-4 w-full px-8'>
          <PrimaryButton className='text-3xl' title='+' onPress={()=> nextGuessHandler('higher')} width="48%" />
          <PrimaryButton title='-' className='text-3xl' onPress={()=> nextGuessHandler('lower')} width="48%" />
        </View>
      </View>
      <View className='mt-4'>
        <FlatList data={guessRounds} renderItem={(itemData) => <GameLog guess={currentGuess} roundNumber={itemData.index + 1} key={itemData.index} />}  keyExtractor={(item) => item.toString()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
export default Gamescreen