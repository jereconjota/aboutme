import Link from "next/link";
import "./linklist.css";
import Image from "next/image"

function LinkList({ links }) {

    return (
        <ul className='list'>
            {
                links.map((link, index) => {
                    return (
                        <li className='listItem' key={index}>
                            <Link href={link.url} target='_blank'>
                                <Image src={link.localImage} alt={link.name} width={40} height={40} />
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default LinkList