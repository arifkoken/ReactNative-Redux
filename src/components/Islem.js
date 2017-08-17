import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { sayiChanged } from '../actions';


class Islem extends Component {
  render() {
    console.log(this.props.sayi);
    return (
      <TextInput
        style={{ marginTop: 30 }}
        placeholder="Sayı Gir"
        value={this.props.sayi}
        onChangeText={sayi => this.props.sayiChanged(sayi)}
      />
    );
  }
}
const mapStateToProps = ({ IslemResponse }) => {
  const { sayi } = IslemResponse;
  return { sayi };
};

export default connect(mapStateToProps, { sayiChanged })(Islem);
