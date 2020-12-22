import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Login from '../screens/Login'

const styles = StyleSheet.create({
   
   
        text:{
            fontSize:18,
            padding:100,
            fontWeight:'bold'

        },
    
    //[...]
  });
 
const slides = [
  {
    key: 1,
    text: 'Fund Wallet',
    image: require('../../assets/intro1.png'),
    backgroundColor: '#0bd70a',
    Color:'#0bd70a',
  },
  {
    key: 2,
    text: 'Recieve or Send Money',
    image: require('../../assets/intro2.png'),
    backgroundColor: '#0bd70a',
  },
  {
    key: 3,
    text: 'Expense Control',
    image: require('../../assets/intro3.png'),
    backgroundColor: '#0bd70a',
  }
];
export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showRealApp: false
          }

    };
   
    _renderItem = ({ item }) => {
      return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.title}>{item.title}</Text>
          <Image source={item.image} />
          <Text style={styles.text}>{item.text}</Text>
          
        </View>
      );
    };
    _onDone = () => {
      // User finished the introduction. Show real app through
      // navigation or simply by controlling state
    
      this.setState({ showRealApp: true });
    };
    
    render() {
      if (this.state.showRealApp) {
        return <Login />;
      } else {
        return(
        <AppIntroSlider
        activeDotStyle={{width: 10,backgroundColor: '#0bd70a',}}
         renderItem={this._renderItem}
         data={slides}
         onDone={this._onDone}
        />
      
        );
      }
    }
  }