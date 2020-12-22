import React from 'react'
import {View, Text,TextInput, TouchableOpacity} from 'react-native'
import styles from '../../component/Styles'

export default class Login extends React.Component{
    submit = ()=>{
       alert(5)
    }
    render(){
        return(
            <View style={styles.view}>
                <View style={styles.loginCon}>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('Login')
                          }
                    >
                        <Text style={styles.loginHeading}>Log in</Text>
                    </TouchableOpacity>
                    <Text style={styles.loginHeadingActive}>Register</Text>
                </View>
                <Text style={{marginBottom:30}}>Enter credentials below to log in</Text>
                <TextInput style={styles.input} placeholder="full name" />
                <TextInput style={styles.input} placeholder="email" />
                <TextInput style={styles.input} placeholder="phone" />
                <TextInput secureTextEntry={true} style={styles.input} placeholder="password" />
                
                <TouchableOpacity style={styles.priBtn} onPress={this.submit}><Text style={styles.priBtnText}>Log In</Text></TouchableOpacity>
            </View>
        )
    }
}