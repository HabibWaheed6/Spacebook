import React, { Component } from 'react';
import {
  Text, TextInput, View, Button, StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (done) => {
  try {
    const jsonValue = await AsyncStorage.getItem('@spacebook_details');
    const data = JSON.parse(jsonValue);
    return done(data);
  } catch (e) {
    console.error(e);
  }
};

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login_info: {},
      isLoading: true,
      info: {},
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    getData((data) => {
      this.setState({
        login_info: data,
        isLoading: false,
        info: {},
      });

      this.getProfile();
    });
  }
  getProfile = () => {
    console.log('Getting profile...');
    return fetch(`http://localhost:3333/api/1.0.0/user/${this.state.login_info.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': this.state.login_info.token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          info: responseJson,
        });
        this.setState({
          first_name: this.state.info.first_name,
          last_name: this.state.info.last_name,
          email: this.state.info.email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
update = () => {
    const to_send = {};

    if (this.state.info.first_name != this.state.first_name) {
      to_send.first_name = this.state.first_name;
    }

    if (this.state.info.last_name != this.state.last_name) {
      to_send.last_name = this.state.last_name;
    }

    if (this.state.info.email != this.state.email) {
      to_send.email = this.state.email;
    }

    if (this.state.info.password != this.state.password) {
      to_send.password = this.state.password;
    }
    console.log(JSON.stringify(to_send));

    console.log('Updating profile...');
    return fetch(`http://localhost:3333/api/1.0.0/user/${this.state.login_info.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': this.state.login_info.token,
      },
      body: JSON.stringify(to_send),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          info: responseJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    };
update = () => {
    const to_send = {};

    if (this.state.info.first_name != this.state.first_name) {
      to_send.first_name = this.state.first_name;
    }

    if (this.state.info.last_name != this.state.last_name) {
      to_send.last_name = this.state.last_name;
    }

    if (this.state.info.email != this.state.email) {
      to_send.email = this.state.email;
    }

    if (this.state.info.password != this.state.password) {
      to_send.password = this.state.password;
    }
    console.log(JSON.stringify(to_send));

    console.log('Updating profile...');
    return fetch(`http://localhost:3333/api/1.0.0/user/${this.state.login_info.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': this.state.login_info.token,
      },
      body: JSON.stringify(to_send),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          info: responseJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  update = () => {
    const to_send = {};

    if (this.state.info.first_name != this.state.first_name) {
      to_send.first_name = this.state.first_name;
    }

    if (this.state.info.last_name != this.state.last_name) {
      to_send.last_name = this.state.last_name;
    }

    if (this.state.info.email != this.state.email) {
      to_send.email = this.state.email;
    }
 
    if (this.state.info.password != this.state.password) {
      to_send.password = this.state.password;
    }
    console.log(JSON.stringify(to_send));

    console.log('Updating profile...');
    return fetch(`http://localhost:3333/api/1.0.0/user/${this.state.login_info.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': this.state.login_info.token,
      },
      body: JSON.stringify(to_send),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          info: responseJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View><Text>Loading...</Text></View>
      );
    }

    console.log('here', this.state);
    return (
      <View style={styles.flexContainer}>

        <View>
          <Text>Update first Name:</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={this.state.info.first_name}
            onChangeText={(first_name) => this.setState({ first_name })}
            defaultValue={this.state.info.first_name}
          />
        </View>

        <View>
          <Text>Update Last Name:</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={this.state.info.last_name}
            onChangeText={(last_name) => this.setState({ last_name })}
            defaultValue={this.state.info.last_name}
          />
        </View>

        <View>
          <Text>Update Email Address:</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={this.state.info.email}
            onChangeText={(email) => this.setState({ email })}
            defaultValue={this.state.info.email}
          />
        </View>

        <View>
          <Text>Update password:</Text>
          <TextInput
            style={styles.inputStyle}
            color="#FAA030"
            placeholder="Enter new password if you want to change(leave blank if password is remaining same)"
            onChangeText={(password) => this.setState({ password })}
            secureTextEntry
          />
        </View>

        <Button
          style={styles.buttonStyle}
          title="Update Profile"
          color="#FAA030"
          onPress={() => {
            this.props.navigation.navigate('Profile');
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    flexContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  
    buttonStyle: {
      width: 50,
      height: 50,
      alignItems: 'center',
  
    },
  
    inputStyle: {
      width: '100%',
    },
  });
  
  export default EditProfile;