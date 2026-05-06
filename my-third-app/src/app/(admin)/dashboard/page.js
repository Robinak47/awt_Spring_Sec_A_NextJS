"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const router = useRouter();



    useEffect(() => {

        const varifyToken = async () => {

            try {
                const response = await axios.get("http://localhost:3000/auth/current-user", {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                    },
                });

                console.log("User data:", response.data);
                if (response.data.role !== "admin") {
                    if (response.data.role === "student") {
                        router.push("/student/dashboard");
                    }
                    else {
                        router.push("/login");
                    }
                }

            } catch (error) {
                console.error("Error verifying token:", error);
                router.push("/login");
            }
        };


        const token = window.localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }

        else {
            varifyToken();
        }
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard! Here you can manage users, view analytics, and perform administrative tasks.</p>
        </div>
    );
}