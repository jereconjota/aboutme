'use client'
import LinkList from './linkList/LinkList'
import SwitchLang from './SwitchLang'

function Info({ data }) {
    const theme = () => {
        console.log("theme")
    }

    return (
        <section className='info'>
            <p style={{}}>
                {data.text}
            </p>
            <SwitchLang />
            <LinkList links={data.links} />
        </section>
    )
}

export default Info