import {View, Text, StyleSheet, Pressable} from 'react-native'
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated'
import {useState} from 'react'
import { Colors } from '@/constants/colors'

type Props = {
    title: string
    subtext?: string
    onPress?: () => void
}

const PrimaryButton = ({title, subtext, onPress}: Props) => {
  const [isPressed, setIsPressed] = useState(false)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withSpring(isPressed ? 0.95 : 1) }
      ],
      shadowOpacity: isPressed ? 0.3 : 0.5,
      shadowRadius: isPressed ? 4 : 8,
    }
  })

  return (
    <Pressable 
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={styles.pressable}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtext && <Text style={styles.subtext}>{subtext}</Text>}
        </View>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    width: '100%',
  },
  container: {
    width: '100%',
    height: 60,
    borderRadius: 12,
    backgroundColor: Colors.primary800,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtext: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
})

export default PrimaryButton