import Link from "next/link";
import { useEffect, useState } from "react";


function LinkList({ theme }) {
    const [twitty, setTwitty] = useState("twitter");
    const [github, setGithub] = useState("github");
    const [blog, setBlog] = useState("dino");
    const [linkedin, setLinkedin] = useState("linkedin")

    useEffect(() => {
        if (theme) {
            setTwitty("twitter-white");
            setGithub("github-white");
            setBlog("dino-white");
            setLinkedin("linkedin-white")
        } else {
            setTwitty("twitter");
            setGithub("github");
            setBlog("dino");
            setLinkedin("linkedin")
        }
    }, [theme])



    return (
        <ul className='list'>
            <li className='listItem'>
                <Link href="https://notes.jereconjota.com" target='_blank'>
                    <div className='icon-box'>
                        <div className={blog}></div>
                    </div>
                </Link>
            </li>
            <li className='listItem'>
                <Link href="https://github.com/jereconjota" target='_blank'>
                    <div className='icon-box'>
                        <div className={github}></div>
                    </div>
                </Link>
            </li>
            <li className='listItem'>
                <Link href="https://twitter.com/jereconj0ta" target='_blank'>
                    <div className='icon-box'>
                        <div className={twitty}></div>
                    </div>
                </Link>
            </li>
            <li className='listItem'>
                <Link href="https://www.linkedin.com/in/jereconjota/" target='_blank'>
                    <div className='icon-box'>
                        <div className={linkedin}></div>
                    </div>
                </Link>
            </li>
        </ul>
    )
}

export default LinkList