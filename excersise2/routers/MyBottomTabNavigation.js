import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DemoHomeScreen from '../screens/DemoHomeScreen';
import DemoProfileScreen from '../screens/DemoProfileScreen';

const Tab = createMaterialBottomTabNavigator();

const MyBottomTabNavigator = ()=>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={DemoHomeScreen}/>
            <Tab.Screen name="profile" component={DemoProfileScreen}/>
        </Tab.Navigator>
    )
}
export default MyBottomTabNavigator