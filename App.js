import { StatusBar,setStatusBarHidden } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View,ScrollView,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QuestionPage from './src/templates/QuestionPage.jsx';
import MessageFromAuthors from './src/templates/MessFromAuthor.jsx';
import SignUp from './src/templates/SignUp.jsx';

import SignIn from './src/templates/SignIn.jsx';

let height = Dimensions.get('screen').height;
const Stack = createNativeStackNavigator();

export default function App() {
  setStatusBarHidden(true);
  
  return (

    // <SafeAreaView>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignIn'>
          <Stack.Screen name="Question" component={QuestionPage}>
              {/* {props => <QuestionPage navigation={NavigationContainer.navigation}/>} */}
            </Stack.Screen>

          <Stack.Screen name="Message" component={MessageFromAuthors}>
            {/* {props => <MessageFromAuthors navigation={NavigationContainer.navigation} />} */}
            </Stack.Screen>

          <Stack.Screen name="SignIn" options={{ title: 'Overview' }} component={SignIn} />
            {/* {props => <SignIn navigation={NavigationContainer.navigation} {...props}/>}
            </Stack.Screen> */}

          <Stack.Screen name="SignUp" component={SignUp}>
            {/* {props => <SignUp navigation={NavigationContainer.navigation}/>} */}
            </Stack.Screen>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    height:height
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
