import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import logo from '../assets/logo.png'
import logoLor from '../assets/lor/logo.png'
import { Link } from 'react-router-dom'
import { Translator, ImportDeck } from 'components'

function Header() {
    const dic = useSelector(state => state.dic)
    const [importVisible, setImportVisible] = useState(false)

    return (
        <>
            <header>
                <Link to="/" className='logo'>
                    <img src={logo} alt="Decklytics: Deck builder for mobile games" />
                </Link>
                <div>
                    <img src={logoLor} className="lor-logo" alt="Legends of Runeterra Best decks" />
                </div>
                <nav>
                    {/* <Link to='/'>{dic.cardGallery}</Link> */}
                    {/* <Link to='/decks'>Metas</Link> */}
                    {/* <Link onClick={() => setImportVisible(true)}>Import Deck</Link> */}
                </nav>
                <a className="button"
                    target="_blank"
                    href="https://playruneterra.com/"
                    rel="noopener noreferrer">
                    {dic.playNow}</a>
                <Translator />
            </header >
            {/* <ImportDeck visible={importVisible} hideCallback={() => setImportVisible(false)} /> */}
        </>
    )
}

export default Header