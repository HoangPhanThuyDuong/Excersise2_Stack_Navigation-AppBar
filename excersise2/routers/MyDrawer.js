import { createDrawerNavigator} from '@react-navigation/drawer'
import DemoHomeScreen from '../screens/DemoHomeScreen'
import CustomDrawerNavigation from '../Components/CustomNavigationDrawer'
import DemoProfileScreen from '../screens/DemoProfileScreen'
const Drawer = createDrawerNavigator()
const MyDrawer = ()=>{
    return(
        <Drawer.Navigator
            drawerContent={(props)=><CustomDrawerNavigation{...props}/>}>
            
            <Drawer.Screen name="Home" component={DemoHomeScreen}/>
            <Drawer.Screen name="Profile" component={DemoProfileScreen}/>
        </Drawer.Navigator>
    )
}
export default MyDrawer