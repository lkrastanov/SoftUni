import commonPartial from './partials.js';
import { registerUser, login, logout } from '../models/user.js';
import { saveUserInfo } from './auth.js';

export function getLogin(context) {
    context.loadPartials(commonPartial).partial('./views/user/login.hbs')
}

export function getRegister(context) {
    context.loadPartials(commonPartial).partial('./views/user/register.hbs')
}

export function postRegister(context) {
    const { username, password, rePassword } = context.params;

    if (password !== rePassword) {
        throw new Error('Passwords do not match!');
    }

    registerUser(username, password)
        .then(res => {
            saveUserInfo(res.user.email)
            context.redirect('#/home');
        })
        .catch(e => console.log(e))
}

export function postLogin(context) {
    const { username, password } = context.params;
    login(username, password)
        .then(res => {
            saveUserInfo(res.user.email)
            context.redirect('#/home');
        })
        .catch(e => console.log(e))

}

export function getLogout(context) {
    logout()
        .then(res => {
            sessionStorage.clear()
            context.redirect('#/login');
        })
        .catch(e => console.log(e))
}
