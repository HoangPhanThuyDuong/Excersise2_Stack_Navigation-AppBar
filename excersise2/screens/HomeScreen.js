import { useLayoutEffect, useState } from "react"
import { Button, Text, View } from "react-native"

const HomeScreen =({navigation})=>{
    const [count, setCount] = useState(0)
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=> <Button title="INFO" onPress={()=> setCount(count+1)}/>
        })
    }, [count])
    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text> count: {count} </Text>
            <Button
                title="Go to Profile"
                onPress={()=> navigation.navigate("Profile",{name:"Hoang Phan Thuy Duong",age:23})}
            />
        </View>
    )
}
export default HomeScreen