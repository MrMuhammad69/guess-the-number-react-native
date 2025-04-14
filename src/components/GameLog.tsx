import { Colors } from '@/constants/colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
    roundNumber: number
    guess: number
}

const GameLog = ({roundNumber,guess}: Props) => {
  return (
    <View style={styles.listItems}>
        <Text style={styles.itemText}>
            #{roundNumber}
        </Text>
        <Text style={styles.itemText} >
            Opponent's Guess: {guess}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItems: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText : {
        fontFamily: 'open-sans'
    }
})

export default GameLog