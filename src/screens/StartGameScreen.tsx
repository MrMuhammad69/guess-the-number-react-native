import PrimaryButton from '@/components/PrimaryButton'
import { Colors } from '@/constants/colors'
import { useState } from 'react'
import { Text } from 'react-native'
import {TextInput, View, StyleSheet, Alert} from 'react-native'

type Props = {
  onPickNumber: (pickedNumber: number)=> void,

}

const StartGameScreen = ({onPickNumber}: Props) => {
  const [enteredNumber, setEnteredNumber] = useState('')
  const onChangeText = (number: string)=> {
    setEnteredNumber(number)
  }
  const Reset = () => {
    setEnteredNumber('')
  }
  function confirmInputHandler() {
    const chooseNumber = parseInt(enteredNumber);
    if(isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert('Invalid Number', 'Please enter a valid number',[{text : 'Okay', style: 'destructive', onPress: Reset }])
    }
    onPickNumber(chooseNumber)

  }

  return (
    <View style={styles.container}>
      <Text className='text-3xl text-white text-center border-2 font-bold border-white m-8 mt-16 p-3'>
            Guess the number
        </Text>
      <View style={styles.inputContainer}>
        <TextInput 
          maxLength={2} 
          placeholder='Your number' 
          style={styles.input}
          autoCapitalize='none' 
          keyboardType='number-pad' 
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={onChangeText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton title='Reset' subtext='Reset To 0'  />
        <PrimaryButton title='Confirm' subtext='Start the game' onPress={confirmInputHandler} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    borderRadius: 20,
    padding: 24,
    backgroundColor: Colors.primary500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  input: {
    height: 56,
    width: 200,
    fontSize: 24,
    color: Colors.accent500,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 300,
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default StartGameScreen