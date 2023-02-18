import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
    const [show,handleShow] = useState(false);

    useEffect( function foo() {
        window.addEventListener("scroll", foo, () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",foo);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
                alt="Neflix Logo" 
            />
            <img 
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Logo"
            />
        </div>
    );
}

export default Nav