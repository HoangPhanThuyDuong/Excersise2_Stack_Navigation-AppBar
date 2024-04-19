import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen";
import CustomNavigationBar from "../Components/CustomNavigationBar"
import DemoHomeScreen from "../screens/DemoHomeScreen";
import DemoProfileScreen from "../screens/DemoProfileScreen";
const Stack = createStackNavigator();
const MyStack = ()=>{
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                header: (props)=> <CustomNavigationBar{...props}/>
            }}
        >
            <Stack.Screen name="Home" component={DemoHomeScreen}/>
            <Stack.Screen name="Profile" component={DemoProfileScreen}/>
        </Stack.Navigator>
    )
}
export default MyStack