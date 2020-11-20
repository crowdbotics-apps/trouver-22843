import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile176539Navigator from '../features/UserProfile176539/navigator';
import Maps176520Navigator from '../features/Maps176520/navigator';
import Settings176498Navigator from '../features/Settings176498/navigator';
import Settings176483Navigator from '../features/Settings176483/navigator';
import NotificationList176482Navigator from '../features/NotificationList176482/navigator';
import Maps176481Navigator from '../features/Maps176481/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile176539: { screen: UserProfile176539Navigator },
Maps176520: { screen: Maps176520Navigator },
Settings176498: { screen: Settings176498Navigator },
Settings176483: { screen: Settings176483Navigator },
NotificationList176482: { screen: NotificationList176482Navigator },
Maps176481: { screen: Maps176481Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
