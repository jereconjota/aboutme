import Link from "next/link";
import styles from './linkList.module.css'

async function LinkList({ links }) {


    return (
        <ul className={styles.list}>
            {
                links.map((link, index) => {
                    return (
                        <li className={styles.listItem} key={index}>
                            <Link href={link.url} target='_blank'>
                                <div className={styles.iconBox}>
                                    <div className={styles[link.name.toLowerCase()]}></div>
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