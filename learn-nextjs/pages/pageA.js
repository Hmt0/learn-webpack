import Link from "next/link"
import { withRouter } from "next/router"
import axios from "axios"

function PageA({router, list}) {
    return(
        <>
            <Link href="/">
                <a>
                    {router.query.name}来为你服务了{list}
                </a>
            </Link>
        </>
    )
}

PageA.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios('mock.json').then(
            (res) => {
                console.log("结果：", res.data['明天'])
                resolve(res.data.明天)
            }
        )
    })
    return await promise
}

export default withRouter(PageA)