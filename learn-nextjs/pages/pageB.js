import Link from "next/link"
import Router, { withRouter } from "next/router"

function PageB({router}) {
    function goto() {
        Router.push("/")
    }
    return (
        <>
            <button onClick={goto}>{router.query.name}来为你服务了</button>
        </>
    )
}

export default withRouter(PageB)