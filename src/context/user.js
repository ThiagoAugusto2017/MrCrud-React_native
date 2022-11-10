import React, { createContext, useReducer } from 'react';
import users from '../data/users';

const initialState = { users };
const UsersContext = createContext({});

function actions(state, action) {
    switch (action.type) {
        case 'deleteUser':
            response = {
                ...state,
                users: state.users.filter((o) => o.id !== action.payload.id),
            };
            return response;

        case 'createUser':
            const userCreate = action.payload;
            userCreate.id = Math.round(Math.random() * 100);
            response = {
                ...state,
                users: [...state.users, userCreate],
            };
            return response;

        case 'updateUser':
            const userUpdate = action.payload;
            response = {
                ...state,
                users: state.users.map((o) =>
                    o.id === userUpdate.id ? userUpdate : o
                ),
            };
            return response;

        default:
            return state;
    }
}

export const UserProvider = (props) => {
    let response;
    function reducer(state, action) {
        response = actions(state, action);
        return response;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    );
};

export default UsersContext;
