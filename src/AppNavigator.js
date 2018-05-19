import { createStackNavigator } from 'react-navigation';

import Auth from './screens/Auth';
import Event from './screens/events/Event';
import EventList from './screens/events/EventsList';

const AppNavigator = createStackNavigator({
  eventList: {
    screen: EventList,
  },
  auth: {
    screen: Auth,
  },
  event: {
    screen: Event,
  },
});

export default AppNavigator;
