"use client";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
                if (response.data.role !== "student") {
                    if (response.data.role === "admin") {
                        router.push("/admin/dashboard");
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
            <h1>Student Dashboard</h1>
            <p>Welcome to the student dashboard! Here you can view your courses, assignments, and other student-related information.</p>
        </div>
    );
}