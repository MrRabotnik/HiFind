"use client"
import { useEffect, useState } from "react"
import "./page.scss"
import axios from "axios"

const Notification = () => {
    const [email, setEmail] = useState("")

    useEffect(() => {
        axios.get('/api/admin/login/')
            .then((data: any) => {
                console.log(data.data.data[0].email)
                setEmail(data.data.data[0].email)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <div>Email: {email}</div>
    )
}

export default Notification