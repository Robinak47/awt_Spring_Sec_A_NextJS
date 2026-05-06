import Link from "next/link";

export default function CustomHeader() {
  return (
    <header className=" border-1 border-black-800  mb-4">
      <div className=" text-[20px] mb-4 text-center"> XYZ COMPANY</div>
      <nav>
        <Link className="m-4" href="/">Home</Link>
        <Link className="m-4" href="/login">Login</Link>
        <Link className="m-4" href="/admin/dashboard">Admin Dashboard</Link>
        <Link className="m-4" href="/student/dashboard">Student Dashboard</Link>
        <Link className="m-4" href="/admin/addUser">Add User</Link>
      </nav>
    </header>
  );
}


