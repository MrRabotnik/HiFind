"use client"

import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './page.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import logo from "../../../Assets/logo.svg";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [validation, setValidation] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        // TODO add token validation from local storage, also check if DB already has that user or not
        if(!validation) return
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

    useEffect(() => {
        let emailValid = false
        let passValid = false
        const regex: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (regex.test(email)) {
            emailValid = true
        }
        if ((Number(password.length) > 7)) {
            passValid = true
        }

        if (emailValid && passValid) {
            setValidation(true)
        } else {
            setValidation(false)
        }
    }, [email, password])

    return (
        <section>
            <div className="container">
                <div className='modal'>
                    <Image src={logo} alt='Logo'></Image>
                    <form onSubmit={handleSubmit} className='form'>
                        <p>Էլ. հասցե</p>
                        <input
                            className='input'
                            type="email"
                            placeholder="Էլ. հասցե"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <p>Գաղտնաբառ</p>
                        <input
                            className='input'
                            type="password"
                            placeholder="Գաղտնաբառ"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {
                            validation ? (
                                <button type="submit" className={"button"}>Մուտք</button>
                            ) : (
                                <button type="submit" disabled className={"button disabled"}>Մուտք</button>
                            )
                        }
                    </form>
                    {error && <p className="error">{error}</p>}
                </div>
            </div>
        </section >
    );
}