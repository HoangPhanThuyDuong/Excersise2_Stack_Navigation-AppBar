import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen";
import { Avatar, Icon } from "react-native-paper";
const Stack = createStackNavigator();
const Logo =()=>{
    return(
        <Avatar.Image 
            source={{uri: 'https://reactnative.dev/img/header_logo.svg'}}
            size={40}
        />
    )
}
const MyStack = ()=>{
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                // title:"Home Screen",
                headerTitleAlign:"center",
                headerStyle:{
                    backgroundColor:"pink"
                },
                headerRight:()=><Icon source={"home"} size={40} color="violet"/>
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen}
                options={{
                    headerLeft:()=><Logo/>
                }}
            />
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    )
}
export default MyStack