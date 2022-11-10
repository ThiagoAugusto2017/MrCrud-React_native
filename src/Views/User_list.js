/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Alert, FlatList, Text, View, Platform } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import UsersContext from '../context/user';

export default (props) => {
    const { state, dispatch } = useContext(UsersContext);

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuario', 'Deseja excluir o usuario ❓', [
            {
                text: 'sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: { id: user.id },
                    });
                },
            },
            {
                text: 'nao',
            },
        ]);
    }

    function onDelete(user) {
        return {
            name: Platform.OS === 'ios' ? 'trash' : 'delete',
            size: 25,
            color: '#FF0000',
            onPress: () => confirmUserDeletion(user),
        };
    }

    function onEdit(user) {
        return {
            name: Platform.OS === 'ios' ? 'pencil' : 'edit',
            size: 25,
            color: '#008000',

            onPress: () => props.navigation.navigate('UserForm', user),
        };
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                key={user.id}
                onPress={() => props.navigation.navigate('UserForm', user)}
                bottomDivider
                pad={20}
            >
                <Avatar rounded size={32} source={{ uri: user.avatarUrl }} />

                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>

                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>

                    <ListItem.Subtitle>{user.profession}</ListItem.Subtitle>
                </ListItem.Content>

                <ListItem.Chevron iconProps={onEdit(user)} />
                <ListItem.Chevron iconProps={onDelete(user)} />
                <ListItem.Chevron />
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
                keyExtractor={(user) => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    );
};
