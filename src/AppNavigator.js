import { createStackNavigator } from 'react-navigation';

import Auth from './screens/Auth';
import Event from './screens/events/Event';
import EventList from './screens/events/EventsList';

const AppNavigator = createStackNavigator({
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
