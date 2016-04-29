/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { AppRegistry, Component, StyleSheet, Text, View } from 'react-native'
import { FBSDKAccessToken } from 'react-native-fbsdkcore'
import { FBSDKLoginButton } from 'react-native-fbsdklogin'

import Cognito from 'react-native-cognito';

const region = '';
const identityPoolId = '';

class FacebookAwsReactNative extends Component {

    onLoginFinished(error, result) {
        if (error) {
            alert('Error logging in.');
        } else {
            if (result.isCancelled) {
                alert('Login cancelled.');
            } else {
                FBSDKAccessToken.getCurrentAccessToken((token) => {
                    if (token) {
                        Cognito.initCredentialsProvider(
                            awsIdentityPoolId,
                            token.tokenString,
                            awsRegion);

                        Cognito.syncData('testDataset', 'key', 'value', (err) => {
                            // success!
                        });
                    }
                });
            }
        }
    }

    onLogoutFinished() {
        alert('Logged out.');
    }

  render() {
    return (
      <View style={styles.container}>
        <FBSDKLoginButton
          onLoginFinished={this.onLoginFinished}
          onLogoutFinished={this.onLogoutFinished}
          readPermissions={[]}
          publishPermissions={[]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FacebookAwsReactNative', () => FacebookAwsReactNative);
