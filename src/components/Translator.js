import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { languages } from 'config/languages'
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { actions as actionsTranslator } from 'store/ducks/translator'

const Translator = () => {
    let history = useHistory()
    const [visible, setvisible] = useState(false)
    const translator = useSelector(state => state.translator)
    const dispacth = useDispatch()

    const renderOptions = () => (
        <div className="language-container">
            {languages.map(item => renderOpt(item))}
        </div>
    )

    const renderOpt = (item) => (
        <Link
            key={item.code}
            className="language-option"
            onClick={() => { selectLanguage(item) }}>
            {item.name}
        </Link>
        // <button
        //     key={item.code}
        //     className="language-option"
        //     onClick={() => { selectLanguage(item.name, item.code) }}>
        //     {item.name}
        // </button>
    )

    const selectLanguage = (item) => {
        setvisible(!visible)
        history.push(`/${item.path}`)
        dispacth(actionsTranslator.identify(item.path))
    }

    return (
        <>
            <button
                onClick={() => setvisible(!visible)}
                className="language-header language-option">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.488 9.6C11.552 9.072 11.6 8.544 11.6 8C11.6 7.456 11.552 6.928 11.488 6.4H14.192C14.32 6.912 14.4 7.448 14.4 8C14.4 8.552 14.32 9.088 14.192 9.6H11.488ZM10.072 14.048C10.552 13.16 10.92 12.2 11.176 11.2H13.536C12.768 12.52 11.544 13.544 10.072 14.048ZM9.872 9.6H6.128C6.048 9.072 6 8.544 6 8C6 7.456 6.048 6.92 6.128 6.4H9.872C9.944 6.92 10 7.456 10 8C10 8.544 9.944 9.072 9.872 9.6ZM8 14.368C7.336 13.408 6.8 12.344 6.472 11.2H9.528C9.2 12.344 8.664 13.408 8 14.368ZM4.8 4.8H2.464C3.224 3.472 4.456 2.448 5.92 1.952C5.44 2.84 5.08 3.8 4.8 4.8ZM2.464 11.2H4.8C5.08 12.2 5.44 13.16 5.92 14.048C4.456 13.544 3.224 12.52 2.464 11.2ZM1.808 9.6C1.68 9.088 1.6 8.552 1.6 8C1.6 7.448 1.68 6.912 1.808 6.4H4.512C4.448 6.928 4.4 7.456 4.4 8C4.4 8.544 4.448 9.072 4.512 9.6H1.808ZM8 1.624C8.664 2.584 9.2 3.656 9.528 4.8H6.472C6.8 3.656 7.336 2.584 8 1.624ZM13.536 4.8H11.176C10.92 3.8 10.552 2.84 10.072 1.952C11.544 2.456 12.768 3.472 13.536 4.8ZM8 0C3.576 0 0 3.6 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0Z" fill="white" />
                </svg>
                {translator.name}
                <svg className="seta" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6L8 11L13 6H3Z" fill="white" />
                </svg>
            </button>
            {visible && renderOptions()}
        </>
    )
}

export default Translator