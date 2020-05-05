import React from 'react'
import logo from '../assets/logo.png'
import logoLor from '../assets/lor/logo.png'
import { Languages } from 'components'

function Header() {
    return (
        <header>
            <a href="/" className='logo'>
                <img src={logo} alt="Decklytics: Deck builder for mobile games" />
            </a>
            <img src={logoLor} className="lor-logo" alt="Legends of Runeterra Best decks" />
            <Languages />
        </header>
    )
}

export default Header