import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Animated } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from "expo-constants";
import DPresult from './DPresult';
import Actions from "./Actions";
import Header from "./Header";

export default function RPS(){
    
    //Gameplay
    const [Choice, setChoice] = React.useState(0);
    const [botChoice, setBotChoice] = React.useState(0);
    const [result, setResult] = React.useState("");
    const [canPlay, setPlay] = React.useState(true);

    //Animation
    const fadeAnim = React.useRef(new Animated.Value(1)).current;

    function play(choice) {
        // 3 choices:
        // 1 = rock
        // 2 = paper
        // 3 = scissors

        const randomBotChoice = Math.floor(Math.random() * 3) + 1;
        let resultString = "";

        if(choice === 1){
            resultString = randomBotChoice === 3 ? "You Win." : "You Lose.";
        }
        else if (choice === 2){
            resultString = randomBotChoice === 1 ? "You Win." : "You Lose.";
        }
        else if (choice === 3){
            resultString = randomBotChoice === 2 ? "You Win." : "You Lose.";
        }

        if (choice === randomBotChoice){
            resultString = "Draw.";
        }
        
        setChoice(choice);
        setBotChoice(randomBotChoice);

        setTimeout(() => {
            setResult(resultString);
        }, 300);

        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue:0,
                duration:300,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();

        setPlay(false);
        setTimeout(()=> {
            setPlay(true);
        }, 600);
    }

    // return view
    return (
        <SafeAreaProvider style ={{backgroundColor: '#afbed1'}}>
            <Header />
        <SafeAreaView style = {styles.container}>
            <View style = {styles.content}>
                <View style = {styles.result}>
                    <Animated.Text
                    style = {[styles.resultText, {opacity: fadeAnim}]}
                    >
                        {result}
                    </Animated.Text>
                </View>
                <View style = {styles.screen}>
                    {!result ? (
                        <Text style = {styles.readyText}>Let's Play</Text>
                    ) : (
                        <DPresult 
                        Choice = {Choice}
                        botChoice = {botChoice}
                        />
                    )}
                </View>
                <Actions play = {play} canPlay = {canPlay} />
            </View>
        </SafeAreaView>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: '#afbed1',
  },
  result: {
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',

  },
  screen: {
    flex: 1,
    flexDirection: 'row',
  },
  readyText: {
    marginTop: -48,
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%',
    fontSize: 48,
    fontWeight: 'bold',
  },
});
