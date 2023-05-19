import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

function loading() {

    return (
        <div className="main">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px" }}>
                <Skeleton circle={true} height={120} width={120} />
                <Skeleton height={30} width={200} />
                <Skeleton height={20} width={100} />
                <Skeleton width={300} count={8} />
                <Skeleton width={30} count={1} />

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                    <Skeleton circle={true} height={40} width={40} />
                    <Skeleton circle={true} height={40} width={40} />
                    <Skeleton circle={true} height={40} width={40} />
                </div>
                <Skeleton circle={true} height={60} width={60} />
            </div>
        </div>
    )
}

export default loading