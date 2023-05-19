
import { useState } from 'react'

function Text({ paragraphs }) {
    const [lang, setLang] = useState("en")
    const text = paragraphs.find((text) => text.lang === lang).text

    const setEn = () => {
        setLang('en')
    }
    const setEs = () => {
        setLang('es')
    }

    return (
        <>
            <p>{text}</p>
            <div className='lang'>
                <button className={lang === 'en' ? 'select' : ''} onClick={setEn} >en</button> / <button className={lang === 'es' ? 'select' : ''} onClick={setEs}>es</button>
            </div>
        </>
    )
}

export default Text