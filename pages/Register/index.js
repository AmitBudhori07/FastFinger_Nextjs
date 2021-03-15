import React, { useReducer } from 'react';
import styles from 'styles/Login.module.css';
import Image from 'next/image';
import LoginHeaders from 'src/components/loginHeaders';
import { register } from 'service/userApi';
import Router from 'next/router';
import Layout from 'src/containers/layout'

function Register() {
    const [{ name, email, password, formErrors }, dispatch] = useReducer((state, newState) => ({ ...state, ...newState }), {
        name: '',
        email: '',
        password: '',
        formErrors: {}
    });

    const onLoginSubmit = async (e) => {
        e.preventDefault();
            const res = await register({ name, email, password });
            const error = { "error": "User Already exist" }
            res instanceof Error ? dispatch({ formErrors: error }) : Router.push('/')
    }

    return (
        <Layout title="Register">
        <div className={styles.main}>
                <LoginHeaders />
                <form className={styles.forms} onSubmit={onLoginSubmit}>
                    <span style={{ color: "red" }}>{formErrors["error"]}</span>
                    <input type="text" placeholder="USERNAME" value={name} onChange={({ target: { value } }) => dispatch({ name: value })} required />
                    <input type="email" placeholder="EMAIL" value={email} onChange={({ target: { value } }) => dispatch({ email: value })} required/>
                    <input type="password" placeholder="PASSWORD" value={password} onChange={({ target: { value } }) => dispatch({ password: value })} required minLength="8"/>

                    <button type="submit" className={styles.btn_start_game}>
                        <Image className={styles.icon_play} src="/play.png" alt="play" width="50" height="50" />
                        REGISTER</button>
                   </form>
            </div>
        </Layout>
    )
}

export default Register;