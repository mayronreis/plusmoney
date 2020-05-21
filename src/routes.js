import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {isInitialized} from './services/welcome';
import {isLogged} from './services/Auth';

import Loading from './pages/Loading';
import Welcome from './pages/Welcome';
import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

const Stack = createStackNavigator();

const AppScreens = ({logged, initiated}) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      //initialRouteName="SignIn">
      initialRouteName={logged ? (initiated ? 'Main' : 'Welcome') : 'SignIn'}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="NewEntry" component={NewEntry} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initiated, setInitiated] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    async function initialVerifications() {
      if (await isInitialized()) {
        setInitiated(true);
      }

      if (await isLogged()) {
        setLogged(true);
      }

      setIsLoading(false);
    }
    initialVerifications();
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <AppScreens logged={logged} initiated={initiated} />
    </NavigationContainer>
  );
};

export default Routes;
