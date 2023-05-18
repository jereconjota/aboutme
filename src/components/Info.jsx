'use client'
import LinkList from './linkList/LinkList'

function Info({ data }) {
    const theme = () => {
        console.log("theme")
    }

    return (
        <section className='info'>
            <p style={{}}>
                {data.text}
            </p>
            <LinkList links={data.links} />
        </section>
    )
}

export default Info