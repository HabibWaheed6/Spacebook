import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, Button, Alert, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



class Feedpage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            getPostList: [], /* use same format as swagger*/
            post_id: '',
            text: '',
            User: [],
            getSinglePostID: '',
            getSinglePostText: '',






        };
    }

    async componentDidMount() {

        let val = await AsyncStorage.getItem('@session_token');
        let id = await AsyncStorage.getItem('@session_id')

        return fetch('http://localhost:3333/api/1.0.0/user/' + id + '/post', {
            method: 'GET',
            headers: {
                'X-Authorization': val
            },
        })


            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    isloading: false,
                    getPostList: responseJson,
                    getSinglePostID: responseJson.post_id,
                    getSinglePostText: responseJson.text
                })
            })

            .catch((error) => {
                alert(error);

            });
    }





    render() {
        if (this.state.isLoading) {
            return (
               
                <View>    

                    <View>
                        <FlatList
                        data={this.state.getPostList}
                        keyExtractor={(item, index) => item.post_id.toString()}
                            renderItem={({ item }) => (
                                <View>
                                    <Text>{item.text}</Text>
                                </View>
                            )}                          
                        />
                </View>


               

                </View>
            );
        } else {
            return (
                <View>
                    <FlatList
                        data={this.state.getPostList}
                        renderItem={({ item }) => (
                            <View>
                                <Text>{item.text}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => item.user_id.toString()}
                    />

                    <Text>This is working</Text>
                    <Button
                        title="signout. this takes you to logout page"
                        onPress={() => this.props.navigation.navigate("Settings")}
                    />
                </View>
            );
        }
    }


}

export default Feedpage;