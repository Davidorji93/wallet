import React from 'react'
import {View, Text, Stylesheet, TouchableOpacity} from 'react-native'
import styles from '../../componets/styles'

import { TextInput } from 'react-native-gesture-handler'


export default class Password extends React.Component{
    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.loginHeadingActive}>Forgot password?</Text>
               
                <TextInput 
                    style={styles.input}
                    placeholder="Enter email"
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Old password"
                    secureTextEntry='true'
                />
                <TextInput 
                    style={styles.input}
                    placeholder="New password"
                    secureTextEntry='true'
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Confirm password"
                    secureTextEntry='true'
                />
                <TouchableOpacity style={styles.priBtn} onPress={this.submit}><Text style={styles.priBtnText}>Change password</Text></TouchableOpacity>
            </View>
        )
    }
}