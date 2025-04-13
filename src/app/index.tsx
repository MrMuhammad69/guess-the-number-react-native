import StartGameScreen from "@/screens/StartGameScreen";
import { ImageBackground } from "react-native";
import {LinearGradient} from 'expo-linear-gradient'
import { useState } from "react";
import Gamescreen from "@/screens/Gamescreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/colors";

export default function Page() {
  const [chosenNumber, setchosenNumber] = useState<number | null>()
  function pickedNumberHandler(pickedNumber:number) {
    setchosenNumber(pickedNumber)
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if(chosenNumber) {
    screen = <Gamescreen chosenNumber={chosenNumber} />
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={{flex: 1}}>
      <ImageBackground 
        style={{flex: 1}} 
        imageStyle={{opacity: 0.15}} 
        resizeMode="cover" 
        source={require('../assets/img/background.png')}
      >
        <SafeAreaView style={{flex: 1}}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}


// writing a line of code with ultimate amount of ligitimicay is very necessary and having safe cod is above that and what exactly is safe coe