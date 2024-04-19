import { StyleSheet, Text, View } from "react-native"

const Profile =()=>{
    return(
        <View style={myStyles.box}>
            <Text style={myStyles.text}> Profile Screen </Text>
        </View>
    )
}
export default Profile;
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