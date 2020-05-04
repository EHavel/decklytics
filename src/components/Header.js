import React from 'react'
import logo from '../assets/dinossauro.png'

function Header() {
    return (
        <header className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Bem vindo ao RexList!</p>
        </header>
    )
}

export default Header