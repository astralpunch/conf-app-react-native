import React, { Component } from 'react';
import { groupBy } from 'lodash';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  SectionList,
  TouchableHighlight,
  Modal,
} from 'react-native';
import { eventList } from '../../fixtures';

import EventCard from './EventCard';

class EventList extends Component {
  static defaultProps = {
    events: eventList,
  };

  state = {
    deleteModalOpen: false,
  };

  render() {
    return (
      <View>
        <Modal animationType="slide" transparent={false} visible={this.state.deleteModalOpen}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Delete event?</Text>
              <Button title="Close" onPress={this.toggleDeleteModal} />
            </View>
          </View>
        </Modal>
        <SectionList
          renderItem={this.getItem}
          renderSectionHeader={this.getSectionHeader}
          sections={this.getEventListSectionsData()}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }

  getEventListSectionsData = () => {
    const groupEvents = groupBy(this.props.events, event => event.title.charAt(0));

    const sections = Object.entries(groupEvents).map(([letter, events]) => ({
      title: `${letter} (${events.length + 1} events)`,
      data: events.map(event => ({
        key: event.uid,
        event,
      })),
    }));

    return sections;
  };

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      deleteModalOpen: !prevState.deleteModalOpen,
    }));
  };

  getSectionHeader = ({ section }) => <Text style={styles.header}>{section.title}</Text>;

  getItem = ({ item }) => <EventCard openModal={} event={item.event} />;
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F0F0F0',
    height: 40,
    lineHeight: 40,
    marginBottom: 5,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.3,
    elevation: 3,
  },
});

export default EventList;
