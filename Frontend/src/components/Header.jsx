import React from "react";

function Header(props){
    return <header>
        <div className="logo">
            <img src="src/images/new_logo.svg" alt="" />
            
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <h1>Healfy</h1>
        </div>
    </header>
}

export default Header;