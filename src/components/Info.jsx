'use client'
import LinkList from './linkList/LinkList'
import Text from './Text'

function Info({ data }) {

    return (
        <section className='info'>
            <Text paragraphs={data.paragraph} />
            <LinkList links={data.links} />
        </section>
    )
}

export default Info