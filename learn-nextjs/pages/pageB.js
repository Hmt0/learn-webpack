import Link from "next/link"
import Router from "next/router"

function PageB() {
    function goto() {
        Router.push("/")
    }
    return (
        <>
            <button onClick={goto}>找大瑞</button>
        </>
    )
}

export default PageB