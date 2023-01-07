import { View, Text, StyleSheet } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import React from 'react';

const ICONS = ['hand-rock', 'hand-paper', 'hand-scissors'];

const DPresult = ( { Choice, botChoice }) => {
    return(
       <>
       <View style= {styles.column}>
        <FontAwesome5 
        name = {ICONS[Choice - 1]}
        size = {64}
        color = '#f9d835'
        solid
        style={Choice === 3 ? styles.scissorsLeftIcon : styles.leftIcon}
        />
        <Text style={styles.playerName}> You</Text>
        </View>
        
        <View style={styles.column}>
            <FontAwesome5 
            name={ICONS[botChoice -1]}
            size = {64}
            color = '#f9d835'
            solid
            style = {botChoice === 3 ? styles.scissorsRightIcon : styles.rightIcon
            }
            />
            <Text style= {styles.playerName}> Bot</Text>
       </View>
       </>
    );
}

export default DPresult;

const styles = StyleSheet.create({
    column: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playerName: {
        color: '#373737',
        fontSize: 16,
        marginTop: 16,
    },
    leftIcon: {
        transform: [{rotateZ: '80deg'}],
    },
    scissorsLeftIcon: {
        transform: [{rotateZ: '180deg'}, {rotateX: '180deg'}],
    },
    rightIcon: {
        transform: [
            {rotateZ: '180deg'},
            {rotateY: '180deg'},
            {rotateX: '180deg'},
        ],
    },
});