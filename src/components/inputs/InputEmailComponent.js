import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';

export class InputEmailComponent extends Component {
  render() {
    return <TextInput {...this.props} />;
  }
}

export default InputEmailComponent;
