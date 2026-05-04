"use client";
export default function AcessTokenRoute() {
    const token = window.localStorage.getItem("token");
    const role = JSON.parse(atob(token.split(".")[1])).role;
    return (
        <div>
            <h1>Access Token Route</h1>
            <p>Token: {token}</p>
            <p>Role: {role}</p>
        </div>
    )
}
