import 'config/reactotron';

import React from 'react';
import { Provider } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

import store from 'redux/store';

const App = () => (
  <Provider store={store}>
    <View>
      <Text>REACT NATIVE BOILERPLATE</Text>
    </View>
  </Provider>
);

export default App;
