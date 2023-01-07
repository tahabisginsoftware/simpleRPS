import * as React from 'react';
import { Appbar } from 'react-native-paper';


const Header = () => (
        <Appbar.Header style = {{backgroundColor: '#1e1e24'}}>
            <Appbar.Content title = "Rock-Paper-Scissors" color = "white" style={{alignItems:'center'}} titleStyle = {{fontWeight: 'bold'}} />
        </Appbar.Header>
);


export default Header;