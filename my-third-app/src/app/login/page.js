"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [token, setToken] = useState("");
    const [role, setRole] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/auth/login", formData);
            window.localStorage.setItem("token", response.data.access_token);
            setToken(response.data.access_token);
            setError("");

            try {

                const userResponse = await axios.get("http://localhost:3000/auth/current-user", {
                    headers: {
                        Authorization: `Bearer ${response.data.access_token}`,
                    },
                });
                setRole(userResponse.data.role);

                if (userResponse.data.role === "admin") {
                    router.push("/admin/dashboard");
                }
                else if (userResponse.data.role === "student") {
                    router.push("/student/dashboard");
                }
                else {
                    setError("Unknown user role. Please contact support.");
                }
            }

            catch (error) {
                if (error.response) {
                    setError(error.response.data.message);
                } else {
                    setError("An error occurred while fetching user data. Please try again.");
                }
            }
        }
        catch (error) {

            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <p>Please enter your credentials to log in.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
                <br />
                <button type="submit">Log In</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {token && <p style={{ color: "green" }}>Login successful! Token: {token}</p>}
            {role && <p style={{ color: "blue" }}>Role: {role}</p>}
        </div>
    );

}