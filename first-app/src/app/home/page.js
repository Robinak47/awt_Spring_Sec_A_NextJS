"use client";

import meow from './home.module.css';
import Nav from '../navigation';

function HomePage() {

    console.log("Home page rendered"); // This will log when the HomePage component is rendered
    return (
        <>
            <Nav />
            <div className={meow.homeDiv}>
                <h1>Welcome to the Home Page</h1>
                <p>This is the main page of our application.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { alert("meow moew") }}>Click Me</button>
            </div>
        </>

    );
}

export default HomePage;