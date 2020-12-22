import {StyleSheet, Dimensions} from 'react-native'


let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:ScreenWidth,
        height:ScreenHeight,
        backgroundColor: "#fff",
    },
    view:{
        flex:1,
        justifyContent:"center",
        width:ScreenWidth,
        height:ScreenHeight,
        padding:20,
        backgroundColor: "#fff",
    },
    introImg:{
        height:220,
        resizeMode:'contain',
    },
    introHeading:{
        fontSize:16,
        fontWeight:"bold",
        marginBottom:10,
        textTransform:"capitalize",
        color:'#3f3f3f',
    },
    introText:{
        textAlign:"center",
        marginLeft:50,
        marginRight:50,
        color: '#3f3f3f'
    },
 
    loginCon:{
        flexDirection:'row',
        paddingBottom:50,
    },
    loginHeading:{
        fontSize:16,
        fontWeight:"bold",
        textTransform:"capitalize",
        marginBottom:10,
        color:"#3f3f3f",
        marginRight:20,
    },
    loginHeadingActive:{
        fontSize:16,
        fontWeight:"bold",
        textTransform:"capitalize",
        marginBottom:10,
        color:"#0bd70a",
        marginRight:20,
    },
    input:{
        width: ScreenWidth - 40,
        height:40,
        borderWidth:1,
        borderStyle:"solid",
        borderColor:"#ccc",
        borderRadius:5,
        paddingLeft:10,
        marginBottom:15,
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#0bd70a',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
  
      },
    priBtn:{
        backgroundColor:"#0bd70a",
        width:380,
        paddingTop:20,
        paddingBottom:15,
        borderRadius:5,
    },
    priBtnText:{
        color:'#fff',
        textAlign:"center"
    },
    fp:{
        textAlign:"right",
        color: '#0bd70a',
        paddingBottom:60,

    },
   
});

export default styles;