/**
 * containers/LoginPage.js
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component, Fragment } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../actions';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Email = t.refinement(t.String, function(s) {
  return /\S+@\S+\.\S+/.test(s);
});

const LoginForm = t.struct({
  email: Email,
  password: t.String
});

const formOptions = {};

class LoginPage extends Component {
  handleSubmit = () => {
    const data = this.refs.form.getValue(); // cant do const { email, password } because will
                                        // fail to parse when this.form.getValue() is null
    if (data) {
      dispatch(login(data.email, data.password))
        .then(res => {
          if (res) {
            this.props.navigateTo(this.props.navigation.getParam('redirect', BUYER_HOME_ROUTE));
          }
        });
    }
  }

  render() {
    return (
      <Fragment>
        <SafeAreaView>
          <View style={styles.container}>
            <Form
              ref='form'
              type={LoginForm}
              options={formOptions}
            />
            <TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default LoginPage;
