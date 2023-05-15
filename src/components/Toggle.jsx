'use client'

import { Simple } from "@theme-toggles/react"
import "@theme-toggles/react/css/Simple.css"

function ToggleTheme() {

    const theme = () => {
        console.log("theme")
    }

    return (
        
        //on the right top corner with absolute position
        <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
            <Simple duration={500} style={{ color: "#61dafb" }} onToggle={theme} />
        </div>



    )
}

export default ToggleTheme