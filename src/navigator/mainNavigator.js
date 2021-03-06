import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen410112Navigator from '../features/BlankScreen410112/navigator';
import BlankScreen310111Navigator from '../features/BlankScreen310111/navigator';
import BlankScreen210110Navigator from '../features/BlankScreen210110/navigator';
import BlankScreen110109Navigator from '../features/BlankScreen110109/navigator';
import BlankScreen010108Navigator from '../features/BlankScreen010108/navigator';
import BlankScreen210107Navigator from '../features/BlankScreen210107/navigator';
import BlankScreen010105Navigator from '../features/BlankScreen010105/navigator';
import BlankScreen110104Navigator from '../features/BlankScreen110104/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen410112: { screen: BlankScreen410112Navigator },
BlankScreen310111: { screen: BlankScreen310111Navigator },
BlankScreen210110: { screen: BlankScreen210110Navigator },
BlankScreen110109: { screen: BlankScreen110109Navigator },
BlankScreen010108: { screen: BlankScreen010108Navigator },
BlankScreen210107: { screen: BlankScreen210107Navigator },
BlankScreen010105: { screen: BlankScreen010105Navigator },
BlankScreen110104: { screen: BlankScreen110104Navigator },

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
