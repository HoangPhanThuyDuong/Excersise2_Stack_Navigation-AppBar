import { StyleSheet, Text, View } from "react-native"

const Home =()=>{
    return(
        <View style={myStyles.box}>
            <Text style={myStyles.text}> Home Screen </Text>
        </View>
    )
}
export default Home;
const myStyles = StyleSheet.create({
    box:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize: 30,
        fontWeight: "bold"
    }
})