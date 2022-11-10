import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './Views/User_list';
import UserForm from './Views/User-form';
import styles from './App-styles';
import { Button, Icon } from 'react-native-elements';
import { UserProvider } from './context/user';
//import Icon from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();

export default (props) => {
    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={styles.screenOptions}
                >
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: 'Lista de Usuários',
                                headerRight: () => (
                                    <Button
                                        onPress={() =>
                                            navigation.navigate('UserForm')
                                        }
                                        type="clear"
                                        icon={
                                            <Icon
                                                name="add-circle-outline"
                                                size={25}
                                                color="white"
                                            />
                                        }
                                    />
                                ),
                            };
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: 'Formulário de Usuários',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};
