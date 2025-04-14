import StartGameScreen from "@/screens/StartGameScreen";
import { ImageBackground, Text } from "react-native";
import {LinearGradient} from 'expo-linear-gradient'
import { useState } from "react";
import Gamescreen from "@/screens/Gamescreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/colors";
import GameOverScreen from "@/screens/GameOverScreen";
import {useFonts} from 'expo-font'
import AppLoading from "expo-app-loading";

export default function Page() {
  const [chosenNumber, setchosenNumber] = useState<number | null>()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [rounds,setRounds] = useState<number>(0)
  function pickedNumberHandler(pickedNumber:number) {
    setchosenNumber(pickedNumber)
    setGameIsOver(false)
  }
  function gameOverHandler(numberOfRounds: number){
    setGameIsOver(true)
    setRounds(numberOfRounds)
  }
  function onStartNewGame(){
    setchosenNumber(null),
    setRounds(0)

  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if(chosenNumber) {
    screen = <Gamescreen onGameOver={gameOverHandler} chosenNumber={chosenNumber} />
  }
  if(gameIsOver && chosenNumber) {
    screen = <GameOverScreen chosenNumber={chosenNumber} rounds={rounds} onStartNewGame={onStartNewGame} />
  }
  const [fontsLoaded] = useFonts(
    {
     'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
     'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf') 
    }
  )
  if(!fontsLoaded) {
    return <AppLoading />
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