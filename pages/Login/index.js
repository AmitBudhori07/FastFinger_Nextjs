import React, { useReducer, useEffect } from 'react';
import styles from 'styles/Login.module.css';
import Image from 'next/image';
import LoginHeaders from 'src/components/loginHeaders';
import { DIFFICULTY_LEVEL } from 'src/constants/Difficulty';
import { useUser } from 'data/useUser';
import fetchJson from 'service/fetchJson';
import Router, { useRouter } from 'next/router';



Router.events.on('routeChangeStart', () => { console.log("navigating"); return (<><h1 style={{ color: "red" }}>Loading</h1></>) });
Router.events.on('routeChangeComplete', () => { console.log("navigating"); return (<><h1 style={{ color: "red" }}>Loading</h1></>) });

function Login() {
    const [{ email, password, level, formErrors }, dispatch] = useReducer((state, newState) => ({ ...state, ...newState }), {
        email: '',
        password: '',
        level: 'EASY',
        formErrors: {}
    });
    const { mutateUser, loading } = useUser({
        redirectTo: '/Game',
        redirectIfFound: true,
        level: level
    })
    const router = useRouter()

    useEffect(() => {
        router.prefetch('/Game')
    }, [])

    const onLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            await mutateUser(
                fetchJson('/api/auth/signin', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: email, password: password }),
                })
            )
        } catch (err) {
            console.error('An unexpected error happened:', err);
            const error = { "error": "Invalid Email or password" }
            dispatch({ formErrors: error })
        }
        localStorage.setItem('level', level);
    }

    if (loading) {
        return (
            <>
                <h1 style={{ color: "red", position: "absolute", bottom: "20px", right: "20px" }}>Loading...</h1>
            </>)
    }

    return (
        <React.Fragment>
            <div className={styles.main}>
                <LoginHeaders />
                <form className={styles.forms} onSubmit={onLoginSubmit}>
                    <span style={{ color: "red" }}>{formErrors["error"]}</span>
                    <input type="email" placeholder="EMAIL" value={email} onChange={({ target: { value } }) => dispatch({ email: value })} required />

                    <input type="password" placeholder="PASSWORD" value={password} onChange={({ target: { value } }) => dispatch({ password: value })} required />

                    <select value={level} onChange={({ target: { value } }) => dispatch({ level: value })}>

                        {DIFFICULTY_LEVEL.map(({ label, value }) => (
                            <option key={value}>{label}</option>
                        ))}

                    </select>
                    <button type="submit" className={styles.btn_start_game}>
                        <Image className={styles.icon_play} src="/play.png" alt="play" width="50" height="50" />
                        START THE GAME</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Login;