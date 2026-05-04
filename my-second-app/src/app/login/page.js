"use client"
import { useState } from "react";
import axios from "axios";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formData, setFormData] = useState({ email: "", password: "" });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    async function makeApiCall() {
        try {
            const response = await axios.post("http://localhost:3000/auth/login", formData);
            console.log(response.data);
            localStorage.setItem("token", response.data.access_token);
        } catch (error) {
            console.error("Error making API call:", error);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        makeApiCall();
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" value={formData.email} placeholder="User Email" onChange={handleChange} /><br />
                <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}