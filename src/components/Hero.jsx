import Image from "next/image"

function Hero({ data }) {    
    return (
        <div style={{textAlign: 'center', marginBottom: ".8rem"}}>
            <div >
                <Image 
                src="/profile.jpg"
                alt={data.username}
                width={120}
                height={120}
                style={{ borderRadius: '4%' }}
                />
            </div>
            <h1 style={{ textAlign: 'center', padding: '.2rem' }}>{data.name}</h1>
            <h2 style={{  padding: '.2rem'}}>@{data.username}</h2>
        </div>
    )
}

export default Hero