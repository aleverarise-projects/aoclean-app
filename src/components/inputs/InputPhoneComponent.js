import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';

export class InputPhoneComponent extends Component {
  render() {
    return <TextInput {...this.props} />;
  }
}

export default InputPhoneComponent;
