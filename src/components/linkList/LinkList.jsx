import Link from "next/link";
import "./linklist.css";

function LinkList({ links }) {

    return (
        <ul className='list'>
            {
                links.map((link, index) => {
                    return (
                        <li className='listItem' key={index}>
                            <Link href={link.url} target='_blank'>
                                <div className='iconBox'>
                                    {/* <div className={`${link.name.toLowerCase()}-white`}></div> */}
                                    <div className={`${link.name.toLowerCase()}`}></div>
                                </div>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default LinkList