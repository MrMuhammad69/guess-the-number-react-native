import { Colors } from "@/constants/colors"
import { Text, View, StyleSheet } from "react-native"

type Props = {
    Number: number
}

const Number = ({Number}: Props) => {
  return (
    <View style={styles.container} className="border-4 p-2 m-4 rounded-lg items-center justify-center ">
        <Text className="text-5xl font-bold">
            {Number}
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        borderColor: Colors.accent500,
        
    },
    number: {

    }
})

export default Number