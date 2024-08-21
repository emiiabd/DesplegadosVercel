import { getUsuariosEnLocal } from "../helpers/helpers";

export const validateLength = (value) => Boolean(value) && value.length > 3;

export const validatePasswords = (value) => String(value) === String(document.getElementById('password').value);

export const validateUsernames = (username) => Boolean(username) && !(getUsuariosEnLocal().find((user) => user.username === username)) && /^[a-zA-Z0-9_\-]+$/i.test(username);

export const validationSchema = {
    'name': {
        validate: validateLength,
        errorText: 'El nombre debe tener mas de 3 caracteres'
    },
    'username': {
        validate: validateUsernames,
        errorText: 'Nombre de usuario no valido o existente'
    },
    'password': {
        validate: validateLength,
        errorText: 'La contraseña debe tener mas de 3 caracteres'
    },
    'rptPassword': {
        validate: validatePasswords,
        errorText: 'Las contraseñas deben ser identicas'
    },
    'empty': {
        validate: (value) => Boolean(value),
        errorText: 'El campo no puede estar vacio'
    }
};