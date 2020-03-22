import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';

export class InputTextComponent extends Component {
  render() {
    return <TextInput {...this.props} />;
  }
}

export default InputTextComponent;
