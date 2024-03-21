"use client"

import Head from 'next/head';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './page.scss';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const body = {
                email,
                password
            }
            const res = await axios.post('/api/admin/login/', JSON.stringify(body))
                .then((data) => { console.log(data) })
                .catch((error) => {
                    console.error(error);
                });
            // const { token } = res.data;
            // localStorage.setItem('token', token);
            router.push("/dashboard/notifications");

        } catch (error) {
            console.error(error);
            setError('Something went wrong');
        }
    };

    return (
        <div className="container">
            <Head>
                <title>Login</title>
            </Head>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    className='input'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className='input'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className='button'>Login</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}