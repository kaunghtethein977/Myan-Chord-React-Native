import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import KeysButtons from '../components/KeysButtons';
import CapoButton from '../components/CapoButton';
import ViewChordButton from '../components/ViewChordButton';
import CapoKey from '../components/CapoKey';
import {Divider} from 'react-native-elements';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.MainView}>
        <View style={styles.containerStyle}>
          <KeysButtons />
          <Divider style={styles.dividerStyle} />
          <CapoButton />
          <Divider style={styles.dividerStyle} />
          <CapoKey />
          <ViewChordButton style={styles.buttonContainerStyle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: 'red',
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dividerStyle: {
    width: 900,
    backgroundColor: '#2196f3',
  },
  buttonContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
});

export default MainScreen;
