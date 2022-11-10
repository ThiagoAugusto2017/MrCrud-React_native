import React, { useState, useContext } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { UseForm } from '../components/user-form/user-form';
import { Button, Icon } from 'react-native-elements';
import UsersContext from '../context/user';

export default ({ navigation, route }) => {
    const [user, setUser] = useState(route.params ? route.params : {});
    const { state, dispatch } = useContext(UsersContext);
    return (
        <View style={styles.form}>
            <Text>Nome do Usuario:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(name) => setUser({ ...user, name })}
                placeholder="informe seu nome"
                value={user.name}
            ></TextInput>

            <Text>Email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(email) => setUser({ ...user, email })}
                placeholder="informe seu email"
                value={user.email}
            ></TextInput>

            <Text>Profissão:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(profession) => setUser({ ...user, profession })}
                placeholder="informe sua profissão"
                value={user.profession}
            ></TextInput>

            <Text>Imagem:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
                placeholder="informe a url da sua foto"
                value={user.avatarUrl}
            ></TextInput>
            <View style={styles.buttonStyle}>
                <Button
                    buttonStyle={{
                        backgroundColor: 'rgba(90, 154, 230, 1)',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    title="Salvar"
                    onPress={() => {
                        dispatch({
                            type: user.id ? 'updateUser' : 'createUser',
                            payload: user,
                        });
                        navigation.goBack();
                    }}
                ></Button>

                <Button
                    buttonStyle={{
                        backgroundColor: 'rgba(90, 154, 230, 1)',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    title="Voltar"
                    onPress={() => {
                        navigation.goBack();
                    }}
                ></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        padding: 15,
    },
    buttonStyle: {
        height: 100,
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
});
