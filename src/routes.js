import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';
import Welcome from './pages/Welcome';
import Loading from './pages/Loading';

const Routes = createAppContainer(
  createSwitchNavigator({
    Loading,
    Welcome,
    Main,
    NewEntry,
    Report,
  }),
  {
    initialRoutName: 'Loading',
    backBehavior: 'order',
  },
);

export default Routes;
