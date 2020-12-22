import React from 'react'
import {View, Text,TextInput, TouchableOpacity, AsyncStorage} from 'react-native'
import styles from '../../component/Styles'


export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:'',
            ep:'',
            pwd:''
        }
    }

    submit = async()=>{
        const {ep, pwd} = this.state
        //run through an api to check if user exist or not
        const apiEp = 'sam@nerdyeye.com'
        const apiPwd = '123456'
        //authenticate
        if( ep != apiEp && pwd != apiPwd){
            alert("invalid cridentials")
        }else{
            //store user details using async storage
            await AsyncStorage.setItem('user', 'samuel')
            //redirect to main app
            this.props.navigation.navigate('Dashboard')
        }
     }

     componentDidMount = async()=>{
         
        await AsyncStorage.getItem('user') & this.props.navigation.navigate('Dashboard')
        
        if (await AsyncStorage.getItem('user')){
            this.props.navigation.navigate('Dashboard')
        }
     }

    render(){
        return(
            <View style={styles.view}>
                <View style={styles.loginCon}>
                    <Text style={styles.loginHeadingActive}>Log in</Text>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('Register')
                          }
                    >
                        <Text style={styles.loginHeading}>Register</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{marginBottom:30}}>Enter credentials below to log in</Text>
                <TextInput style={styles.input} placeholder="email or phone" value={this.state.ep} onChangeText={ep => this.setState({ep})} />
                <TextInput secureTextEntry={true} style={styles.input} value={this.state.pwd} onChangeText={pwd => this.setState({pwd})} placeholder="password" />
                
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Dashboard',{id:1})}}>
                    <Text style={styles.fp}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.priBtn} onPress={this.submit}><Text style={styles.priBtnText}>Log In</Text></TouchableOpacity>
            </View>
        )
    }
} 