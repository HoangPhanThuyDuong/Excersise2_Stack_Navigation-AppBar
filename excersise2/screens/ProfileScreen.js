import { Button, Text, View } from "react-native"

const ProfileScreen =({navigation, route})=>{
    const {name,age}=route.params
    // console.log(name)
    // console.log(age)
    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text> Hello {name} {age} tuổi </Text>
            <Button 
                title="Go Back"
                onPress={()=>navigation.goBack()}
            />
        </View>
    )
}
export default ProfileScreen