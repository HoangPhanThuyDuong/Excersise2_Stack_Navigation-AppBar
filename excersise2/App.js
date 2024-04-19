import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import MyStack from './routers/MyStack';
import MyStack2 from './routers/MyStack2';
import { PaperProvider } from 'react-native-paper';
import MyDrawer from './routers/MyDrawer';
import MyBottomTabNavigator from './routers/MyBottomTabNavigation';



function App() {
    return (
      <NavigationContainer>
        <PaperProvider>
          {/* <MyDrawer/> */}
          {/* <MyStack/> */}
          {/* <MyStack2/> */}
          <MyBottomTabNavigator/>
        </PaperProvider>
      </NavigationContainer>
  );
}

export default App