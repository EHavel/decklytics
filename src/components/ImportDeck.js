import React, { useState } from 'react'
import { Link } from "react-router-dom"

const ImportDeck = ({ visible, hideCallback }) => {
    const [code, setCode] = useState("")

    const handleChange = (event) => {
        setCode(event.target.value)
    }

    if (!visible) return null
    return (
        <>
            <div className="background-modal"></div>
            <div className="import-modal">
                <h2>Análise seu deck</h2>
                <p>Importe qualquer deck por código de identificação dele para você ver uma análise detalhada de todas as suas cartas.</p>
                <input type="text"
                    onChange={handleChange}
                    value={code}
                    placeholder="código do deck" />
                <Link to={`/deck/${code}`} className="button-import">Importar</Link>
                <button className="button-close" onClick={hideCallback}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                </button>
            </div>
        </>
    )
}

export default ImportDeck