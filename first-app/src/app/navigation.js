
import Link from "next/link"

export default function Nav() {
    return (
        <nav>
            <Link href="/">Home</Link> |{" "}
            <Link href="/about">About</Link> |{" "}
            <Link href="/login">Login</Link>
            <Link href="/about/info">Info</Link>
            <Link href="/about/info/123">Info with ID</Link>
            <Link href="/about/info/123/456">Info with Multiple IDs</Link>
            <Link href="/users">Users</Link>
            <Link href="/post">Posts</Link>
        </nav>
    )

}