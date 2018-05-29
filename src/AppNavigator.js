import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import Auth from './screens/Auth';
import Event from './screens/events/Event';
import EventList from './screens/events/EventsList';
import PeopleList from './screens/people/PeopleList';

const tabNavigator = createMaterialTopTabNavigator({
  events: {
    screen: EventList,
  },
  people: {
    screen: PeopleList,
  },
});

const AppNavigator = createStackNavigator({
  tabs: {
    screen: tabNavigator,
  },
  auth: {
    screen: Auth,
  },
  eventList: {
    screen: EventList,
  },
  event: {
    screen: Event,
  },
});

export default AppNavigator;
