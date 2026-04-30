"use client";
import { useRouter } from "next/navigation";



export default function MyForm() {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push("/home");
    }


    return (
        <form>
            <input type="text" placeholder="Username" /> <br />
            <input type="password" placeholder="Password" /> <br />
            <button type="submit" onClick={handleClick}>Login</button>
        </form>
    );
}